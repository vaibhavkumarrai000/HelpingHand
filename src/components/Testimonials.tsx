import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { name: "Vikram P.", review: "The resume I got through Helping Hand was exactly what I needed. Landed 3 interviews in a week!", rating: 5, img: "https://i.pravatar.cc/150?img=33" },
  { name: "Meera K.", review: "The podcast editing expert saved me hours of work every week. Incredible quality!", rating: 5, img: "https://i.pravatar.cc/150?img=44" },
  { name: "Rahul S.", review: "Seamless booking, amazing expert. The Instagram handoff felt natural and personal.", rating: 4, img: "https://i.pravatar.cc/150?img=60" },
];

const Testimonials = () => (
  <section className="bg-secondary/30 py-20">
    <div className="container">
      <h2 className="mb-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
        HAPPY CUSTOMERS
      </h2>
      <p className="mb-12 text-center text-muted-foreground">What our community says</p>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {reviews.map((r) => (
          <Card key={r.name}>
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
              <img src={r.img} alt={r.name} className="h-16 w-16 rounded-full object-cover" />
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm italic text-muted-foreground">"{r.review}"</p>
              <p className="font-semibold text-foreground">{r.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
