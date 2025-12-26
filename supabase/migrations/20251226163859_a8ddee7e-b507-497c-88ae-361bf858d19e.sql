-- Add explicit deny policy for anonymous users on user_roles
CREATE POLICY "Deny public access to roles"
ON public.user_roles
AS PERMISSIVE
FOR SELECT
TO anon
USING (false);