import { 
  FileCheck, Package, PackageOpen, Truck, 
  Warehouse, BarChart3, Globe, Search,
  Boxes, Car, Anchor, Ship
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ParallaxSection } from "./ParallaxSection";
import { ScrollAnimate } from "@/hooks/use-scroll-animation";
import warehouseImage from "@/assets/warehouse.jpg";

const services = [
  { icon: FileCheck, name: "Custom Brokerage", description: "Expert customs clearance services", path: "/services/custom-brokerage" },
  { icon: Package, name: "Consolidation", description: "Efficient cargo consolidation", path: "/services/consolidation" },
  { icon: PackageOpen, name: "Deconsolidation", description: "Careful cargo breakdown", path: "/services/deconsolidation" },
  { icon: Truck, name: "Inland Transport", description: "Nationwide ground shipping", path: "/services/inland-transport" },
  { icon: Warehouse, name: "Warehousing", description: "Secure storage solutions", path: "/services/warehousing" },
  { icon: BarChart3, name: "Supply Chain", description: "End-to-end management", path: "/services/supply-chain" },
  { icon: Globe, name: "Afghan Transit", description: "Cross-border trade services", path: "/services/afghan-transit" },
  { icon: Search, name: "Inspection", description: "Quality verification", path: "/services/inspection" },
  { icon: Boxes, name: "Project Handling", description: "Large-scale logistics", path: "/services/project-handling" },
  { icon: Car, name: "Car Import", description: "Japan/UK vehicle imports", path: "/services/car-import" },
  { icon: Anchor, name: "Vessel Chartering", description: "Ship rental services", path: "/services/vessel-chartering" },
  { icon: Ship, name: "Freight Forwarding", description: "Global cargo movement", path: "/services/freight-forwarding" },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image with Parallax */}
          <ScrollAnimate animation="fade-right">
            <ParallaxSection
              backgroundImage={warehouseImage}
              speed={0.15}
              overlay={true}
              overlayOpacity={0.4}
              className="rounded-2xl h-[500px]"
            >
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Full-Service Logistics
                </h3>
                <p className="text-muted-foreground">
                  Sam Transe Logistics is a Full-Service Logistics Company 
                  providing a vast range of freight and transit services.
                </p>
              </div>
            </ParallaxSection>
          </ScrollAnimate>

          {/* Right Services Grid */}
          <div>
            <ScrollAnimate animation="fade-up">
              <p className="text-primary font-medium tracking-wider uppercase mb-4">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our <span className="text-gradient">Services</span>
              </h2>
            </ScrollAnimate>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <ScrollAnimate 
                  key={service.name}
                  animation="fade-up"
                  delay={index * 50}
                >
                  <Link to={service.path}>
                    <Card 
                      className="group cursor-pointer hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-lg h-full hover:-translate-y-1"
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
