import SkillCard from "./SkillCard";
import skillsBg from "../../assets/bg-skills.svg";

import canvaIcon from "../../assets/skills/canva.svg";
import figmaIcon from "../../assets/skills/figma.svg";
import photoshopIcon from "../../assets/skills/photoshop.svg";
import htmlIcon from "../../assets/skills/html.svg";
import cssIcon from "../../assets/skills/css.svg";
import jsIcon from "../../assets/skills/javascript.svg";
import pythonIcon from "../../assets/skills/python.svg";

const DESIGN_SKILLS = [
  { name: "Canva", level: "Intermediate", icon: canvaIcon },
  { name: "Figma", level: "Intermediate", icon: figmaIcon },
  { name: "Photoshop", level: "Basic", icon: photoshopIcon },
];

const CODING_SKILLS = [
  { name: "HTML", level: "Basic", icon: htmlIcon },
  { name: "CSS", level: "Basic", icon: cssIcon },
  { name: "JavaScript", level: "Basic", icon: jsIcon },
  { name: "Python", level: "Basic", icon: pythonIcon },
];

export default function SkillsSection() {
  return (
    <section className="relative mt-[249px] overflow-hidden">
      <img
        src={skillsBg}
        alt="Skills Background"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-[120px] py-[120px]">
        <h2 className="mb-[58px] text-right text-[64px] font-bold text-white">
          What I’ve Learned
        </h2>

        <div className="flex flex-col gap-[48px]">
          <SkillCard title="Design" skills={DESIGN_SKILLS} />
          <SkillCard title="Coding" skills={CODING_SKILLS} />
        </div>
      </div>
    </section>
  );
}
