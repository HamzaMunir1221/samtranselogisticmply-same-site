-- Add database-level validation constraints to quote_submissions for defense in depth
-- These constraints ensure data integrity even if service role is used directly

-- Add length constraints to prevent abuse
ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_full_name_length CHECK (char_length(full_name) >= 2 AND char_length(full_name) <= 100);

ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_email_length CHECK (char_length(email) >= 5 AND char_length(email) <= 255);

ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_email_format CHECK (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$');

ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_phone_length CHECK (phone IS NULL OR char_length(phone) <= 50);

ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_company_length CHECK (company IS NULL OR char_length(company) <= 200);

ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_service_type_length CHECK (char_length(service_type) >= 1 AND char_length(service_type) <= 100);

ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_origin_length CHECK (origin IS NULL OR char_length(origin) <= 200);

ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_destination_length CHECK (destination IS NULL OR char_length(destination) <= 200);

ALTER TABLE public.quote_submissions
ADD CONSTRAINT quote_submissions_message_length CHECK (message IS NULL OR char_length(message) <= 5000);

-- Remove ip_hash column as it could be used for tracking and is not being used
ALTER TABLE public.quote_submissions DROP COLUMN IF EXISTS ip_hash;