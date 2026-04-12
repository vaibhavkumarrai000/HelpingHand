import { Instagram, MessageCircleMore, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { INSTAGRAM_URL } from "@/lib/constants";

const InstagramConnect = () => (
  <section id="instagram" className="container py-20">
    <Card className="overflow-hidden border-border/70 bg-gradient-to-br from-secondary/40 to-background shadow-sm">
      <CardContent className="grid gap-8 p-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:p-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm">
            <Instagram className="h-4 w-4" />
            Connect on Instagram
          </div>
          <h2 className="max-w-xl text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Book your service through Instagram
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            If you want video editing or CV and resume help, you can message us directly on Instagram.
            We’ll guide you from there and connect you with the right service quickly.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="rounded-full border border-border/70 bg-secondary p-2">
              <MessageCircleMore className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Fast replies</p>
              <p className="text-sm text-muted-foreground">Send a DM and get direct support.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full border border-border/70 bg-secondary p-2">
              <ArrowRight className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Simple booking</p>
              <p className="text-sm text-muted-foreground">No extra steps. Just contact us on Instagram.</p>
            </div>
          </div>

          <Button asChild className="mt-2 w-full">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Open Instagram
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </section>
);

export default InstagramConnect;