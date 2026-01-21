import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import letsTalk from "../../assets/let's-talk.svg";

/* ===== ANIMATION VARIANTS ===== */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroContent() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [key, setKey] = useState(0);

  /* ===== SHOW / HIDE HERO ON SCROLL ===== */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();

    if (latest > prev && latest > 80) {
      setVisible(false);
    } else if (latest < prev && !visible) {
      setVisible(true);
      setKey((k) => k + 1);
    }
  });

  return (
    <motion.main
      key={key}
      variants={container}
      initial="hidden"
      animate={visible ? "show" : "hidden"}
      className="relative flex flex-col items-center justify-center w-full max-w-full min-h-screen px-6 overflow-hidden text-center "
    >
      {/* ===== SUBTITLE ===== */}
      <motion.p
        variants={item}
        className="
          mb-4
          text-base
          sm:text-lg
          md:text-xl
          tracking-[0.18em]
          sm:tracking-[0.22em]
          text-white
        "
      >
        HI, I AM FAKHRI
      </motion.p>

      {/* ===== TITLE ===== */}
      <motion.h1
        variants={item}
        className="
          mb-6
          font-bold
          tracking-[0.08em]
          sm:tracking-[0.12em]
          md:tracking-[0.15em]
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          text-white
        "
      >
        UI/UX DESIGNER
      </motion.h1>

      {/* ===== DESCRIPTION ===== */}
      <motion.p
        variants={item}
        className="max-w-xl mb-10 text-sm sm:text-base md:text-lg text-white/80"
      >
        Creating clean, visually stunning, and functional
        <br className="hidden sm:block" />
        design for all your needs
      </motion.p>

      {/* ===== LET'S TALK BUTTON ===== */}
      <motion.a
        href="#contact"
        variants={{
          hidden: { opacity: 0, scale: 0.96 },
          show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="
          overflow-hidden
          w-[140px]
          sm:w-[180px]
          md:w-[220px]
          mx-auto
          cursor-pointer
        "
      >
        <img
          src={letsTalk}
          alt="Let's Talk"
          draggable={false}
          className="w-full h-auto"
        />
      </motion.a>
    </motion.main>
  );
}
