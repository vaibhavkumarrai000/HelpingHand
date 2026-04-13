import { FormEvent, useEffect, useState } from "react";
import { FileText, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Review = {
  _id?: string;
  name: string;
  rating: number;
  message: string;
  avatar?: string;
  createdAt?: string;
};

const API_URL = "http://localhost:5000/api/reviews";

const getAvatarUrl = (name: string) =>
  `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(name)}`;

const getReviewAvatar = (review: Review) => review.avatar || getAvatarUrl(review.name);

const Testimonials = () => {
  // Test karne ke liye thoda dummy data
  const [reviews, setReviews] = useState<Review[]>([
    { _id: "1", name: "Rohan Sharma", rating: 5, message: "Bhai, video editing ekdum top notch thi! Maza aa gaya." },
    { _id: "2", name: "Sneha Patel", rating: 4, message: "Resume service is great. Helped me secure 2 interviews." },
    { _id: "3", name: "Aman Verma", rating: 5, message: "Very professional and fast delivery. Highly recommended!" },
    { _id: "4", name: "Priya Singh", rating: 5, message: "The Instagram handoff felt very natural. Good work!" }
  ]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", rating: 5, message: "", avatar: "" });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data: Review[] = await response.json();
        
        if (data.length > 0) {
          setReviews(data);
        }
      } catch (err) {
        console.error(err);
        setError("API disconnected (Showing local test reviews).");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const savedReview = await response.json();
      setReviews((prev) => [savedReview, ...prev]);
      setForm({ name: "", rating: 5, message: "", avatar: "" });
    } catch (err) {
      console.error(err);
      // Fallback agar backend off ho: Local state me add karo
      const newLocalReview = { ...form, _id: Date.now().toString() };
      setReviews((prev) => [newLocalReview, ...prev]);
      setForm({ name: "", rating: 5, message: "", avatar: "" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setForm((prev) => ({ ...prev, avatar: "" }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setForm((prev) => ({ ...prev, avatar: reader.result }));
      }
    };
    reader.readAsDataURL(file);
  };

  // Safe Fallback: Agar array chhota hai, toh usko bada kar lo taaki loop continuous lage
  const displayReviews = reviews.length < 6 ? [...reviews, ...reviews, ...reviews] : reviews;

  return (
    <section className="bg-secondary/40 py-20 overflow-hidden">
      {/* 🟢 CUSTOM CSS FOR BULLETPROOF MARQUEE 🟢 */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground sm:text-4xl">HAPPY CUSTOMERS</h2>
        <p className="mb-8 text-center text-muted-foreground">What our community says</p>

        {error && <p className="mb-6 text-center text-sm font-semibold text-destructive">{error}</p>}

        {/* 🟢 PREMIUM AUTO-SCROLLING MARQUEE 🟢 */}
        <div className="mb-16 relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-marquee gap-6 pr-6">
            {displayReviews.map((review, index) => (
              <Card key={`track1-${review._id || index}-${index}`} className="w-[300px] shrink-0 border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="flex h-full flex-col items-center gap-4 p-6 text-center">
                  <img src={getReviewAvatar(review)} alt="avatar" className="h-16 w-16 rounded-full border border-border bg-muted object-cover shadow-sm" />
                  <p className="font-semibold text-black text-lg">{review.name}</p>
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-sm italic text-black/80">"{review.message}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Duplicate track for seamless infinite loop */}
          <div className="flex w-max animate-marquee gap-6 pr-6" aria-hidden="true">
            {displayReviews.map((review, index) => (
              <Card key={`track2-${review._id || index}-${index}`} className="w-[300px] shrink-0 border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="flex h-full flex-col items-center gap-4 p-6 text-center">
                  <img src={getReviewAvatar(review)} alt="avatar" className="h-16 w-16 rounded-full border border-border bg-muted object-cover shadow-sm" />
                  <p className="font-semibold text-black text-lg">{review.name}</p>
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-sm italic text-black/80">"{review.message}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 🟢 PREMIUM FORM SECTION 🟢 */}
        <form onSubmit={handleSubmit} className="mx-auto grid max-w-3xl gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.12)] sm:grid-cols-2">
          <input
            type="text" required placeholder="Your name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="h-11 rounded-md border border-black/15 bg-white px-3 text-center text-sm text-black placeholder:text-black/45 focus:border-black/40 focus:outline-none"
          />
          <div className="flex h-11 flex-col items-center justify-center rounded-md border border-black/15 bg-white px-3">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-black/60">Rating</p>
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((val) => (
                <button key={val} type="button" onClick={() => setForm({ ...form, rating: val })} className="transition-transform hover:scale-125">
                  <Star className={`h-5 w-5 ${val <= form.rating ? "fill-black text-black" : "fill-transparent text-black/30"}`} />
                </button>
              ))}
            </div>
          </div>
          <textarea
            required placeholder="Share your experience..." value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="min-h-[120px] rounded-md border border-black/15 bg-white px-4 py-3 text-center text-sm text-black placeholder:text-black/45 focus:border-black/40 focus:outline-none sm:col-span-2 resize-none"
          />
          <div className="sm:col-span-2 rounded-md border border-black/15 bg-white p-3">
            <label className="mb-2 block text-center text-[11px] font-bold uppercase tracking-widest text-black/60">
              Profile Picture (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="block w-full text-sm text-black file:mr-3 file:rounded-md file:border file:border-black/20 file:bg-black file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:brightness-110"
            />
            {form.avatar && (
              <div className="mt-3 flex items-center justify-center gap-3">
                <img src={form.avatar} alt="Selected profile" className="h-12 w-12 rounded-full border border-black/20 object-cover" />
                <span className="text-xs font-medium text-black/65">Preview</span>
              </div>
            )}
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" disabled={submitting} className="w-full h-12 border border-black/20 bg-gradient-to-r from-zinc-800 to-black font-bold tracking-widest text-white shadow-xl hover:brightness-125 cursor-pointer">
              <span className="flex items-center justify-center gap-2">
                <FileText className="h-5 w-5" />
                {submitting ? "SUBMITTING..." : "SUBMIT REVIEW"}
              </span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;