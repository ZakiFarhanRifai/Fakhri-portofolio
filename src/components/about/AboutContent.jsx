import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutContent() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="w-full"
    >
      <div className="px-6 py-20 mx-auto max-w-7xl sm:px-10 lg:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* IMAGE */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-start"
          >
            <motion.img
              src={profileImg}
              alt="Fakhri"
              draggable={false}
              className="object-contain w-full max-w-xs select-none  sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={item}
            className="text-center text-black lg:text-left"
          >
            {/* LABEL */}
            <motion.div
              variants={item}
              className="flex items-center justify-center gap-4 mb-4 lg:justify-start"
            >
              <span className="text-lg font-light">About Me</span>
              <span className="hidden w-32 h-px bg-black/40 sm:block" />
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={item}
              className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Normal Human with
              <br className="hidden sm:block" />
              Great Creativity
            </motion.h2>

            {/* PARAGRAPH */}
            <motion.p
              variants={item}
              className="mb-8 text-base font-light leading-relaxed sm:text-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={item}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-56 h-12 text-base font-medium text-white bg-black rounded-full "
              >
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
