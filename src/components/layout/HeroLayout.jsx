import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import bgHero from "../../assets/bg-hero.svg";
import bgHeroMobile from "../../assets/bg-mobile.svg";

export default function HeroLayout({ children }) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [key, setKey] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();

    if (latest > prev && latest > 100) {
      setVisible(false);
    } else if (latest < prev && !visible) {
      setVisible(true);
      setKey((k) => k + 1);
    }
  });

  return (
    <section className="relative w-full min-h-screen overflow-visible bg-black font-poppins">
      {/* ===== BACKGROUND WRAPPER (ANTI OVERFLOW) ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* DESKTOP */}
        <motion.img
          key={`desktop-${key}`}
          src={bgHero}
          alt="Hero Background"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 hidden object-cover w-full h-full pointer-events-none lg:block"
        />

        {/* MOBILE */}
        <motion.img
          key={`mobile-${key}`}
          src={bgHeroMobile}
          alt="Hero Background Mobile"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 block object-cover w-full h-full pointer-events-none lg:hidden"
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex flex-col w-full min-h-screen">
        {children}
      </div>
    </section>
  );
}
