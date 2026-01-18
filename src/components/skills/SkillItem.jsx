import { motion } from "framer-motion";

export default function SkillItem({ icon, name, level, width }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex items-start gap-[21px] max-lg:w-full"
      style={{ width }}
    >
      <img
        src={icon}
        alt={name}
        className="h-[64px] w-[64px] select-none"
        draggable={false}
      />

      <div>
        <p className="text-[24px] font-normal text-black max-sm:text-[16px]">
          {name}
        </p>
        <p className="text-[24px] font-normal text-black/55 max-sm:text-[16px]">
          {level}
        </p>
      </div>
    </motion.div>
  );
}
