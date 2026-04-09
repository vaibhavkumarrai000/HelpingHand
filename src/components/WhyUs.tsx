import { ShieldCheck, Globe, Instagram } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Authenticity First",
    desc: "Every expert is vetted and verified for their specified skill — so you always get genuine quality.",
  },
  {
    icon: Globe,
    title: "One Platform, Unlimited Skills",
    desc: "From high-tech coding to local home services — find experts for everything in one place.",
  },
  {
    icon: Instagram,
    title: "Direct Instagram Engagement",
    desc: "We handle booking & payments, then connect you directly on Instagram for personal, authentic service delivery.",
  },
];

const WhyUs = () => (
  <section id="why-us" className="bg-secondary/40 py-20">
    <div className="container">
      <h2 className="mb-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
        WHY HELPING HAND?
      </h2>
      <p className="mb-12 text-center text-muted-foreground">
        Built for authenticity, powered by real skills
      </p>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {reasons.map((r) => (
          <div key={r.title} className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center">
            <r.icon className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-lg font-bold text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
