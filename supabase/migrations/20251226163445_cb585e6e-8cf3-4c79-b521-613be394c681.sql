-- Drop existing policies
DROP POLICY IF EXISTS "Admins can view submissions" ON public.quote_submissions;
DROP POLICY IF EXISTS "Admins can update submissions" ON public.quote_submissions;
DROP POLICY IF EXISTS "Admins can delete submissions" ON public.quote_submissions;
DROP POLICY IF EXISTS "Service role can insert" ON public.quote_submissions;

-- Recreate as PERMISSIVE policies with explicit role targeting
-- PERMISSIVE means: if ANY policy matches, access is granted
-- By only granting to specific roles, others are denied by default

-- SELECT: Only authenticated admins
CREATE POLICY "Admins can view submissions"
ON public.quote_submissions
AS PERMISSIVE
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- INSERT: Only service role (used by edge functions)
CREATE POLICY "Service role can insert"
ON public.quote_submissions
AS PERMISSIVE
FOR INSERT
TO service_role
WITH CHECK (true);

-- UPDATE: Only authenticated admins
CREATE POLICY "Admins can update submissions"
ON public.quote_submissions
AS PERMISSIVE
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- DELETE: Only authenticated admins
CREATE POLICY "Admins can delete submissions"
ON public.quote_submissions
AS PERMISSIVE
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));