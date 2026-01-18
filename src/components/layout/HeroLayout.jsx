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
      // scroll ke bawah → hide background
      setVisible(false);
    } else if (latest < prev && !visible) {
      // scroll ke atas → re-trigger animation
      setVisible(true);
      setKey((k) => k + 1);
    }
  });

  return (
    <section
      className="
        relative
        bg-black
        text-white
        font-poppins
        overflow-hidden
        lg:h-[969px]
      "
    >
      {/* DESKTOP BACKGROUND */}
      <motion.img
        key={`desktop-${key}`}
        src={bgHero}
        alt="Hero Background"
        draggable={false}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute inset-0 hidden object-cover w-full h-full lg:block"
      />

      {/* MOBILE BACKGROUND */}
      <motion.img
        key={`mobile-${key}`}
        src={bgHeroMobile}
        alt="Hero Background Mobile"
        draggable={false}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute inset-0 block object-cover w-full h-full lg:hidden"
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </section>
  );
}
