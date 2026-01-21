import { useEffect, useState } from "react";

export default function Splashscreen({ onFinish }) {
  const [animateOut, setAnimateOut] = useState(false);
  const [randomText, setRandomText] = useState("");

  const texts = [
    "Tunggu sebentar ya, lagi disiapkan yang terbaik ✨",
    "Sedang memuat pengalaman terbaik untuk kamu 🚀",
    "Hampir selesai, jangan ke mana-mana ya 👀",
    "Lagi nyiapin sesuatu yang keren nih 😎",
    "Sedikit lagi… sabar ya, worth it kok 🔥",
    "Sistem sedang bekerja, mohon tunggu sebentar ⏳",
  ];

  useEffect(() => {
    setRandomText(texts[Math.floor(Math.random() * texts.length)]);

    const start = setTimeout(() => {
      setAnimateOut(true);
    }, 3000);

    const end = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">

      {/* LOGO (ONLY THIS SCALES) */}
      <div
        className={`
          flex items-center justify-center
          border-2 border-white rounded-full
          transition-all duration-500 ease-in-out
          ${animateOut ? "w-56 h-56 scale-125" : "w-32 h-32 animate-pulse"}
        `}
      >
        <span className="text-5xl font-bold tracking-wide text-white">
          F
        </span>
      </div>

      {/* TEXT (FADE OUT, NO SCALE) */}
      <span
        className={`
          mt-6 text-sm text-white/80 text-center px-6
          transition-all duration-300 ease-in-out
          ${animateOut ? "opacity-0 translate-y-2" : "opacity-100"}
        `}
      >
        {randomText}
      </span>

      {/* LOADING ICON (FADE OUT) */}
      <div
        className={`
          mt-4 transition-all duration-300 ease-in-out
          ${animateOut ? "opacity-0 translate-y-2" : "opacity-100"}
        `}
      >
        <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
          <g>
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                cx={12 + 9 * Math.sin((i * Math.PI) / 6)}
                cy={12 - 9 * Math.cos((i * Math.PI) / 6)}
                r="1"
              >
                <animate
                  attributeName="r"
                  dur="0.6s"
                  values="1;2;1"
                  begin={`${i * 0.1}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="6s"
              values="360 12 12;0 12 12"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
