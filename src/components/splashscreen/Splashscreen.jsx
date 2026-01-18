import { useEffect, useState } from "react";

export default function Splashscreen({ onFinish }) {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // mulai animasi membesar
    const start = setTimeout(() => {
      setAnimateOut(true);
    }, 3000);

    // splashscreen selesai setelah animasi
    const end = setTimeout(() => {
      onFinish();
    }, 3500); // 3 detik + 0.5 detik animasi

    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black">
      
      {/* CIRCLE LOGO */}
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

      {/* LOADING */}
      {!animateOut && (
        <svg
          className="w-8 h-8"
          fill="white"
          viewBox="0 0 24 24"
        >
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
      )}
    </div>
  );
}
