import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Film, FileText, Mic, Gamepad2, Smartphone, Building2, GraduationCap, Briefcase, Search, Palette } from "lucide-react";

const videoServices = [
  { title: "Podcast Editing", icon: Mic, desc: "Professional audio & video podcast production" },
  { title: "Comedy/Gaming Edits", icon: Gamepad2, desc: "Dynamic jump-cuts, memes & effects" },
  { title: "Social Media Shorts", icon: Smartphone, desc: "Reels, TikToks & YouTube Shorts" },
  { title: "Corporate Branding", icon: Building2, desc: "Polished brand videos & ads" },
];

const resumeServices = [
  { title: "Entry-Level Resumes", icon: GraduationCap, desc: "Clean, concise one-page resumes" },
  { title: "Executive CVs", icon: Briefcase, desc: "Detailed C-suite & leadership CVs" },
  { title: "ATS-Optimized", icon: Search, desc: "Beat the bots, land interviews" },
  { title: "Creative Portfolios", icon: Palette, desc: "Visual portfolios for creatives" },
];

const ServiceRow = ({ title, icon: Icon, items }: { title: string; icon: React.ElementType; items: typeof videoServices }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (paused) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((s) => (
          <Card key={s.title} className="min-w-[250px] shrink-0 transition-transform hover:scale-105">
            <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
              <s.icon className="h-10 w-10 text-primary" />
              <h4 className="font-semibold text-foreground">{s.title}</h4>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ServicesCarousel = () => (
  <section id="services" className="container py-20">
    <h2 className="mb-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
      Launch Services
    </h2>
    <p className="mb-12 text-center text-muted-foreground">Our inaugural categories to get you started</p>
    <div className="grid gap-12">
      <ServiceRow title="Video Editing" icon={Film} items={videoServices} />
      <ServiceRow title="Resume Building" icon={FileText} items={resumeServices} />
    </div>
  </section>
);

export default ServicesCarousel;
