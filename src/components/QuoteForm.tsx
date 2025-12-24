import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function QuoteForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1500);
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
                  placeholder="Your Name"
                  required
                  className="bg-background"
                />
                <Input
                  type="tel"
                  placeholder="Your Number"
                  required
                  className="bg-background"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                required
                className="bg-background"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="From City"
                  required
                  className="bg-background"
                />
                <Input
                  placeholder="To City"
                  required
                  className="bg-background"
                />
              </div>
              <Textarea
                placeholder="Subject / Additional Details"
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
