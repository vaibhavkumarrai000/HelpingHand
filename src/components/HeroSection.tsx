import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0">
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
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background/75" /> */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_55%)]" /> */}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-6xl lg:text-7xl">
          Find Your Helping Hand
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-lg text-foreground/80 sm:text-xl">
          Monetize your skills or find the perfect expert for high-impact digital services.
        </p>
        <p className="mb-8 text-sm text-muted-foreground">
          Launching with professional <span className="font-semibold text-foreground">Resume Building</span> and advanced{" "}
          <span className="font-semibold text-foreground">Video Editing</span> services.
        </p>
        <Button size="lg" className="text-base font-bold px-8 py-6" asChild>
          <a href="#experts">Book an Expert Now</a>
        </Button>
        <div className="mt-8 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-primary" : "w-2.5 bg-foreground/25"}`}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
