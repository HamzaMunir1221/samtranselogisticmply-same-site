-- Drop the existing RESTRICTIVE SELECT policy
DROP POLICY IF EXISTS "Only admins can view submissions" ON public.quote_submissions;

-- Create a proper PERMISSIVE SELECT policy that only allows admins
CREATE POLICY "Only admins can view submissions"
ON public.quote_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Also explicitly deny anonymous/public access with a restrictive policy
CREATE POLICY "Block anonymous access"
ON public.quote_submissions
FOR SELECT
TO anon
USING (false);