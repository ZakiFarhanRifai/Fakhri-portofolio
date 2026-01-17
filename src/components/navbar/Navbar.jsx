import { useState } from "react";

const NAV_ITEMS = ["About", "Skills", "Experience", "Portfolio", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="absolute right-[120px] top-[86px] z-20 hidden lg:block">
        <nav className="flex h-[53px] items-center gap-[18px]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="
                h-[53px]
                rounded-full
                bg-white/20
                px-8
                text-[24px]
                font-normal
                text-white
                transition
                hover:bg-white/30
              "
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* ================= MOBILE HAMBURGER ================= */}
      <header className="absolute right-6 top-6 z-30 lg:hidden">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            bg-white/20
            text-white
          "
        >
          {/* Hamburger Icon */}
          <div className="flex flex-col gap-1">
            <span className="h-[2px] w-6 bg-white" />
            <span className="h-[2px] w-6 bg-white" />
            <span className="h-[2px] w-6 bg-white" />
          </div>
        </button>
      </header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => setOpen(false)}
                className="
                  text-[32px]
                  font-medium
                  text-white
                  transition
                  hover:opacity-70
                "
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => setOpen(false)}
              className="mt-12 text-xl text-white/70"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}
