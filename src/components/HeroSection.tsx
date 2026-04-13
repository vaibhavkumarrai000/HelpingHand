import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const slides = [
  {
    src: "https://images.pexels.com/photos/8100060/pexels-photo-8100060.jpeg?cs=srgb&dl=pexels-ron-lach-8100060.jpg&fm=jpg",
    alt: "Video editor working on color grading",
  },
  {
    src: "https://images.pexels.com/photos/8102676/pexels-photo-8102676.jpeg?cs=srgb&dl=pexels-ron-lach-8102676.jpg&fm=jpg",
    alt: "Editor cutting footage on dual monitors",
  },
  {
    src: "https://images.pexels.com/photos/29505140/pexels-photo-29505140.jpeg?cs=srgb&dl=pexels-kadiremir-29505140.jpg&fm=jpg",
    alt: "Close-up of video editing timeline interface",
  },
  {
    src: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?cs=srgb&dl=pexels-cottonbro-5989925.jpg&fm=jpg",
    alt: "Recruiter reviewing a resume on a clipboard",
  },
  {
    src: "https://images.pexels.com/photos/4101343/pexels-photo-4101343.jpeg?cs=srgb&dl=pexels-markus-winkler-1430818-4101343.jpg&fm=jpg",
    alt: "Resume document beside laptop and pen",
  },
  {
    src: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?cs=srgb&dl=pexels-goumbik-590016.jpg&fm=jpg",
    alt: "Professional resume layout on a work desk",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.82))]" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[-10%] top-24 h-80 w-80 rounded-full bg-foreground/5 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-40 blur-2xl scale-110">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.src} className="relative min-w-full h-full">
              <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover opacity-50" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/88 via-background/72 to-background/88" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="mr-2 h-4 w-4" />
            Premium talent marketplace
          </Badge>
          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Find Your Helping Hand
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-foreground/75 sm:text-lg">
            Monetize your skills or find the perfect expert for high-impact digital services. Built to feel simple,
            trustworthy, and easy to book.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="gap-2 px-7 py-6 text-base font-semibold shadow-lg shadow-primary/15" asChild>
              <a href="/experts">
                Book an Expert Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-7 py-6 text-base font-semibold" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Verified experts
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Fast Instagram booking
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Resume and video editing
            </div>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              { value: "3", label: "Core services" },
              { value: "100%", label: "Direct contact" },
              { value: "24/7", label: "Accessible booking" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border/70 bg-background/75 p-4 text-left shadow-sm backdrop-blur">
                <div className="text-2xl font-black text-foreground sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-background/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.15)] backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-secondary/20">
              <div className="relative aspect-[4/5]">
                {slides.map((slide, index) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-sm">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Featured service
                  </div>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-foreground/80">
                    A cleaner, more premium booking experience designed to make your services feel established from the first visit.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-10 bg-primary" : "w-2.5 bg-foreground/20"}`}
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
