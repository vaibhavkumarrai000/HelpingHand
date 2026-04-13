import { Star, BadgeCheck, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { INSTAGRAM_URL } from "@/lib/constants";

type Expert = {
  name: string;
  skill: string;
  badge: string;
  rating: number;
  price: string;
  img: string;
  experience: string;
  specialty: string;
  summary: string;
  highlights: string[];
  proofTitle: string;
  proofDescription: string;
  proofLabel?: string;
  workDetails?: string[];
  clientTypes?: string[];
  directLinks?: { label: string; href: string }[];
};

const experts: Expert[] = [
  {
  name: "Shiven Mishra",
  skill: "Tech Resume & ATS Specialist",
  badge: "Resume Building",
  rating: 5.0,
  price: "Contact on Instagram",
  img: "/images/shiven.jpeg",
  experience: "4+ years",
  specialty: "ATS-friendly formatting, tech industry resumes, and LinkedIn profile optimization",
  summary: "I specialize in transforming average resumes into high-converting, recruiter-ready profiles. With a strong background in software development and hiring algorithms, I know exactly how to structure your skills and projects so they easily pass ATS screening and land you interviews.",
  highlights: [
    "ATS & Keyword Optimization",
    "Action-driven bullet points",
    "LinkedIn & GitHub Polishing"
  ],
  proofTitle: "CV Success Stories",
  proofDescription: "Check out the professional resume formats and transformations I've delivered.",
  workDetails: [
    "CTO At Codetexa, a startup focused on AI-powered resume optimization",
    "Redesigned and optimized resumes for B.Tech/CSE students and freshers",
    "Structured technical projects and internships to highlight real-world impact",
    "Provided 1-on-1 resume reviews and career positioning for tech roles",
    "Crafted tailored CVs for career switches and premium internships"
  ],
  clientTypes: ["Engineering Students", "Tech Freshers", "Job Seekers"],
  directLinks: [
    { label: "View General CV Sample", href: "https://drive.google.com/file/d/1A1gK8MA1vsq7BVzzV6xHYPLWAbpeUidh/view?usp=sharing" },
    { label: "View Specialized CV Sample", href: "https://drive.google.com/file/d/1tRrwLLDfSXOIVFpyhGjr_dvCvyYnROK5/view?usp=drive_link" },
    ,
  ],
},
  {
    name: "Aman Singh",
    skill: "Video Editor",
    badge: "Video Editing",
    rating: 5.0,
    price: "Contact on Instagram",
    img: "/images/aman.jpg",
    experience: "4+ years",
    specialty: "Short-form edits, podcast cuts, and polished social media videos",
    summary: "Handles LPU campus-related pages, shared college video content, and branded editing work with a strong professional finish.",
    highlights: ["Reels and shorts", "Podcast editing", "Brand promo edits"],
    proofTitle: "Video Proof",
    proofDescription: "Visit the Instagram pages below to view work and connect directly.",
    workDetails: [
      "LPU campus-related pages and shared college videos",
      "CMO at startup company Codetexa",
      "Led social media team for Technocrats Innovation Challenge hackathon in Bhopal at TIT University",
      "Make and edit videos for college promotion and event coverage",
      "Worked with business clients, real estate clients, and event management clients",
    ],
    clientTypes: ["Business clients", "Real estate clients", "Event management clients"],
    directLinks: [
      { label: "Visit Codetexa website", href: "https://codetexa.com" },
      { label: "Visit Codetexa Instagram", href: "https://www.instagram.com/codetexaofficial/" },
      { label: "Visit TIC Hackathon Instagram", href: "https://www.instagram.com/tic.hackathon/" },
      { label: "Visit campus-related page", href: "https://www.instagram.com/Eg_aman02/" },
    ],
  },
  {
    name: "Shubham Kumar",
    skill: "Portfolio Maker",
    badge: "Portfolio Design",
    rating: 5.0,
    price: "Contact on Instagram",
    img: "https://i.pravatar.cc/150?img=32",
    experience: "2+ years",
    specialty: "Student portfolios, personal websites, and clean project showcases",
    summary: "Builds polished portfolio layouts that help creators present their work with confidence.",
    highlights: ["Personal branding", "Project showcases", "Clean modern layouts"],
    proofTitle: "Portfolio Link",
    proofDescription: "Check a live portfolio sample to review layout and presentation.",
    proofLabel: "Open portfolio proof",
    workDetails: ["Personal websites", "Portfolio design", "Project case studies"],
    clientTypes: ["Students", "Creators", "Professionals"],
    directLinks: [{ label: "Visit portfolio proof", href: "#" }],
  },
];

const pricingPlans = [
  {
    name: "CV Making",
    description: "Choose between General CV and Specialized CV based on your career needs.",
    tiers: [
      { label: "General CV", price: "99" },
      { label: "Specialized CV", price: "149" },
    ],
    points: ["ATS-friendly formatting", "Cleaner career presentation", "Better recruiter visibility"],
  },
  {
    name: "Video Editing",
    description: "Best for videos up to 3 minutes with flexible editing levels for different needs.",
    tiers: [
      { label: "Basic", price: "249" },
      { label: "Higher", price: "399" },
      { label: "Pro", price: "799" },
    ],
    points: ["Max 3 minute video", "Reels and shorts", "Brand promo edits"],
  },
  {
    name: "Portfolio Making",
    description: "Simple portfolio or a more polished version with animation and design.",
    tiers: [
      { label: "Simple without animation", price: "249" },
      { label: "With animation and design", price: "449" },
    ],
    points: ["Personal branding", "Project showcases", "Clean modern layouts"],
  },
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
              <div className="p-6">
                <div className="flex items-start gap-5">
                  <img src={e.img} alt={e.name} className="h-20 w-20 rounded-2xl object-cover ring-4 ring-primary/10" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-lg font-bold text-foreground">{e.name}</h4>
                      <BadgeCheck className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{e.skill}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">{e.badge}</Badge>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-border/70 bg-secondary/30 p-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
                    <p className="mt-1 font-semibold text-foreground">{e.experience}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Rating</p>
                    <div className="mt-1 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold text-foreground">{e.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Why this expert</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/75">{e.summary}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Specialty</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/75">{e.specialty}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {e.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-foreground">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {(e.workDetails || e.clientTypes) && (
                  <div className="mt-5 rounded-2xl border border-border/70 bg-secondary/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Work profile</p>
                    {e.workDetails && (
                      <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                        {e.workDetails.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {e.clientTypes && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.clientTypes.map((client) => (
                          <span key={client} className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-foreground">
                            {client}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-5 rounded-2xl border border-dashed border-border/80 bg-secondary/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Proof of work</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{e.proofTitle}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{e.proofDescription}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0 text-xs uppercase tracking-[0.15em]">
                      Sample
                    </Badge>
                  </div>
                  {e.proofLabel && (
                    <a
                      href="#"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-border/70 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {e.proofLabel}
                    </a>
                  )}
                  {e.directLinks && e.directLinks.length > 0 && (
                    <div className="mt-4 grid gap-2">
                      {e.directLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-xl border border-border/70 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-5 border-t border-border/70 pt-4">
                  <p className="text-sm font-medium text-muted-foreground">{e.price}</p>
                </div>

                <div className="mt-4">
                  <Button className="w-full gap-2" asChild>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                      Book & Chat on Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-14 mx-auto max-w-5xl">
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            3 Core Services
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore prices for CV Making, Video Editing, and Portfolio Making
          </h3>
          <p className="mt-3 text-muted-foreground">
            A simple pricing guide to help customers choose the right package before reaching out.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="border-border/70 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-foreground">{plan.name}</h4>
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">{plan.description}</p>

                <div className="mt-5 space-y-2 rounded-2xl border border-border/70 bg-secondary/30 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Prices</p>
                  <div className="grid gap-2 text-sm">
                    {plan.tiers.map((tier) => (
                      <div key={tier.label} className="flex items-center justify-between rounded-xl bg-background px-3 py-2">
                        <span className="font-medium text-foreground">{tier.label}</span>
                        <span className="font-semibold text-foreground">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-border/70 bg-secondary/30 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Includes</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertDirectory;
