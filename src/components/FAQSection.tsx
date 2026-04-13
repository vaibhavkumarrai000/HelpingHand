import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Helping Hand?",
    answer:
      "Helping Hand is a service marketplace where customers can find verified experts for launch services like resume building and video editing, then connect directly through Instagram for booking and support.",
  },
  {
    question: "How do I book an expert?",
    answer:
      "Go to the Expert Directory, choose the service you need, and click Book & Chat on Instagram. From there, you can message us directly and we’ll guide you to the right expert.",
  },
  {
    question: "What services are available right now?",
    answer:
      "We currently focus on Resume Building and Video Editing. That includes CVs, ATS-friendly resumes, executive profiles, podcasts, reels, shorts, and other professional editing work.",
  },
  {
    question: "Are the experts verified?",
    answer:
      "Yes. We only list experts who are matched to the service they offer so customers can book with more confidence and less guesswork.",
  },
  {
    question: "Do I need to pay on the website?",
    answer:
      "The website is used mainly for discovery and booking. Final communication and service coordination happen on Instagram, where you can get the next steps from the expert.",
  },
  {
    question: "Can I request changes after delivery?",
    answer:
      "Yes, in most cases you can request revisions depending on the service and the agreement made with the expert. Please confirm revision details while chatting on Instagram before the work starts.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on the service and the complexity of the request. Simple resume updates or short edits may be faster, while detailed work can take longer. Your expert will confirm the timeline in chat.",
  },
  {
    question: "Can I contact you for something other than resumes or video editing?",
    answer:
      "Yes. We are expanding our platform. If you need another type of service, send us a message on Instagram and we’ll let you know whether we can help or point you in the right direction.",
  },
];

const FAQSection = () => (
  <section id="faq" className="container py-20">
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        FAQ
      </p>
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        Frequently asked questions
      </h2>
      <p className="mt-4 text-muted-foreground">
        Quick answers to the most common customer doubts about Helping Hand.
      </p>
    </div>

    <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm sm:p-8">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-7 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;