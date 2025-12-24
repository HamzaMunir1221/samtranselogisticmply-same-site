import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: QuoteNotificationRequest = await req.json();
    console.log("Received quote notification request:", data);

    // Send confirmation email to the customer using Resend API directly
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Overseas Transit Agency <onboarding@resend.dev>",
        to: [data.email],
        subject: "We've Received Your Quote Request!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1a365d;">Thank You, ${data.fullName}!</h1>
            <p>We have received your quote request and our team will get back to you within 24 hours.</p>
            
            <h3 style="color: #2563eb; margin-top: 24px;">Your Request Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0;">${data.serviceType}</td>
              </tr>
              ${data.origin ? `<tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">Origin:</td>
                <td style="padding: 8px 0;">${data.origin}</td>
              </tr>` : ''}
              ${data.destination ? `<tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">Destination:</td>
                <td style="padding: 8px 0;">${data.destination}</td>
              </tr>` : ''}
              ${data.message ? `<tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold;">Details:</td>
                <td style="padding: 8px 0;">${data.message}</td>
              </tr>` : ''}
            </table>
            
            <p style="margin-top: 24px;">If you have any urgent questions, feel free to contact us directly.</p>
            
            <p style="color: #6b7280; margin-top: 32px; font-size: 14px;">
              Best regards,<br>
              <strong>Overseas Transit Agency Team</strong>
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
