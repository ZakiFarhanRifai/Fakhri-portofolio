import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeId, setActiveId] = useState(null);

  const { scrollY } = useScroll();
  const lastScroll = useRef(0);

  // ===== SCROLL ANIMATION (HANYA LG) =====
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (window.innerWidth < 1024) {
      setVisible(true);
      return;
    }

    const prev = lastScroll.current;

    if (latest > prev && latest > 120) {
      setVisible(false);
    } else if (latest < prev) {
      setVisible(true);
    }

    lastScroll.current = latest;
  });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
    setOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR (LG ONLY) ================= */}
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute hidden lg:block top-10 right-10 z-[9999]"
          >
            <nav className="flex items-center gap-6 h-14">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`h-14 px-8 text-2xl rounded-full transition
                    ${
                      activeId === item.id
                        ? "bg-white text-black shadow-xl"
                        : "bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ================= MOBILE HAMBURGER + CARD MENU ================= */}
      <motion.header
        className="fixed z-50 right-6 top-6 lg:hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="relative">
          {/* HAMBURGER */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center w-12 h-12 border rounded-full shadow-lg bg-slate-900/80 backdrop-blur-md border-white/20"
          >
            <motion.div
              className="relative w-6 h-6"
              initial={false}
              animate={open ? "open" : "closed"}
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: -8 },
                  open: { rotate: 45, y: 0 },
                }}
                className="absolute left-0 top-1/2 h-0.5 w-6 bg-white"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="absolute left-0 top-1/2 h-0.5 w-6 bg-white"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 8 },
                  open: { rotate: -45, y: 0 },
                }}
                className="absolute left-0 top-1/2 h-0.5 w-6 bg-white"
              />
            </motion.div>
          </button>

          {/* MOBILE MENU CARD */}
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute right-0 w-56 py-4 mt-4 bg-white shadow-2xl rounded-xl"
              >
                <ul className="flex flex-col">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full px-6 py-3 text-left transition
                          ${
                            activeId === item.id
                              ? "bg-blue-50 font-semibold text-blue-600"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
