import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import PersonalIntroVideo from "@/components/PersonalIntroVideo";
import WhyUs from "@/components/WhyUs";
import ExpertsTeaser from "@/components/ExpertsTeaser";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import InstagramConnect from "@/components/InstagramConnect";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ServicesCarousel />
    <PersonalIntroVideo />
    <WhyUs />
    <ExpertsTeaser />
    <FAQSection />
    <Testimonials />
    <InstagramConnect />
    <Footer />
  </div>
);

export default Index;
