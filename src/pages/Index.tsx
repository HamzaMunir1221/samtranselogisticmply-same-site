import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";

import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <Hero />
        <QuoteForm />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
