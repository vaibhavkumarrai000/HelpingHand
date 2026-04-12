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
  <section id="why-us" className="py-20">
    <div className="container">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Why Helping Hand
        </p>
        <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Built for trust, clarity, and direct results
        </h2>
        <p className="mt-4 text-muted-foreground">
          A cleaner experience for users who want quality work without friction.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {reasons.map((r) => (
          <div key={r.title} className="flex flex-col items-center rounded-3xl border border-border/70 bg-card p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <r.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
