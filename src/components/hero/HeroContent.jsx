import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import letsTalk from "../../assets/let's-talk.svg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();

    if (latest > prev && latest > 80) {
      // scroll ke bawah → hilang
      setVisible(false);
    } else if (latest < prev && !visible) {
      // scroll ke atas → trigger ulang animasi
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
      className="
        px-6 text-center
        pt-[280px] pb-[300px]
        max-lg:pt-40 max-lg:pb-32
        max-sm:pt-28 max-sm:pb-24
      "
    >
      <motion.p
        variants={item}
        className="mb-4 text-[48px] font-light tracking-[0.13em] text-white max-lg:text-[32px] max-sm:text-[20px]"
      >
        HI, I AM FAKHRI
      </motion.p>

      <motion.h1
        variants={item}
        className="mb-6 text-[96px] font-bold tracking-[0.13em] text-white max-lg:text-[64px] max-sm:text-[36px]"
      >
        UI/UX DESIGNER
      </motion.h1>

      <motion.p
        variants={item}
        className="mb-10 mx-auto max-w-[600px] text-[24px] font-light text-white/80 max-lg:text-[18px] max-sm:text-[14px]"
      >
        Creating clean, visually stunning, and functional
        <br className="max-sm:hidden" />
        design for all your needs
      </motion.p>

      <motion.button
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="select-none"
      >
        <img
          src={letsTalk}
          alt="Let's Talk"
          draggable={false}
          className="w-[222px] max-lg:w-[180px] max-sm:w-[140px]"
        />
      </motion.button>
    </motion.main>
  );
}
