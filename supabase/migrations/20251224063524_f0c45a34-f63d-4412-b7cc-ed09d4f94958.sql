-- Update RLS policy to allow authenticated users to view submissions
DROP POLICY IF EXISTS "Submissions are not publicly readable" ON public.quote_submissions;

CREATE POLICY "Authenticated users can view submissions" 
ON public.quote_submissions 
FOR SELECT 
TO authenticated
USING (true);

-- Allow authenticated users to delete submissions
CREATE POLICY "Authenticated users can delete submissions" 
ON public.quote_submissions 
FOR DELETE 
TO authenticated
USING (true);

-- Allow authenticated users to update submissions (for status changes, notes, etc.)
CREATE POLICY "Authenticated users can update submissions" 
ON public.quote_submissions 
FOR UPDATE 
TO authenticated
USING (true);

-- Add status column for tracking quote status
ALTER TABLE public.quote_submissions 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS notes TEXT;