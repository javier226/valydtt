import { Background } from "@/components/Background";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturesBar } from "@/components/FeaturesBar";
import { WhyValydExists } from "@/components/WhyValydExists";
import { HowValydWorks } from "@/components/HowValydWorks";
import { BusinessSection } from "@/components/BusinessSection";
import { DeveloperSection } from "@/components/DeveloperSection";
import { TheNetworkSection } from "@/components/TheNetworkSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen">
      <Background />
      <Navigation />
      <Hero />
      <FeaturesBar />
      <WhyValydExists />
      <HowValydWorks />
      <BusinessSection />
      <DeveloperSection />
      <TheNetworkSection />
      <FinalCTA />
      <Footer />
    </div>;
};
export default Index;