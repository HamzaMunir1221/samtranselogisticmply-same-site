import { useState } from "react";
import { Search, Container, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function Tracking() {
  const { toast } = useToast();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a container/tracking number.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Tracking Initiated",
        description: "Your container tracking request has been submitted.",
      });
    }, 1500);
  };

  return (
    <section id="tracking" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">
              Track Your Shipment
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Container <span className="text-gradient">Tracking</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Enter your container or tracking number to get real-time updates on your shipment.
            </p>
          </div>

          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
            <div className="relative flex-1">
              <Container className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter Container/Tracking Number"
                className="pl-12 h-14 bg-background text-lg"
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="h-14 px-8 bg-primary hover:bg-primary/90 gap-2"
              disabled={isLoading}
            >
              {isLoading ? "Tracking..." : "Track Now"}
              <Search className="h-5 w-5" />
            </Button>
          </form>

          {/* Tracking Timeline Example */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Example Tracking Timeline
            </h3>
            <div className="space-y-6">
              {[
                { status: "Arrived at Destination Port", location: "Karachi, Pakistan", time: "Dec 24, 2024 - 10:30 AM", complete: true },
                { status: "In Transit - Sea Freight", location: "Arabian Sea", time: "Dec 20, 2024 - 08:00 AM", complete: true },
                { status: "Departed Origin Port", location: "Dubai, UAE", time: "Dec 15, 2024 - 02:15 PM", complete: true },
                { status: "Customs Cleared", location: "Dubai, UAE", time: "Dec 14, 2024 - 11:45 AM", complete: true },
                { status: "Shipment Received", location: "Dubai, UAE", time: "Dec 12, 2024 - 09:00 AM", complete: true },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.complete ? 'bg-primary' : 'bg-muted'
                    }`}>
                      {step.complete ? (
                        <CheckCircle className="h-5 w-5 text-primary-foreground" />
                      ) : (
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    {index < 4 && (
                      <div className={`w-0.5 h-16 ${step.complete ? 'bg-primary' : 'bg-muted'}`} />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className="font-semibold text-foreground">{step.status}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{step.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Clock className="h-4 w-4" />
                      <span>{step.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
