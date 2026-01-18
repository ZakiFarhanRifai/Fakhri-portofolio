import SkillCard from "./SkillCard";

import bgDesktop from "../../assets/bg-skills.svg";
import bgMobile from "../../assets/bg-skills-mobile.svg";

import canvaIcon from "../../assets/skills/canva.svg";
import figmaIcon from "../../assets/skills/figma.svg";
import photoshopIcon from "../../assets/skills/photoshop.svg";
import htmlIcon from "../../assets/skills/html.svg";
import cssIcon from "../../assets/skills/css.svg";
import jsIcon from "../../assets/skills/javascript.svg";
import pythonIcon from "../../assets/skills/python.svg";

const DESIGN_SKILLS = [
  { name: "Canva", level: "Intermediate", icon: canvaIcon, width: 241 },
  { name: "Figma", level: "Intermediate", icon: figmaIcon, width: 241 },
  { name: "Photoshop", level: "Basic", icon: photoshopIcon, width: 214 },
];

const CODING_SKILLS = [
  { name: "HTML", level: "Basic", icon: htmlIcon, width: 149 },
  { name: "CSS", level: "Basic", icon: cssIcon, width: 149 },
  { name: "JavaScript", level: "Basic", icon: jsIcon, width: 213 },
  { name: "Python", level: "Basic", icon: pythonIcon, width: 168 },
];

export default function SkillsSection() {
  return (
    <section className="relative mt-[249px] overflow-hidden">
      {/* DESKTOP BG */}
      <img
        src={bgDesktop}
        alt="Skills Background"
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        draggable={false}
      />

      {/* MOBILE / TABLET BG */}
      <img
        src={bgMobile}
        alt="Skills Background Mobile"
        className="absolute inset-0 block h-full w-full object-cover lg:hidden"
        draggable={false}
      />

      <div
        className="
          relative z-10
          mx-auto max-w-[1440px]

          py-[120px]
          px-[120px]

          max-lg:px-6
          max-lg:py-20
        "
      >
        <h2
          className="
            mb-[58px]
            text-right
            text-[64px]
            font-bold
            text-white

            max-lg:text-center
            max-lg:text-[48px]

            max-sm:text-[32px]
          "
        >
          What I’ve Learned
        </h2>

        <div className="flex flex-col gap-[48px]">
          <SkillCard title="Design" skills={DESIGN_SKILLS} gap={124} />
          <SkillCard title="Coding" skills={CODING_SKILLS} gap={152} />
        </div>
      </div>
    </section>
  );
}
