import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Boxes, CheckCircle, ArrowRight, Wrench, HardHat, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  { icon: Wrench, title: "Heavy Lift", desc: "Specialized equipment handling" },
  { icon: HardHat, title: "Project Management", desc: "Dedicated project coordinators" },
  { icon: Truck, title: "Specialized Transport", desc: "Custom transport solutions" },
];

const services = [
  "Heavy Lift & Out-of-Gauge Cargo",
  "Plant & Machinery Relocation",
  "Project Cargo Logistics",
  "Engineering & Planning Support",
  "Multi-Modal Project Solutions",
  "On-Site Supervision",
];

export default function ProjectHandling() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Boxes className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Project <span className="text-gradient">Handling</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Large-scale logistics solutions for complex projects requiring 
              specialized handling, equipment, and expertise.
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
            {capabilities.map((cap) => (
              <Card key={cap.title} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <cap.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Project Cargo Services
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
            Have a Complex Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our project cargo experts handle your challenging logistics needs.
          </p>
          <Button size="lg" asChild>
            <a href="/#quote">Discuss Your Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
