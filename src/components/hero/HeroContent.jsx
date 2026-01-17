import letsTalk from "../../assets/let's-talk.svg";

export default function HeroContent() {
  return (
    <main
      className="
        px-6
        text-center

        pt-[318px]
        pb-[363px]

        max-lg:pt-40
        max-lg:pb-32

        max-sm:pt-28
        max-sm:pb-24
      "
    >
      <p
        className="
          mb-4
          text-[48px]
          font-light
          tracking-[0.13em]
          text-white

          max-lg:text-[32px]
          max-sm:text-[20px]
        "
      >
        HI, I AM FAKHRI
      </p>

      <h1
        className="
          mb-6
          text-[96px]
          font-bold
          tracking-[0.13em]
          text-white

          max-lg:text-[64px]
          max-sm:text-[36px]
        "
      >
        UI/UX DESIGNER
      </h1>

      <p
        className="
          mb-10
          mx-auto
          max-w-[600px]
          text-[24px]
          font-light
          text-white/80

          max-lg:text-[18px]
          max-sm:text-[14px]
        "
      >
        Creating clean, visually stunning, and functional
        <br className="max-sm:hidden" />
        design for all your needs
      </p>

      <button
        type="button"
        className="select-none transition hover:scale-105"
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          src={letsTalk}
          alt="Let's Talk"
          className="
            w-[222px]
            pointer-events-none

            max-lg:w-[180px]
            max-sm:w-[140px]
          "
          draggable={false}
        />
      </button>
    </main>
  );
}
