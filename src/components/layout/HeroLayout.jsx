import bgHero from "../../assets/bg-hero.svg";

export default function HeroLayout({ children }) {
  return (
    <section className="relative h-[969px] bg-black text-white font-poppins">
      <img
        src={bgHero}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}
