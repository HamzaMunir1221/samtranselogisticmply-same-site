import { ArrowRight, Briefcase, Ship, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ship.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Container ship at sea during sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium tracking-wider uppercase mb-4 animate-fade-in">
            Pakistan's Leading Forwarding & Clearing Agents
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up leading-tight">
            Beyond Now –<br />
            <span className="text-gradient">Drive Change</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            OTA Group has been committed to providing exceptional, reliable & innovative 
            solutions in moving by Land, by Air, and by Ship since 1976.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-background/10 backdrop-blur-sm text-foreground hover:bg-background/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <a href="#quote" className="flex items-center gap-4 py-6 px-4 hover:bg-muted/50 transition-colors group">
              <Briefcase className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-foreground">Let's Do Business</h3>
                <p className="text-sm text-muted-foreground">Get a quotation today</p>
              </div>
            </a>
            <a href="#services" className="flex items-center gap-4 py-6 px-4 hover:bg-muted/50 transition-colors group">
              <Ship className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-foreground">Our Services</h3>
                <p className="text-sm text-muted-foreground">Explore what we offer</p>
              </div>
            </a>
            <a href="#why-us" className="flex items-center gap-4 py-6 px-4 hover:bg-muted/50 transition-colors group">
              <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-foreground">Why Choose Us</h3>
                <p className="text-sm text-muted-foreground">45+ years of excellence</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
