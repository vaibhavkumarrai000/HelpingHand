import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const showcaseItems = [
  {
    title: "Video Editing Services",
    subtitle: "Reels, podcasts, social clips, and brand edits",
    src: "https://images.pexels.com/photos/8102676/pexels-photo-8102676.jpeg?cs=srgb&dl=pexels-ron-lach-8102676.jpg&fm=jpg",
    alt: "Editor working on dual monitor timeline",
  },
  {
    title: "CV and Resume Making",
    subtitle: "General and specialized CVs with ATS-friendly structure",
    src: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?cs=srgb&dl=pexels-cottonbro-5989925.jpg&fm=jpg",
    alt: "Resume on desk for professional review",
  },
  {
    title: "Animated Portfolio Setup",
    subtitle: "Portfolio pages with strong visuals and modern interactions",
    src: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?cs=srgb&dl=pexels-pixabay-270404.jpg&fm=jpg",
    alt: "Web portfolio interface on laptop",
  },
];

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
    <div className="mx-auto mb-12 max-w-6xl">
      <div className="mb-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Marketplace Style Showcase
        </p>
        <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Explore what customers can book instantly
        </h2>
        <p className="mt-4 text-muted-foreground">
          A visual preview inspired by modern service marketplaces, tailored for Helping Hand.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {showcaseItems.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-3xl border border-border/70 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">Helping Hand</p>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

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

    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-5 shadow-sm sm:p-6">
        <div
          className="relative h-64 overflow-hidden rounded-2xl border border-border/70 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7648040/pexels-photo-7648040.jpeg?cs=srgb&dl=pexels-ivan-samkov-7648040.jpg&fm=jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Live Q&A Support
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="max-w-[85%] rounded-2xl bg-secondary/70 px-4 py-3 text-sm text-foreground shadow-sm animate-pulse">
            I need video editing for my brand page. How can I start quickly?
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl bg-primary px-4 py-3 text-sm text-primary-foreground shadow-sm">
            Choose your service, check pricing, and book directly through Instagram in minutes.
          </div>
          <div className="max-w-[85%] rounded-2xl bg-secondary/70 px-4 py-3 text-sm text-foreground shadow-sm animate-pulse">
            Can I also get CV and portfolio help in one place?
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl bg-primary px-4 py-3 text-sm text-primary-foreground shadow-sm">
            Yes, Helping Hand supports CV making, video editing, and portfolio services.
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm sm:p-8">
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
    </div>
  </section>
);

export default FAQSection;