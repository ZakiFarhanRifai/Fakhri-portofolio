import { motion } from "framer-motion";
import downArrow from "../../assets/down-arrow.svg";

export default function ScrollIndicator() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 1.8,
      }}
      onClick={handleScroll}
      className="
        absolute
        left-1/2
        z-20
        -translate-x-1/2
        select-none
        cursor-pointer

        top-[400px]
        sm:top-[600px]
        md:top-[568px]
        lg:top-[868px]
      "
      onContextMenu={(e) => e.preventDefault()}
      role="button"
      aria-label="Scroll to About section"
    >
      <motion.img
        src={downArrow}
        alt="Scroll down"
        draggable={false}
        className="
          h-[96px]
          w-[120px]
          pointer-events-none

          sm:h-[120px]
          sm:w-[150px]

          lg:h-[152px]
          lg:w-[188px]
        "
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
