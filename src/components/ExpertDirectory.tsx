import { Star, BadgeCheck, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const experts = [
  { name: "Arjun Mehta", skill: "Video Editor", badge: "Podcast Editing", rating: 4.9, price: "₹800/hr", img: "https://i.pravatar.cc/150?img=11" },
  { name: "Priya Sharma", skill: "Resume Writer", badge: "Executive CVs", rating: 4.8, price: "₹1,500/project", img: "https://i.pravatar.cc/150?img=5" },
  { name: "Rohan Das", skill: "Video Editor", badge: "Social Media", rating: 4.7, price: "₹600/hr", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Sneha Iyer", skill: "Resume Writer", badge: "ATS-Optimized", rating: 4.9, price: "₹1,200/project", img: "https://i.pravatar.cc/150?img=9" },
  { name: "Karan Singh", skill: "Video Editor", badge: "Corporate Branding", rating: 4.6, price: "₹1,000/hr", img: "https://i.pravatar.cc/150?img=53" },
  { name: "Ananya Rao", skill: "Resume Writer", badge: "Creative Portfolios", rating: 4.8, price: "₹2,000/project", img: "https://i.pravatar.cc/150?img=26" },
];

const ExpertDirectory = () => {
  const handleBook = () => {
    toast.info("Please sign up or log in to book an expert!", { description: "After booking & payment, you'll be connected on Instagram." });
  };

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
                <Button className="w-full gap-2" onClick={handleBook}>
                  <Instagram className="h-4 w-4" />
                  Book & Chat on Instagram
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
