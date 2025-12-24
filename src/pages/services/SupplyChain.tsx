import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BarChart3, CheckCircle, ArrowRight, Cog, LineChart, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  { icon: Cog, title: "Process Optimization", desc: "Streamlined operations for efficiency" },
  { icon: LineChart, title: "Analytics & Insights", desc: "Data-driven decision making" },
  { icon: Network, title: "Integration", desc: "Connected supply chain ecosystem" },
];

const services = [
  "End-to-End Supply Chain Design",
  "Vendor Management",
  "Demand Planning & Forecasting",
  "Inventory Optimization",
  "Distribution Network Design",
  "Performance Analytics & KPIs",
];

export default function SupplyChain() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Supply Chain <span className="text-gradient">Management</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              End-to-end supply chain solutions that optimize your operations, 
              reduce costs, and improve customer satisfaction.
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
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Comprehensive SCM Services
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
            Optimize Your Supply Chain
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us for comprehensive supply chain management solutions.
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
