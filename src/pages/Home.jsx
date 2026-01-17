import HeroLayout from "../components/layout/HeroLayout";
import Navbar from "../components/navbar/Navbar";
import HeroContent from "../components/hero/HeroContent";
import ScrollIndicator from "../components/hero/ScrollIndicator";
import AboutSection from "../components/about/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <>
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
    </>
  );
}
