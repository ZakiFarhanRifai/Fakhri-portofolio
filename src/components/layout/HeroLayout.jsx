import bgHero from "../../assets/bg-hero.svg";
import bgHeroMobile from "../../assets/bg-mobile.svg";

export default function HeroLayout({ children }) {
  return (
    <section
      className="
        relative
   
        bg-black
        text-white
        font-poppins

        lg:h-[969px]
      "
    >
      {/* DESKTOP BACKGROUND */}
      <img
        src={bgHero}
        alt="Hero Background"
        className="
          absolute
          inset-0
          hidden
          h-full
          w-full
          object-cover

          lg:block
        "
        draggable={false}
      />

      {/* MOBILE BACKGROUND */}
      <img
        src={bgHeroMobile}
        alt="Hero Background Mobile"
        className="
          absolute
          inset-0
          block
          h-full
          w-full
          object-cover

          lg:hidden
        "
        draggable={false}
      />

      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}
