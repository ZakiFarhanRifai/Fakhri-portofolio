import { motion } from "framer-motion";
import downArrow from "../../assets/down-arrow.svg";

export default function ScrollIndicator() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="absolute inset-x-0 flex justify-center pointer-events-none bottom-12">
      <motion.button
        type="button"
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 1.8,
        }}
        className="cursor-pointer pointer-events-auto select-none  overflow-x-clip"
        aria-label="Scroll to About section"
        onContextMenu={(e) => e.preventDefault()}
      >
        <motion.img
          src={downArrow}
          alt="Scroll down"
          draggable={false}
          className="
            w-[22vw]
            max-w-[150px]
            min-w-[72px]
            h-auto
            pointer-events-none
          "
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.button>
    </div>
  );
}
