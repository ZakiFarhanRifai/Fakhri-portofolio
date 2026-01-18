import { motion } from "framer-motion";
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

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mt-20 overflow-hidden">
      {/* BACKGROUND */}
      <img
        src={bgDesktop}
        className="absolute inset-0 hidden object-cover w-full h-full lg:block"
        draggable={false}
      />
      <img
        src={bgMobile}
        className="absolute inset-0 object-cover w-full h-full lg:hidden"
        draggable={false}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="
          relative z-10
          mx-auto max-w-[1440px]
          py-[120px]
          px-[120px]
          max-lg:px-6
          max-lg:py-20
        "
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
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
        </motion.h2>

        {/* CARDS */}
        <div className="flex flex-col gap-[48px]">
          <SkillCard title="Design" skills={DESIGN_SKILLS} gap={124} />
          <SkillCard title="Coding" skills={CODING_SKILLS} gap={152} />
        </div>
      </motion.div>
    </section>
  );
}
