import letsTalk from "../../assets/let's-talk.svg";

export default function HeroContent() {
  return (
    <main className="px-6 text-center pt-[318px] pb-[363px]">
      <p className="mb-4 text-[48px] font-light tracking-[0.13em] text-white">
        HI, I AM FAKHRI
      </p>

      <h1 className="mb-6 text-[96px] font-bold tracking-[0.13em] text-white">
        UI/UX DESIGNER
      </h1>

      <p className="mb-10 max-w-[600px] text-[24px] font-light text-white/80 mx-auto">
        Creating clean, visually stunning, and functional
        <br />
        design for all your needs
      </p>

      <button
        type="button"
        className="transition hover:scale-105 select-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          src={letsTalk}
          alt="Let's Talk"
          className="w-[222px] pointer-events-none"
          draggable={false}
        />
      </button>
    </main>
  );
}
// invite bang
