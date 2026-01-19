import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceContent() {
  const [activeTab, setActiveTab] = useState("internship");

  const data = {
    internship: [
      {
        title: "Arum Sari Corporation",
        role: "Konten Media Sosial",
        date: "3 April 2023 – 29 September 2023",
      },
      {
        title: "PT. Alka Sejahtera Abadi",
        role: "Internship Pengadaan Barang & Jasa dan Event Organizer",
        date: "2024",
      },
      {
        title: "Medika Plaza International Healthcare",
        role: "PT. Kartika Bina Medikantama – Internship Claim Analyst",
        date: "19 Maret 2025 – Sekarang",
      },
    ],
    education: [
      {
        title: "SMK TELKOM PURWOKERTO",
        date: "2021 - 2024",
      },
      {
        title: "SMP TELKOM PURWOKERTO",
        date: "2018 – 2021",
      },
    ],
  };

  return (
    <section className="py-24 bg-white">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="container px-4 mx-auto md:px-16"
      >
        {/* TITLE */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="mb-16 text-3xl font-bold text-center text-black md:text-left md:text-4xl"
        >
          Experience
        </motion.h2>

        {/* WRAPPER */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="relative"
        >
          {/* TOGGLE */}
          <div className="absolute flex -translate-x-1/2 -top-12 left-1/2 md:left-auto md:right-0 md:translate-x-0">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2.5 text-sm font-medium border border-b-0 transition
                ${
                  activeTab === "education"
                    ? "bg-white text-black rounded-tl-lg"
                    : "bg-gray-100 text-gray-500 hover:text-black rounded-tl-lg"
                }
              `}
            >
              Education
            </button>

            <button
              onClick={() => setActiveTab("internship")}
              className={`px-5 py-2.5 text-sm font-medium border border-b-0 border-l-0 transition
                ${
                  activeTab === "internship"
                    ? "bg-white text-black rounded-tr-lg"
                    : "bg-gray-100 text-gray-500 hover:text-black rounded-tr-lg"
                }
              `}
            >
              Internship
            </button>
          </div>

          {/* CARD */}
          <div className="p-6 bg-white border shadow-md rounded-xl pt-14 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative space-y-8"
              >
                {/* LINE (TETAP) */}
                <div className="absolute top-0 w-px h-full bg-black left-2" />

                {data[activeTab].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    className="relative flex gap-5"
                  >
                    {/* DOT (DIGESER KE KANAN) */}
                    <div className="relative z-10 mt-2 ml-0.5 h-3.5 w-3.5 rounded-full bg-black" />

                    {/* CONTENT */}
                    <div className="flex flex-col w-full gap-1 md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-black md:text-lg">
                          {item.title}
                        </h3>
                        {item.role && (
                          <p className="text-sm text-gray-600">
                            {item.role}
                          </p>
                        )}
                      </div>

                      <span className="text-sm text-gray-500 md:text-right">
                        {item.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
