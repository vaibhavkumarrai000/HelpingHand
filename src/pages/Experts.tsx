import Header from "@/components/Header";
import ExpertDirectory from "@/components/ExpertDirectory";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Experts = () => (
  <div className="min-h-screen">
    <Header />
    <div className="container pt-6">
      <Button variant="outline" className="gap-2" asChild>
        <a href={import.meta.env.BASE_URL}>
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>
      </Button>
    </div>
    <ExpertDirectory />
    <Footer />
  </div>
);

export default Experts;