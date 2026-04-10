import { Star, BadgeCheck, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { INSTAGRAM_URL } from "@/lib/constants";

const experts = [
  { name: "Shiven Mishra", skill: "CV Maker", badge: "Resume Building", rating: 5.0, price: "Contact on Instagram", img: "https://i.pravatar.cc/150?img=11" },
  { name: "Aman Singh", skill: "Video Editor", badge: "Video Editing", rating: 5.0, price: "Contact on Instagram", img: "https://i.pravatar.cc/150?img=12" },
];

const ExpertDirectory = () => {
  return (
    <section id="experts" className="container py-20">
      <h2 className="mb-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
        Expert Directory
      </h2>
      <p className="mb-12 text-center text-muted-foreground">Vetted professionals ready to help</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((e) => (
          <Card key={e.name} className="overflow-hidden transition-transform hover:scale-[1.02]">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 p-6">
                <img src={e.img} alt={e.name} className="h-16 w-16 rounded-full object-cover ring-2 ring-primary" />
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-foreground">{e.name}</h4>
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{e.skill}</p>
                  <Badge variant="secondary" className="mt-1 text-xs">{e.badge}</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border px-6 py-4">
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
