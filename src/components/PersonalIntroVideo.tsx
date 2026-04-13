import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const REEL_URL = "https://www.instagram.com/reel/DXAvlNEkz4n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
const REEL_EMBED_URL = "https://www.instagram.com/reel/DXAvlNEkz4n/embed";

const PersonalIntroVideo = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [loadEmbed, setLoadEmbed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoadEmbed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="container py-20" ref={sectionRef}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Founder Intro</p>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Hear directly from me about Helping Hand
            </h2>
            <p className="mt-4 text-muted-foreground">
              This short reel explains the purpose of Helping Hand, the services we launch with, and how customers can
              book experts quickly.
            </p>
            <div className="mt-6">
              <Button asChild className="px-6">
                <a href={REEL_URL} target="_blank" rel="noopener noreferrer">
                  Open Reel on Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[420px] rounded-2xl border border-border/70 bg-background/70 p-3">
            {loadEmbed ? (
              <iframe
                title="Helping Hand founder introduction reel"
                src={REEL_EMBED_URL}
                className="h-[420px] w-full rounded-xl"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center rounded-xl bg-secondary/40 text-sm text-muted-foreground">
                Loading reel as you scroll into view...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntroVideo;