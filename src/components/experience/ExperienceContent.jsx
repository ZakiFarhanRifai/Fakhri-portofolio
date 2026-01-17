import { useState } from "react";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("internship");

  const data = {
    internship: [
      {
        title: "Arum Sari Corporation",
        role: "Konten Media Sosial",
        date: "[2023] 3 April – 29 September",
      },
      {
        title: "PT. ALKA SEJAHTERA ABADI",
        role: "Internship Pengadaan Barang & Jasa dan Event Organizer",
        date: "[2023]",
      },
      {
        title: "Medika Plaza",
        role: "PT. Kartika Bina Medikantama – Internship Claim Analyst",
        date: "[2025] 19 Maret – Sekarang",
      },
    ],
    education: [
      {
        title: "Universitas Contoh",
        role: "S1 Teknik Informatika",
        date: "2021 – 2025",
      },
      {
        title: "SMA Contoh",
        role: "IPA",
        date: "2018 – 2021",
      },
    ],
  };

  return (
    <section className="bg-white py-24">
<div className="container mx-auto px-4 md:px-16 lg:px-24">


        {/* TITLE */}
        <h2 className="
          mb-16
          text-4xl
          font-bold
          text-black
          text-center
          md:text-left
        ">
          Experience
        </h2>

        {/* WRAPPER */}
        <div className="relative">

          {/* TOGGLE */}
          <div
            className="
              absolute
              -top-12
              left-1/2
              -translate-x-1/2
              flex

              md:left-auto
              md:right-0
              md:translate-x-0
            "
          >
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 text-sm font-medium border border-b-0 transition
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
              className={`px-6 py-3 text-sm font-medium border border-b-0 border-l-0 transition
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
          <div className="rounded-xl rounded-tr-none border bg-white p-6 pt-14 shadow-md md:p-10">

            {/* TIMELINE */}
            <div className="relative space-y-10">

              {/* LINE */}
              <div className="absolute left-2 top-0 h-full w-px bg-black" />

              {data[activeTab].map((item, index) => (
                <div key={index} className="relative flex gap-6">

                  {/* DOT */}
                  <div className="relative z-10 mt-2 h-4 w-4 rounded-full bg-black" />

                  {/* CONTENT */}
                  <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.role}
                      </p>
                    </div>

                    <span className="text-sm text-gray-600 md:text-right">
                      {item.date}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
