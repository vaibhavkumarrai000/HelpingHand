import { HandHeart, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container flex flex-col items-center gap-6 text-center">
      <div className="flex items-center gap-2">
        <HandHeart className="h-6 w-6 text-primary" />
        <span className="font-bold tracking-wider text-foreground">HELPING HAND</span>
      </div>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#why-us" className="hover:text-primary">Why Us</a>
        <a href="#services" className="hover:text-primary">Services</a>
        <a href="#experts" className="hover:text-primary">Experts</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
          <Instagram className="h-4 w-4" /> Instagram
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Helping Hand. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
