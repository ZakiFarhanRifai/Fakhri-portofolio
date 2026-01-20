import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../../assets/profile.png";
import cvFile from "../../assets/cv.pdf";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
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
  const [openCV, setOpenCV] = useState(false);

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
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
            <motion.div variants={item} className="flex justify-center lg:justify-start">
              <motion.img
                src={profileImg}
                alt="Profile"
                draggable={false}
                className="object-contain w-full max-w-xs select-none sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div variants={item} className="text-center text-black lg:text-left">
              <motion.div
                variants={item}
                className="flex items-center justify-center gap-4 mb-4 lg:justify-start"
              >
                <span className="text-lg font-light">About Me</span>
                <span className="hidden w-32 h-px bg-black/40 sm:block" />
              </motion.div>

              <motion.h2
                variants={item}
                className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Normal Human with
                <br className="hidden sm:block" />
                Great Creativity
              </motion.h2>

              <motion.p
                variants={item}
                className="mb-8 text-base font-light leading-relaxed sm:text-lg"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>

              <motion.div variants={item} className="flex justify-center lg:justify-start">
                <motion.button
                  onClick={() => setOpenCV(true)}
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

      {/* ================= CV MODAL ================= */}
      <AnimatePresence>
        {openCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col w-full max-w-4xl overflow-hidden bg-white rounded-xl"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-4 py-3 border-b sm:px-6">
                <h3 className="text-sm font-semibold sm:text-base">
                  Curriculum Vitae
                </h3>
                <button
                  onClick={() => setOpenCV(false)}
                  className="text-sm text-gray-500 hover:text-black"
                >
                  ✕
                </button>
              </div>

              {/* PDF PREVIEW */}
              <div className="h-[60vh] sm:h-[70vh]">
                <iframe
                  src={cvFile}
                  title="CV Preview"
                  className="w-full h-full"
                />
              </div>

              {/* FOOTER BUTTON */}
              <div className="flex flex-col gap-3 px-4 py-4 border-t sm:flex-row sm:justify-end sm:px-6">
                <a
                  href={cvFile}
                  download
                  className="flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-black rounded-full hover:opacity-90"
                >
                  Download CV
                </a>

                <button
                  onClick={() => setOpenCV(false)}
                  className="flex items-center justify-center px-6 py-2 text-sm font-medium text-black transition border border-black rounded-full hover:bg-black hover:text-white"
                >
                  Kembali
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
