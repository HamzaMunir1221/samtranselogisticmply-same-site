import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { TrustedClients } from "@/components/TrustedClients";
import { FAQ } from "@/components/FAQ";
import { Tracking } from "@/components/Tracking";
import { Footer } from "@/components/Footer";

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
        <TrustedClients />
        <FAQ />
        <Tracking />
        <Tracking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
