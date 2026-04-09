import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, HandHeart } from "lucide-react";
import { AuthModal } from "./AuthModal";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  const navLinks = [
    { label: "Why Us", href: "#why-us" },
    { label: "Hire Expert", href: "#experts" },
    { label: "Explore Services", href: "#services" },
  ];

  const openAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <HandHeart className="h-8 w-8 text-primary" />
            <span className="text-lg font-bold tracking-wider text-foreground">
              HELPING HAND
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" onClick={() => openAuth("login")}>
              Login
            </Button>
            <Button onClick={() => openAuth("signup")}>Join Now</Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <Button variant="ghost" className="flex-1" onClick={() => openAuth("login")}>
                  Login
                </Button>
                <Button className="flex-1" onClick={() => openAuth("signup")}>
                  Join Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} mode={authMode} onModeChange={setAuthMode} />
    </>
  );
};

export default Header;
