import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteNotificationRequest {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  origin?: string;
  destination?: string;
  message?: string;
}

// HTML escaping function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(identifier: string, maxRequests = 3, windowMs = 3600000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

// Input validation
function validateInput(data: QuoteNotificationRequest): string | null {
  if (!data.fullName || data.fullName.length > 100) {
    return "Invalid name (max 100 characters)";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 255) {
    return "Invalid email address";
  }
  if (!data.serviceType || data.serviceType.length > 100) {
    return "Invalid service type";
  }
  if (data.origin && data.origin.length > 200) {
    return "Origin too long (max 200 characters)";
  }
  if (data.destination && data.destination.length > 200) {
    return "Destination too long (max 200 characters)";
  }
  if (data.message && data.message.length > 1000) {
    return "Message too long (max 1000 characters)";
  }
  return null;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: QuoteNotificationRequest = await req.json();
    console.log("Received quote notification request for:", data.email);

    // Validate input
    const validationError = validateInput(data);
    if (validationError) {
      console.log("Validation failed:", validationError);
      return new Response(
        JSON.stringify({ error: validationError }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Rate limiting by email
    if (!checkRateLimit(data.email, 3, 3600000)) {
      console.log("Rate limit exceeded for:", data.email);
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Escape all user inputs for HTML
    const safeName = escapeHtml(data.fullName);
    const safeServiceType = escapeHtml(data.serviceType);
    const safeOrigin = data.origin ? escapeHtml(data.origin) : '';
    const safeDestination = data.destination ? escapeHtml(data.destination) : '';
    const safeMessage = data.message ? escapeHtml(data.message) : '';

    // Send confirmation email to the customer using Resend API directly
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sam Transe Logistics <onboarding@resend.dev>",
        to: [data.email],
        subject: "We've Received Your Quote Request!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1a365d;">Thank You, ${safeName}!</h1>
            <p>We have received your quote request and our team will get back to you within 24 hours.</p>
            
            <h3 style="color: #2563eb; margin-top: 24px;">Your Request Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0;">${safeServiceType}</td>
              </tr>
              ${safeOrigin ? `<tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">Origin:</td>
                <td style="padding: 8px 0;">${safeOrigin}</td>
              </tr>` : ''}
              ${safeDestination ? `<tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">Destination:</td>
                <td style="padding: 8px 0;">${safeDestination}</td>
              </tr>` : ''}
              ${safeMessage ? `<tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">Details:</td>
                <td style="padding: 8px 0;">${safeMessage}</td>
              </tr>` : ''}
            </table>
            
            <p style="margin-top: 24px;">If you have any urgent questions, feel free to contact us directly:</p>
            
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-top: 16px;">
              <p style="margin: 0 0 8px 0;"><strong>📞 Phone:</strong> <a href="tel:+923184833990" style="color: #2563eb;">0318-4833990</a></p>
              <p style="margin: 0 0 8px 0;"><strong>📧 Email:</strong> <a href="mailto:samtranselogistics@gmail.com" style="color: #2563eb;">samtranselogistics@gmail.com</a></p>
              <p style="margin: 0;"><strong>💬 WhatsApp:</strong> <a href="https://wa.me/923184833990" style="color: #25D366;">Chat with us</a></p>
            </div>
            
            <p style="color: #6b7280; margin-top: 32px; font-size: 14px;">
              Best regards,<br>
              <strong>Sam Transe Logistics Team</strong><br>
              Karachi, Pakistan
            </p>
          </div>
        `,
      }),
    });

    const emailResult = await emailResponse.json();
    console.log("Email sent:", emailResult);

    if (!emailResponse.ok) {
      throw new Error(emailResult.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-quote-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
