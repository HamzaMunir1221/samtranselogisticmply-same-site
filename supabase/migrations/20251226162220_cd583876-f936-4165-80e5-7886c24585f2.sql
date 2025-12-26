-- Create a function to automatically assign admin role to the first user
-- This solves the bootstrap problem securely
CREATE OR REPLACE FUNCTION public.handle_new_user_role()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_count INTEGER;
BEGIN
  -- Check if this is the first user
  SELECT COUNT(*) INTO user_count FROM public.user_roles;
  
  -- If no users exist yet, make this user an admin
  IF user_count = 0 THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin');
  ELSE
    -- Otherwise, assign default user role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'user');
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to automatically assign roles when a new user signs up
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user_role();

-- Add rate limiting metadata column to quote_submissions
ALTER TABLE public.quote_submissions 
ADD COLUMN IF NOT EXISTS ip_hash TEXT,
ADD COLUMN IF NOT EXISTS submitted_at TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Create index for rate limiting queries
CREATE INDEX IF NOT EXISTS idx_quote_submissions_submitted_at 
ON public.quote_submissions(submitted_at);

-- Create a function to check rate limiting (max 5 submissions per hour from same email)
CREATE OR REPLACE FUNCTION public.check_quote_rate_limit(submitter_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_submissions INTEGER;
BEGIN
  SELECT COUNT(*) INTO recent_submissions
  FROM public.quote_submissions
  WHERE email = submitter_email
    AND created_at > (now() - INTERVAL '1 hour');
  
  RETURN recent_submissions < 5;
END;
$$;

-- Drop the old permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit a quote" ON public.quote_submissions;

-- Create a new INSERT policy with rate limiting
CREATE POLICY "Rate limited quote submissions"
ON public.quote_submissions
FOR INSERT
WITH CHECK (
  public.check_quote_rate_limit(email)
);