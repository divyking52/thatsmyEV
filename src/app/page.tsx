import { Navbar } from "@/components/layout/Navbar";
import { ExploreBento } from "@/components/sections/ExploreBento";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneyTrack } from "@/components/sections/JourneyTrack";
import { MetricsFooter } from "@/components/sections/MetricsFooter";
import { ValueProposition } from "@/components/sections/ValueProposition";

export default function HomePage() {
  return (
    <main className="relative bg-surface-950">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <ExploreBento />
      <JourneyTrack />
      <MetricsFooter />
    </main>
  );
}
