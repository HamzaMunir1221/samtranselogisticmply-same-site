import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, CheckCircle, ArrowRight, FileText, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: FileText, title: "Documentation", desc: "Complete APTTA documentation support" },
  { icon: Truck, title: "Cross-Border", desc: "Seamless transit through checkpoints" },
  { icon: Shield, title: "Compliance", desc: "Full regulatory compliance assured" },
];

const services = [
  "Afghan-Pakistan Transit Trade (APTTA)",
  "Cross-Border Documentation",
  "Transit Bond Management",
  "Customs Escort Services",
  "Border Clearance Support",
  "Multi-Modal Transit Solutions",
];

export default function AfghanTransit() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Globe className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Afghan <span className="text-gradient">Transit</span> Trade
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specialized cross-border trade services facilitating seamless 
              transit operations between Pakistan and Afghanistan.
            </p>
            <Button size="lg" asChild>
              <a href="/#quote">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Transit Trade Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Transit Trade Support?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert assistance for all your Afghan transit trade requirements.
          </p>
          <Button size="lg" asChild>
            <a href="/#quote">Contact Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
