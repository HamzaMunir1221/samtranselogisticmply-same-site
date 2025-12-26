import { useEffect, useState, useRef } from "react";
import { ParallaxSection } from "./ParallaxSection";
import globalNetwork from "@/assets/global-network.jpg";

const stats = [
  { label: "Business Years", value: 45, suffix: "+" },
  { label: "Years of Professionalism", value: 45, suffix: "+" },
  { label: "Overseas Routes", value: 120, suffix: "+" },
  { label: "Happy Clients", value: 5000, suffix: "+" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <ParallaxSection
      backgroundImage={globalNetwork}
      speed={0.2}
      overlay={true}
      overlayOpacity={0.85}
      className="py-20"
    >
      <section id="about">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">
              Since 1976
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pakistan's Leading<br />
              <span className="text-gradient">Forwarding & Clearing Agents</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Sam Transe Logistics has been committed to providing exceptional, reliable & innovative 
              solutions in moving by Land, by Air, and by Ship.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
}
