import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    subtitle: "International Freight Solutions",
    title: "Your Trusted Partner in",
    highlight: "Global Logistics",
    description: "Seamless end-to-end supply chain solutions with unmatched reliability and efficiency across 120+ countries.",
  },
  {
    image: heroSlide2,
    subtitle: "Road & Rail Transport",
    title: "Delivering Excellence",
    highlight: "Every Mile",
    description: "Comprehensive inland transportation services ensuring timely and secure delivery of your cargo.",
  },
  {
    image: heroSlide3,
    subtitle: "Warehousing & Distribution",
    title: "Strategic Storage",
    highlight: "Solutions",
    description: "Modern warehousing facilities with real-time inventory management and seamless distribution networks.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-40 md:pb-0">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
          {/* Professional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-20 md:pt-0">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
              }`}
            >
              {/* STL Brand Name */}
              <div className="mb-4">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight">
                  STL
                </span>
              </div>
              
              {/* Subtitle badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground tracking-wide">
                  {slide.subtitle}
                </span>
              </div>
              
              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                {slide.title}
                <span className="block text-primary mt-2">{slide.highlight}</span>
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-6 sm:mb-8 leading-relaxed">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 h-12 text-base font-semibold shadow-lg">
                    Request a Quote <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <a href="tel:+923184833990">
                  <Button size="lg" variant="outline" className="border-2 border-foreground/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 gap-2 px-8 h-12 text-base font-semibold">
                    <Phone className="h-5 w-5" /> Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Progress Indicators */}
      <div className="absolute bottom-44 sm:bottom-32 left-4 sm:left-6 lg:left-12 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-1 transition-all duration-500 rounded-full overflow-hidden ${
              index === currentSlide ? "w-12 bg-primary" : "w-6 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <span className="absolute inset-0 bg-accent animate-[slideProgress_5s_linear]" />
            )}
          </button>
        ))}
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/20">
            <div className="flex items-center gap-3 py-3 sm:py-5 px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-primary-foreground/70">Call Us 24/7</p>
                <p className="text-sm sm:text-base font-semibold">+92 318 483 3990</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3 sm:py-5 px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-primary-foreground/70">Head Office</p>
                <p className="text-sm sm:text-base font-semibold">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3 sm:py-5 px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-primary-foreground/70">Working Hours</p>
                <p className="text-sm sm:text-base font-semibold">Mon - Sat: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
