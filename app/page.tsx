import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProgramsSection } from "@/components/landing/ProgramsSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <StatsSection />
        <ProgramsSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
