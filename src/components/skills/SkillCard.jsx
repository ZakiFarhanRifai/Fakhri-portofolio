import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

export default function SkillCard({ title, skills, gap }) {
  return (
    <motion.div
      variants={card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="
        w-full
        rounded-[12px]
        bg-white
        shadow-md
        px-[120px]
        py-[45px]
        max-lg:px-8
        max-lg:py-8
      "
    >
      {/* TITLE */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 },
          },
        }}
        className="mb-[46px] flex items-center gap-6 max-lg:mb-8"
      >
        <span className="text-[36px] font-semibold text-black max-sm:text-[24px]">
          {title}
        </span>
        <span className="h-px w-[160px] bg-black/30 max-sm:hidden" />
      </motion.div>

      {/* SKILLS */}
      <div
        className="flex items-start max-lg:flex-wrap max-lg:gap-y-8"
        style={{ gap }}
      >
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}
