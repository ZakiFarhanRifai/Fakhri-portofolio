import { motion } from "framer-motion";
import downArrow from "../../assets/down-arrow.svg";

export default function ScrollIndicator() {
  return (
    <div
      className="
        absolute
        bottom-[-76px]
        inset-x-0
        z-[999]
        flex
        justify-center
        pointer-events-none
      "
    >
      <motion.a
        href="#about"
        className="cursor-pointer pointer-events-auto select-none"
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <img
          src={downArrow}
          alt="Scroll down"
          className="w-[188px] h-[152px]"
          draggable={false}
        />
      </motion.a>
    </div>
  );
}
