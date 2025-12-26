-- Add explicit deny policy for anonymous users
CREATE POLICY "Deny public access"
ON public.quote_submissions
AS PERMISSIVE
FOR SELECT
TO anon
USING (false);