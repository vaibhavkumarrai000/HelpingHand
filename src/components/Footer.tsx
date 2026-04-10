import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/constants";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container flex flex-col items-center gap-6 text-center">
      <div className="flex items-center gap-2">
        <img src="/images/hhlogo.jpeg" alt="Helping Hand logo" className="h-6 w-6 rounded-full object-cover" />
        <span className="font-bold tracking-wider text-foreground">HELPING HAND</span>
      </div>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#why-us" className="hover:text-foreground">Why Us</a>
        <a href="#services" className="hover:text-foreground">Services</a>
        <a href="#experts" className="hover:text-foreground">Experts</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground">
          <Instagram className="h-4 w-4" /> Instagram
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Helping Hand. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
