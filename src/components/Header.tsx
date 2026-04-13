import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Why Us", href: "#why-us" },
    { label: "Hire Expert", href: "#experts" },
    { label: "Explore Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-20 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 rounded-full px-2 py-1 transition-colors hover:bg-secondary/60">
          <img src="/images/hhlogo.jpeg" alt="Helping Hand logo" className="h-12 w-12 rounded-full object-cover ring-1 ring-border shadow-sm" />
          <span className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-foreground sm:text-base">
            Helping Hand
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="shrink-0 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 p-4 backdrop-blur">
          <nav className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-end md:gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
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
