import { Globe2, Clock, Shield, Headphones, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Network",
    description: "Extensive network spanning Europe, USA/Canada, and Far East Asia for seamless international operations."
  },
  {
    icon: Clock,
    title: "45+ Years Experience",
    description: "Decades of expertise in freight forwarding, customs clearance, and logistics solutions."
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Your cargo is protected with our comprehensive insurance and security protocols."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service to track and manage your shipments anytime."
  },
  {
    icon: TrendingUp,
    title: "Competitive Rates",
    description: "Best-in-class pricing without compromising on service quality or reliability."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals dedicated to handling your logistics needs efficiently."
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Why Choose Sam Transe
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Have <span className="text-gradient">45+ Years</span> Of<br />
            Business Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Sam Transe Logistics besides locally does frequent consolidation & deconsolidation 
            overseas, focusing & specializing in Europe, USA/Canada, and Far East Asia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
