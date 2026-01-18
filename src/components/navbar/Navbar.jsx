import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();

    if (latest > prev && latest > 120) {
      setVisible(false); // scroll down
    } else if (latest < prev) {
      setVisible(true); // scroll up
    }
  });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute right-[120px] top-[86px] z-20 hidden lg:block"
          >
            <nav className="flex h-[53px] items-center gap-[18px]">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="
                    h-[53px]
                    rounded-full
                    bg-white/20
                    px-8
                    text-[24px]
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-white/30
                  "
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ================= MOBILE HAMBURGER ================= */}
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute z-30 right-6 top-6 lg:hidden"
          >
            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md"
            >
              <div className="flex flex-col gap-1">
                <span className="h-[2px] w-6 bg-white" />
                <span className="h-[2px] w-6 bg-white" />
                <span className="h-[2px] w-6 bg-white" />
              </div>
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[32px] text-white hover:opacity-70"
                >
                  {item.label}
                </motion.button>
              ))}

              <button
                onClick={() => setOpen(false)}
                className="mt-10 text-xl text-white/70"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
