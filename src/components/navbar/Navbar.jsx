const NAV_ITEMS = ["About", "Skills", "Experience", "Portfolio", "Contact"];

export default function Navbar() {
  return (
    <header className="absolute right-[120px] top-[86px] z-20">
      <nav className="flex h-[53px] items-center gap-[18px] rounded-full border-none bg-transparent">
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
  );
}
