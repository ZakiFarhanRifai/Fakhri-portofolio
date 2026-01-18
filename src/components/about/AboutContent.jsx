import { motion } from "framer-motion";
import profileImg from "../../assets/fakhri.png";

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
      <div className="px-6 py-20 mx-auto max-w-7xl sm:px-8 md:px-12 lg:px-24">
        <div className="flex items-center gap-16 max-lg:flex-col">

          {/* IMAGE */}
          <motion.img
            variants={item}
            src={profileImg}
            alt="Fakhri"
            draggable={false}
            className="
              w-[420px]
              select-none
              object-cover
              lg:w-[460px]
              xl:w-[500px]
              max-md:w-[340px]
              max-sm:w-[260px]
            "
          />

          {/* TEXT */}
          <motion.div
            variants={item}
            className="max-w-xl text-black max-lg:text-center"
          >
            {/* LABEL */}
            <motion.div
              variants={item}
              className="flex items-center gap-4 mb-4 max-lg:justify-center"
            >
              <span className="text-lg font-light">About Me</span>
              <span className="w-32 h-px bg-black/40 max-sm:hidden" />
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={item}
              className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              Normal Human with
              <br className="max-sm:hidden" />
              Great Creativity
            </motion.h2>

            {/* PARAGRAPH */}
            <motion.p
              variants={item}
              className="mb-8 text-base font-light leading-relaxed md:text-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={item}
              className="flex max-lg:justify-center"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-56 h-12 text-base font-medium text-white bg-black rounded-full"
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
