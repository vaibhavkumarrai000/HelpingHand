import { Instagram, MessageCircleMore, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { INSTAGRAM_URL } from "@/lib/constants";

const InstagramConnect = () => (
  <section id="instagram" className="container py-20">
    <Card className="overflow-hidden border-border bg-secondary/30">
      <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
            <Instagram className="h-4 w-4" />
            Connect on Instagram
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Book your service through Instagram
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            If you want video editing or CV and resume help, you can message us directly on Instagram.
            We’ll guide you from there and connect you with the right service quickly.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-full border border-border bg-secondary p-2">
              <MessageCircleMore className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Fast replies</p>
              <p className="text-sm text-muted-foreground">Send a DM and get direct support.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full border border-border bg-secondary p-2">
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