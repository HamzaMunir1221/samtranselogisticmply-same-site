import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const features = [
  "Import & Export Customs Clearance",
  "Tariff Classification & Duty Optimization",
  "Documentation & Compliance Management",
  "Customs Valuation Services",
  "Temporary Import/Export Handling",
  "Duty Drawback & Refund Claims",
];

const process = [
  { step: "01", title: "Document Collection", desc: "We gather all necessary import/export documentation" },
  { step: "02", title: "Classification", desc: "Accurate HS code classification for optimal duty rates" },
  { step: "03", title: "Customs Filing", desc: "Electronic submission to customs authorities" },
  { step: "04", title: "Clearance", desc: "Swift clearance and delivery coordination" },
];

export default function CustomBrokerage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <FileCheck className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Custom <span className="text-gradient">Brokerage</span> Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert customs clearance services ensuring smooth and compliant import/export operations 
              across international borders with minimal delays.
            </p>
            <Button size="lg" asChild>
              <a href="/#quote">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Comprehensive Customs Solutions
              </h2>
              <p className="text-muted-foreground mb-8">
                Our licensed customs brokers handle all aspects of customs clearance, 
                ensuring your cargo moves efficiently through borders while maintaining 
                full regulatory compliance.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {process.map((item) => (
                <Card key={item.step} className="bg-card border-border">
                  <CardContent className="p-6">
                    <span className="text-4xl font-bold text-primary/30">{item.step}</span>
                    <h3 className="font-semibold text-foreground mt-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Clear Your Cargo?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our customs brokerage team for fast, reliable clearance services.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="/#quote">Request Quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/#services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
