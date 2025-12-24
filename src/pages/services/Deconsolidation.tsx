import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PackageOpen, CheckCircle, ArrowRight, ScanLine, ClipboardList, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const process = [
  { icon: ScanLine, title: "Cargo Receipt", desc: "Secure receiving and documentation" },
  { icon: ClipboardList, title: "Inventory Check", desc: "Detailed verification and sorting" },
  { icon: Truck, title: "Distribution", desc: "Delivery to final destinations" },
];

const services = [
  "Container Devanning",
  "Cargo Sorting & Segregation",
  "Quality Inspection",
  "Repackaging Services",
  "Inventory Documentation",
  "Local Distribution",
];

export default function Deconsolidation() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <PackageOpen className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-gradient">Deconsolidation</span> Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional cargo breakdown and distribution services ensuring 
              careful handling and accurate delivery to multiple consignees.
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
            {process.map((item) => (
              <Card key={item.title} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Our Deconsolidation Services
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
            Need Deconsolidation Services?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us handle your cargo breakdown and distribution efficiently.
          </p>
          <Button size="lg" asChild>
            <a href="/#quote">Request Quote</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
