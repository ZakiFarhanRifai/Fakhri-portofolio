export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50">
      <svg
        width="600"
        height="400"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[320px] md:w-[420px]"
      >
        <rect width="600" height="400" rx="24" fill="#F8FAFC" />

        {/* Laptop */}
        <rect x="170" y="200" width="260" height="140" rx="12" fill="#CBD5E1" />
        <rect x="190" y="220" width="220" height="100" rx="8" fill="#FFFFFF" />

        {/* Wifi */}
        <path
          d="M300 140 C250 100 350 100 300 140"
          stroke="#F59E0B"
          strokeWidth="10"
          fill="none"
        />
        <path
          d="M300 165 C270 140 330 140 300 165"
          stroke="#F59E0B"
          strokeWidth="8"
          fill="none"
        />
        <circle cx="300" cy="190" r="6" fill="#F59E0B" />

        {/* X Icon */}
        <circle cx="380" cy="240" r="14" fill="#EF4444" />
        <path
          d="M374 234 L386 246 M386 234 L374 246"
          stroke="white"
          strokeWidth="3"
        />

        {/* Phone */}
        <rect x="110" y="170" width="70" height="140" rx="12" fill="#E2E8F0" />
        <rect x="120" y="185" width="50" height="90" rx="6" fill="#FFFFFF" />
        <circle cx="145" cy="290" r="5" fill="#94A3B8" />

        {/* Text */}
        <text
          x="300"
          y="360"
          textAnchor="middle"
          fontSize="18"
          fill="#64748B"
        >
          No Internet Connection
        </text>
      </svg>

      <p className="mt-4 text-sm text-slate-500">
        Periksa koneksi internet kamu
      </p>
    </div>
  );
}
