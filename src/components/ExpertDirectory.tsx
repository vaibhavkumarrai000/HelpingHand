import { Star, BadgeCheck, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { INSTAGRAM_URL } from "@/lib/constants";

const experts = [
  { name: "Shiven Mishra", skill: "CV Maker", badge: "Resume Building", rating: 5.0, price: "Contact on Instagram", img: "https://i.pravatar.cc/150?img=11" },
  { name: "Aman Singh", skill: "Video Editor", badge: "Video Editing", rating: 5.0, price: "Contact on Instagram", img: "/images/aman.jpg" },
];

const ExpertDirectory = () => {
  return (
    <section id="experts" className="container py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Experts
        </p>
        <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Verified professionals, presented cleanly
        </h2>
        <p className="mt-4 text-muted-foreground">A more confident layout for browsing and booking.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((e) => (
          <Card key={e.name} className="overflow-hidden border-border/70 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 p-6">
                <img src={e.img} alt={e.name} className="h-16 w-16 rounded-full object-cover ring-4 ring-primary/10" />
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-foreground">{e.name}</h4>
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{e.skill}</p>
                  <Badge variant="secondary" className="mt-1 text-xs">{e.badge}</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border/70 px-6 py-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-semibold text-foreground">{e.rating}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{e.price}</span>
              </div>
              <div className="px-6 pb-6">
                <Button className="w-full gap-2" asChild>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    Book & Chat on Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExpertDirectory;
