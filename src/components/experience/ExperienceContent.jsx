import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ===== IMPORT CERTIFICATE IMAGES ===== */
import certUIUX from "../../assets/Sertifikat_AWS.png";
import certWeb from "../../assets/Sertifikat_PKL.png";

export default function ExperienceContent() {
  const [activeTab, setActiveTab] = useState("internship");

  const data = {
    internship: [
      {
        title: "Arum Sari Corporation",
        role: "Konten Media Sosial",
        date: "April - September 2023",
      },
      {
        title: "PT. Alka Sejahtera Abadi",
        role: "Internship Pengadaan Barang & Jasa dan Event Organizer",
        date: "November - Februari 2025",
      },
      {
        title: "Medika Plaza International Healthcare",
        role: "Internship Claim Analyst",
        date: "Maret - Sekarang 2026",
      },
    ],
    education: [
      {
        title: "SMK Telkom Purwokerto",
        date: "2021 - 2024",
      },
      {
        title: "SMP Telkom Purwokerto",
        date: "2018 – 2021",
      },
    ],
    certificate: [
      {
        title: "AWS Cloud Fundamental",
        issuer: "Amazon Web Services",
        image: certUIUX,
      },
      {
        title: "PKL Visual Desain",
        issuer: "Arum Sari Corporation",
        image: certWeb,
      },
    ],
  };

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto md:px-16">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-3xl font-bold text-center md:text-left md:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="relative">

          {/* TOGGLE */}
          <div className="absolute flex -translate-x-1/2 -top-12 left-1/2 md:left-auto md:right-0 md:translate-x-0">
            {["education", "internship", "certificate"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-sm font-medium border border-b-0 transition
                  ${
                    activeTab === tab
                      ? "bg-white text-black"
                      : "bg-gray-100 text-gray-500 hover:text-black"
                  }
                  ${index === 0 ? "rounded-tl-lg" : ""}
                  ${index === 2 ? "rounded-tr-lg border-l-0" : "border-l-0"}
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* CARD */}
          <div className="p-6 bg-white border shadow-md rounded-xl pt-14 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >

                {/* ===== CERTIFICATE TAB ===== */}
                {activeTab === "certificate" ? (
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {data.certificate.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="overflow-hidden bg-white border rounded-xl"
                      >
                        {/* IMAGE WRAPPER */}
                        <div className="flex items-center justify-center w-full bg-gray-50 aspect-[4/3] p-4">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>

                        {/* TEXT */}
                        <div className="p-4 text-center">
                          <h3 className="font-semibold text-black">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {cert.issuer}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  /* ===== TIMELINE (EDU & INTERN) ===== */
                  <div className="relative space-y-8">
                    <div className="absolute top-0 w-px h-full bg-black left-2" />

                    {data[activeTab].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="relative flex gap-5"
                      >
                        <div className="relative z-10 mt-2 h-3.5 w-3.5 rounded-full bg-black" />

                        <div className="flex flex-col w-full gap-1 md:flex-row md:justify-between">
                          <div>
                            <h3 className="font-semibold text-black">
                              {item.title}
                            </h3>
                            {item.role && (
                              <p className="text-sm text-gray-600">
                                {item.role}
                              </p>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">
                            {item.date}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
