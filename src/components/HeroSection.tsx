import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
    <div className="relative z-10 mx-auto max-w-4xl text-center">
      <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-6xl lg:text-7xl">
        Find Your Helping Hand
      </h1>
      <p className="mx-auto mb-4 max-w-2xl text-lg text-foreground/80 sm:text-xl">
        Monetize your skills or find the perfect expert for any task — from high-end video editing to local home services.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Launching with professional <span className="font-semibold text-primary">Resume Building</span> and advanced{" "}
        <span className="font-semibold text-primary">Video Editing</span> services.
      </p>
      <Button size="lg" className="text-base font-bold px-8 py-6" asChild>
        <a href="#experts">Book an Expert Now</a>
      </Button>
    </div>
  </section>
);

export default HeroSection;
