import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL } from "@/lib/constants";

const FloatingInstagramButton = () => (
  <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
    <Button
      asChild
      className="group h-12 w-12 rounded-full p-0 shadow-lg transition-transform duration-200 hover:scale-[1.03] sm:h-14 sm:w-auto sm:px-5"
    >
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact Helping Hand on Instagram">
        <Instagram className="h-5 w-5 sm:mr-2" />
        <span className="hidden text-sm font-semibold sm:inline sm:text-base">Contact on Instagram</span>
      </a>
    </Button>
  </div>
);

export default FloatingInstagramButton;
