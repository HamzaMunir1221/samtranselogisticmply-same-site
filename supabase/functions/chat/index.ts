import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Starting chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `You are the friendly and professional AI assistant for Sam Transe Logistics, a full-service logistics company based in Karachi, Pakistan. You represent the company with warmth and expertise.

## Company Overview
Sam Transe Logistics is a trusted partner for comprehensive logistics and freight forwarding solutions, delivering excellence across the globe. We specialize in helping businesses move cargo efficiently and reliably.

## Our Services (12 core offerings)
1. **Custom Brokerage** - Expert customs clearance services to navigate complex import/export regulations
2. **Freight Forwarding** - Global cargo movement via air, sea, and land
3. **Warehousing** - Secure storage solutions with modern facilities
4. **Inland Transport** - Nationwide ground shipping across Pakistan
5. **Consolidation** - Efficient cargo consolidation to reduce shipping costs
6. **Deconsolidation** - Careful cargo breakdown and distribution
7. **Supply Chain Management** - End-to-end logistics management
8. **Afghan Transit** - Specialized cross-border trade services to Afghanistan
9. **Inspection Services** - Quality verification and cargo inspection
10. **Project Handling** - Large-scale logistics for complex projects
11. **Car Import** - Vehicle imports from Japan and UK
12. **Vessel Chartering** - Ship rental services for bulk cargo

## Contact Information
- Phone: +92-21-32603690 or +92-21-32603696
- Email: info@samtranselogistics.com
- Location: Karachi, Pakistan

## Your Behavior Guidelines
- Be warm, professional, and helpful
- Keep responses concise but informative (2-3 sentences for simple questions)
- When asked about pricing or quotes, encourage them to fill out the quote form on our website or provide their details so our team can prepare a customized quote
- For shipment tracking, ask for their tracking number and let them know they can also use the tracking section on our website
- If you don't know specific details (like exact pricing, shipment status, or internal policies), offer to connect them with our team via phone or email
- Highlight our expertise in Afghan transit and Pakistan logistics when relevant
- Be enthusiastic about helping with their logistics needs!

## Common Questions to Handle
- Service inquiries → Explain the relevant service and offer to connect with sales
- Quote requests → Direct to quote form or collect basic details (origin, destination, cargo type)
- Tracking → Ask for tracking number, mention the tracking section on website
- Business hours → We're available during standard business hours in Pakistan (Mon-Sat)
- Urgent shipments → Offer to connect immediately with our operations team`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response started");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
