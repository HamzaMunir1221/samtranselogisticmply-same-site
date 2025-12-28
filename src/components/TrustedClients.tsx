import { Building2 } from "lucide-react";

const clients = [
  { name: "Global Traders Ltd.", industry: "Import/Export" },
  { name: "Pacific Imports", industry: "Shipping" },
  { name: "Khan Enterprises", industry: "Textile" },
  { name: "AutoWorld Japan", industry: "Automotive" },
  { name: "UK Exports Co.", industry: "Manufacturing" },
  { name: "Textile Masters", industry: "Apparel" },
];

export function TrustedClients() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wider uppercase mb-2">
            Trusted By Industry Leaders
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Companies That Rely On Us
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-center text-sm leading-tight">
                {client.name}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                {client.industry}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-2xl font-bold text-primary">500+</span>{" "}
            satisfied clients worldwide trust Sam Transe Logistics
          </p>
        </div>
      </div>
    </section>
  );
}
