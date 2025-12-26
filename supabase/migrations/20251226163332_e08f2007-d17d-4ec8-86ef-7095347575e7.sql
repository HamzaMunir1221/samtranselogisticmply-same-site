-- Drop all existing policies on quote_submissions to start fresh
DROP POLICY IF EXISTS "Block anonymous access" ON public.quote_submissions;
DROP POLICY IF EXISTS "Only admins can view submissions" ON public.quote_submissions;
DROP POLICY IF EXISTS "Only admins can update submissions" ON public.quote_submissions;
DROP POLICY IF EXISTS "Only admins can delete submissions" ON public.quote_submissions;
DROP POLICY IF EXISTS "Only service role can insert quotes" ON public.quote_submissions;
DROP POLICY IF EXISTS "Admins can insert quotes" ON public.quote_submissions;
DROP POLICY IF EXISTS "Rate limited quote submissions" ON public.quote_submissions;
DROP POLICY IF EXISTS "Anyone can submit a quote" ON public.quote_submissions;

-- Create clear PERMISSIVE policies (OR logic - any matching policy grants access)

-- SELECT: Only authenticated admins can view
CREATE POLICY "Admins can view submissions"
ON public.quote_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- INSERT: Only service role (edge functions) can insert
-- This ensures all submissions go through server-side validation
CREATE POLICY "Service role can insert"
ON public.quote_submissions
FOR INSERT
TO service_role
WITH CHECK (true);

-- UPDATE: Only authenticated admins can update
CREATE POLICY "Admins can update submissions"
ON public.quote_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- DELETE: Only authenticated admins can delete
CREATE POLICY "Admins can delete submissions"
ON public.quote_submissions
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));