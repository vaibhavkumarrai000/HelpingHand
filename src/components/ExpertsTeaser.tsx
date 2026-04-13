import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExpertsTeaser = () => (
  <section className="container py-20">
    <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-8 shadow-sm sm:p-12">
      <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-accent/45 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          Expert directory moved
        </p>
        <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Visit the experts, they are waiting for you
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We moved the full expert profiles to a dedicated page so customers can explore work proofs, pricing, and details without distraction.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Button size="lg" className="group gap-2 px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 animate-pulse" asChild>
            <a href={`${import.meta.env.BASE_URL}experts`}>
              Visit Experts Page
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ExpertsTeaser;