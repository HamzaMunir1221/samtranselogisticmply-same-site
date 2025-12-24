import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Ship, CheckCircle, ArrowRight, Plane, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const modes = [
  { icon: Ship, title: "Ocean Freight", desc: "FCL & LCL shipments worldwide" },
  { icon: Plane, title: "Air Freight", desc: "Express and standard air cargo" },
  { icon: Truck, title: "Road Freight", desc: "Cross-border trucking solutions" },
];

const features = [
  "Door-to-Door Delivery Services",
  "Real-time Shipment Tracking",
  "Multimodal Transport Solutions",
  "Cargo Insurance Coverage",
  "Documentation & Customs Support",
  "Competitive Rate Negotiation",
];

export default function FreightForwarding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Ship className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Freight <span className="text-gradient">Forwarding</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Global cargo movement solutions connecting you to markets worldwide through 
              our extensive network of carriers and logistics partners.
            </p>
            <Button size="lg" asChild>
              <a href="/#quote">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Transportation Modes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modes.map((mode) => (
              <Card key={mode.title} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <mode.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{mode.title}</h3>
                  <p className="text-muted-foreground">{mode.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Freight Services?
              </h2>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Request a Freight Quote</h3>
                <p className="text-muted-foreground mb-6">
                  Get competitive rates for your shipment. Our team will respond within 24 hours.
                </p>
                <Button className="w-full" asChild>
                  <a href="/#quote">Get Quote Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
