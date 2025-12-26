import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ahmed Hassan",
    company: "Global Traders Ltd.",
    rating: 5,
    review: "Sam Transe has been our logistics partner for over 10 years. Their reliability and professionalism in handling our cargo shipments from Europe is unmatched. Highly recommended!",
    initials: "AH",
  },
  {
    name: "Sarah Mitchell",
    company: "Pacific Imports Inc.",
    rating: 5,
    review: "Outstanding service! The team handled our complex project cargo with expertise. Their customs clearance process is seamless and their tracking system keeps us informed every step.",
    initials: "SM",
  },
  {
    name: "Muhammad Khan",
    company: "Khan Enterprises",
    rating: 5,
    review: "We've been working with Sam Transe for our Afghan transit shipments. Their knowledge of cross-border regulations and efficient handling has made our operations much smoother.",
    initials: "MK",
  },
  {
    name: "Jennifer Lee",
    company: "AutoWorld Japan",
    rating: 4,
    review: "Excellent car import service from Japan. The documentation was handled professionally, and the vehicle arrived in perfect condition. Will definitely use again for future imports.",
    initials: "JL",
  },
  {
    name: "Rashid Ali",
    company: "Textile Masters",
    rating: 5,
    review: "The consolidation services provided by Sam Transe have significantly reduced our shipping costs. Their warehousing facilities are top-notch and the team is always responsive.",
    initials: "RA",
  },
  {
    name: "David Thompson",
    company: "UK Exports Co.",
    rating: 5,
    review: "Professional, efficient, and reliable. Sam Transe made our first export to Pakistan incredibly smooth. Their 45+ years of experience really shows in their service quality.",
    initials: "DT",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-primary text-primary" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with Sam Transe Logistics.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                      "{testimonial.review}"
                    </p>
                    <div className="mt-auto">
                      <StarRating rating={testimonial.rating} />
                      <div className="flex items-center gap-3 mt-4">
                        <Avatar className="h-12 w-12 bg-primary/10 border border-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Mobile indicator dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {[...Array(Math.ceil(testimonials.length / 1))].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
