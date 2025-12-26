-- Drop all existing INSERT policies for quote_submissions
DROP POLICY IF EXISTS "Rate limited quote submissions" ON public.quote_submissions;
DROP POLICY IF EXISTS "Anyone can submit a quote" ON public.quote_submissions;

-- Create policy that only allows service role (edge functions) to insert
-- This blocks direct client-side inserts
CREATE POLICY "Only service role can insert quotes"
ON public.quote_submissions
FOR INSERT
TO service_role
WITH CHECK (true);

-- Also allow authenticated admins to insert for testing purposes
CREATE POLICY "Admins can insert quotes"
ON public.quote_submissions
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));