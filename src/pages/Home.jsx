import { useState } from "react";

import HeroLayout from "../components/layout/HeroLayout";
import Navbar from "../components/navbar/Navbar";
import Splashscreen from "../components/splashscreen/Splashscreen";
import HeroContent from "../components/hero/HeroContent";
import ScrollIndicator from "../components/hero/ScrollIndicator";
import AboutSection from "../components/about/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Splashscreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <HeroLayout>
        <Navbar />
        <HeroContent />
        <ScrollIndicator />
      </HeroLayout>

      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
