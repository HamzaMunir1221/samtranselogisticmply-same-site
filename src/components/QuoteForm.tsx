import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const services = [
  "Custom Brokerage",
  "Consolidation",
  "Deconsolidation",
  "Inland Transport",
  "Warehousing",
  "Supply Chain",
  "Afghan Transit",
  "Inspection",
  "Project Handling",
  "Car Import",
  "Vessel Chartering",
  "Freight Forwarding",
];

export function QuoteForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    serviceType: "",
    origin: "",
    destination: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate service type since Select doesn't support native required
    if (!formData.serviceType) {
      toast({
        title: "Service Required",
        description: "Please select a service type.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Save to database
      const { error } = await supabase.from("quote_submissions").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        service_type: formData.serviceType,
        origin: formData.origin || null,
        destination: formData.destination || null,
        message: formData.message || null,
      });

      if (error) throw error;

      // Send email notification (don't block on failure)
      supabase.functions.invoke("send-quote-notification", {
        body: formData,
      }).catch((emailError) => {
        console.error("Email notification failed:", emailError);
      });

      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        serviceType: "",
        origin: "",
        destination: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Error",
        description: "Failed to submit your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium tracking-wider uppercase mb-4">
              Let's Do Business
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get a Free<br />
              <span className="text-gradient">Quotation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tell us about your shipping needs and we'll provide you with a 
              competitive quote. Our team responds within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Fill the Form</h4>
                  <p className="text-sm text-muted-foreground">Provide your shipping details</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Get Quote</h4>
                  <p className="text-sm text-muted-foreground">Receive competitive pricing</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ship It</h4>
                  <p className="text-sm text-muted-foreground">Start your shipment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="fullName"
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              <Select 
                value={formData.serviceType} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                required
              >
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="origin"
                  placeholder="From City"
                  value={formData.origin}
                  onChange={handleChange}
                  className="bg-background"
                />
                <Input
                  name="destination"
                  placeholder="To City"
                  value={formData.destination}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Additional Details / Cargo Description"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-background resize-none"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 gap-2"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Inquiry"} 
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
