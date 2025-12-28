import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does shipping from Pakistan to other countries take?",
    answer: "Shipping times vary based on destination and shipping method. Air freight typically takes 3-7 days, while sea freight can take 15-45 days depending on the destination port. We provide accurate transit time estimates for each shipment.",
  },
  {
    question: "What documents are required for customs clearance?",
    answer: "Required documents typically include Commercial Invoice, Packing List, Bill of Lading/Airway Bill, Certificate of Origin, and any specific permits for regulated goods. Our customs brokerage team handles all documentation to ensure smooth clearance.",
  },
  {
    question: "Do you offer door-to-door delivery services?",
    answer: "Yes, we provide complete door-to-door logistics solutions. This includes pickup from the origin, all transportation, customs clearance, and final delivery to the destination address anywhere in the world.",
  },
  {
    question: "How can I track my shipment?",
    answer: "You can track your shipment using our online tracking system on this website. Simply enter your tracking number or Bill of Lading number in the tracking section, and you will get real-time updates on your cargo status.",
  },
  {
    question: "What types of cargo do you handle?",
    answer: "We handle all types of cargo including general goods, oversized/project cargo, hazardous materials (with proper documentation), refrigerated goods, vehicles, and bulk commodities. Our team has expertise in specialized handling requirements.",
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment terms including advance payment, letter of credit (LC), and credit terms for established clients. Payment methods include bank transfer, online payment, and other arrangements based on the service agreement.",
  },
  {
    question: "Do you provide insurance for shipments?",
    answer: "Yes, we offer comprehensive cargo insurance options to protect your goods during transit. We can arrange marine cargo insurance, air cargo insurance, and inland transit coverage based on the value and nature of your shipment.",
  },
  {
    question: "What is the process for importing a car from Japan or UK?",
    answer: "Our car import service includes sourcing assistance, auction bidding, inspection, shipping, customs clearance, and delivery. We handle all paperwork including import permits, duties calculation, and registration documentation.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Find answers to common questions about our shipping and logistics services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Contact our team
            </a>{" "}
            or chat with us on{" "}
            <a
              href="https://wa.me/923184833990"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
