-- Create a table for quote submissions
CREATE TABLE public.quote_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_type TEXT NOT NULL,
  origin TEXT,
  destination TEXT,
  cargo_details TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quote submissions (public form)
CREATE POLICY "Anyone can submit a quote" 
ON public.quote_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only allow authenticated admins to view submissions (for future admin panel)
-- For now, we'll add a basic select policy that can be adjusted later
CREATE POLICY "Submissions are not publicly readable" 
ON public.quote_submissions 
FOR SELECT 
USING (false);