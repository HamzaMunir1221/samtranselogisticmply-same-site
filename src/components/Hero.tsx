import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Briefcase, Ship, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "./FloatingShapes";
import heroSlide1 from "@/assets/hero-slide-1.webp";
import heroSlide2 from "@/assets/hero-slide-2.webp";
import heroSlide3 from "@/assets/hero-slide-3.webp";

const slides = [
  {
    image: heroSlide1,
    subtitle: "Global Shipping Solutions",
    title: "Delivering Excellence",
    highlight: "Worldwide",
    description: "Sam Transe Logistics provides comprehensive freight forwarding and logistics services across the globe with reliability and efficiency.",
  },
  {
    image: heroSlide2,
    subtitle: "Land Transportation",
    title: "Fast & Reliable",
    highlight: "Road Freight",
    description: "Our extensive fleet ensures your cargo reaches its destination safely and on time, no matter the distance.",
  },
  {
    image: heroSlide3,
    subtitle: "Storage Solutions",
    title: "Secure Modern",
    highlight: "Warehousing",
    description: "State-of-the-art warehousing facilities with advanced inventory management systems for your business needs.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      ))}

      {/* 3D Floating Shapes */}
      <FloatingShapes />

      {/* Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <p className="text-primary font-medium tracking-wider uppercase mb-4">
                {slide.subtitle}
              </p>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                {slide.title}<br />
                <span className="text-gradient">{slide.highlight}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#quote">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#services">
                  <Button size="lg" variant="outline" className="border-border bg-background/10 backdrop-blur-sm text-foreground hover:bg-background/20">
                    Our Services
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <a href="#quote" className="flex items-center gap-4 py-6 px-4 hover:bg-muted/50 transition-colors group">
              <Briefcase className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-foreground">Let's Do Business</h3>
                <p className="text-sm text-muted-foreground">Get a quotation today</p>
              </div>
            </a>
            <a href="#services" className="flex items-center gap-4 py-6 px-4 hover:bg-muted/50 transition-colors group">
              <Ship className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-foreground">Our Services</h3>
                <p className="text-sm text-muted-foreground">Explore what we offer</p>
              </div>
            </a>
            <a href="#why-us" className="flex items-center gap-4 py-6 px-4 hover:bg-muted/50 transition-colors group">
              <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-foreground">Why Choose Us</h3>
                <p className="text-sm text-muted-foreground">Trusted logistics partner</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
