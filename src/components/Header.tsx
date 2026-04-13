import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Why Us", href: "/#why-us" },
    { label: "Hire Expert", href: "/experts" },
    { label: "Explore Services", href: "/#services" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/45">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-r from-cyan-200/20 via-transparent to-amber-100/20" />
      <div className="container relative z-10 flex h-20 items-center justify-between gap-4">
        <a href="/" className="group relative flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-2 py-1.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <div className="absolute -left-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary/70 blur-sm transition-opacity duration-300 group-hover:opacity-90" />
          <img src="/images/hhlogo.jpeg" alt="Helping Hand logo" className="h-11 w-11 rounded-full object-cover ring-1 ring-border shadow-sm" />
          <span className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-foreground sm:text-base">
            Helping Hand
          </span>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-border/60 bg-background/70 p-1.5 shadow-sm md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/70 hover:text-foreground"
            >
              {l.label}
              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-foreground transition-all duration-300 group-hover:w-6" />
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="shrink-0 rounded-full border border-border/60 bg-background/70 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/70 hover:shadow md:ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="transition-transform duration-300" /> : <Menu className="transition-transform duration-300" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/70 bg-background/90 p-4 backdrop-blur-xl">
          <nav className="container flex flex-col gap-2 md:flex-row md:items-center md:justify-end md:gap-3">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-border/70 hover:bg-secondary/60 hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
