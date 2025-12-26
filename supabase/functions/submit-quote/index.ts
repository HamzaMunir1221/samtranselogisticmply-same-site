import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface QuoteSubmission {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  origin?: string;
  destination?: string;
  message?: string;
  honeypot?: string; // Bot trap field
  timestamp: number; // Form load timestamp
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: QuoteSubmission = await req.json();
    console.log("Received quote submission request");

    // === SPAM PROTECTION CHECKS ===

    // 1. Honeypot check - if filled, it's a bot
    if (body.honeypot && body.honeypot.length > 0) {
      console.log("Honeypot triggered - likely bot submission");
      // Return success to not alert the bot
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 2. Time-based check - form submitted too quickly (less than 3 seconds)
    const submissionTime = Date.now();
    const formLoadTime = body.timestamp || 0;
    const timeDiff = submissionTime - formLoadTime;
    
    if (timeDiff < 3000) {
      console.log(`Form submitted too quickly: ${timeDiff}ms - likely bot`);
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 3. Basic validation
    if (!body.fullName || body.fullName.trim().length < 2) {
      console.log("Invalid name");
      return new Response(
        JSON.stringify({ error: "Please provide a valid name" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!body.email || !isValidEmail(body.email)) {
      console.log("Invalid email");
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!body.serviceType || body.serviceType.trim().length === 0) {
      console.log("Invalid service type");
      return new Response(
        JSON.stringify({ error: "Please select a service type" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 4. Content length checks (prevent spam with excessive content)
    if (body.message && body.message.length > 5000) {
      console.log("Message too long");
      return new Response(
        JSON.stringify({ error: "Message is too long" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // === INSERT INTO DATABASE ===
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check rate limit (max 5 submissions per hour from same email)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count } = await supabase
      .from("quote_submissions")
      .select("*", { count: "exact", head: true })
      .eq("email", body.email.toLowerCase().trim())
      .gte("created_at", oneHourAgo);

    if (count && count >= 5) {
      console.log(`Rate limit exceeded for email: ${body.email}`);
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert the submission
    const { error: insertError } = await supabase.from("quote_submissions").insert({
      full_name: body.fullName.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone?.trim() || null,
      company: body.company?.trim() || null,
      service_type: body.serviceType,
      origin: body.origin?.trim() || null,
      destination: body.destination?.trim() || null,
      message: body.message?.trim() || null,
    });

    if (insertError) {
      console.error("Database insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to submit quote. Please try again." }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log("Quote submission saved successfully");

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Error processing quote submission:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}