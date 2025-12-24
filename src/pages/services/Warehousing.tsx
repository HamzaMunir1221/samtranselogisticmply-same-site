import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Warehouse, CheckCircle, ArrowRight, Shield, Clock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const features = [
  { icon: Shield, title: "Secure Storage", desc: "24/7 security with CCTV monitoring" },
  { icon: Clock, title: "Flexible Terms", desc: "Short and long-term storage options" },
  { icon: BarChart3, title: "Inventory Management", desc: "Real-time stock tracking system" },
];

const services = [
  "Bonded Warehouse Facilities",
  "Temperature-Controlled Storage",
  "Pick & Pack Services",
  "Cross-Docking Operations",
  "Inventory Management Systems",
  "Distribution Services",
];

export default function WarehousingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Warehouse className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-gradient">Warehousing</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Secure, modern storage facilities with advanced inventory management 
              to keep your goods safe and accessible.
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Complete Warehousing Services
              </h2>
              <p className="text-muted-foreground mb-8">
                Our state-of-the-art warehousing facilities offer comprehensive storage 
                and distribution solutions tailored to your business needs.
              </p>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Storage Inquiry</h3>
                <p className="text-muted-foreground mb-6">
                  Need storage space? Contact us for flexible warehousing solutions.
                </p>
                <Button className="w-full" asChild>
                  <a href="/#quote">Request Quote</a>
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
