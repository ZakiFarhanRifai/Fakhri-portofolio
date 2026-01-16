import HeroLayout from "../components/layout/HeroLayout";
import Navbar from "../components/navbar/Navbar";
import HeroContent from "../components/hero/HeroContent";
import ScrollIndicator from "../components/hero/ScrollIndicator";

export default function Home() {
  return (
    <HeroLayout>
      <Navbar />
      <HeroContent />
      <ScrollIndicator />
    </HeroLayout>
  );
}
