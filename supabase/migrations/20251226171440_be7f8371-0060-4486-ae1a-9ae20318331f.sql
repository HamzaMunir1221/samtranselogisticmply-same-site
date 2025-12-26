-- Create audit log table to track admin access to sensitive customer data
CREATE TABLE public.admin_access_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_user_id UUID NOT NULL,
    action TEXT NOT NULL,
    table_name TEXT NOT NULL,
    record_id UUID,
    accessed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    ip_address TEXT,
    details JSONB
);

-- Enable RLS on audit logs
ALTER TABLE public.admin_access_logs ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Only admins can view audit logs"
ON public.admin_access_logs
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Service role can insert audit logs (for triggers/functions)
CREATE POLICY "Service role can insert audit logs"
ON public.admin_access_logs
FOR INSERT
WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX idx_admin_access_logs_accessed_at ON public.admin_access_logs(accessed_at DESC);
CREATE INDEX idx_admin_access_logs_admin_user_id ON public.admin_access_logs(admin_user_id);
CREATE INDEX idx_admin_access_logs_table_name ON public.admin_access_logs(table_name);

-- Create function to log admin access
CREATE OR REPLACE FUNCTION public.log_admin_access(
    p_action TEXT,
    p_table_name TEXT,
    p_record_id UUID DEFAULT NULL,
    p_details JSONB DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Only log if user is authenticated and is an admin
    IF auth.uid() IS NOT NULL AND public.has_role(auth.uid(), 'admin') THEN
        INSERT INTO public.admin_access_logs (admin_user_id, action, table_name, record_id, details)
        VALUES (auth.uid(), p_action, p_table_name, p_record_id, p_details);
    END IF;
END;
$$;