import SkillItem from "./SkillItem";

export default function SkillCard({ title, skills, gap }) {
  return (
    <div
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
      <div className="mb-[46px] flex items-center gap-6 max-lg:mb-8">
        <span className="text-[36px] font-semibold leading-[125%] text-black max-sm:text-[24px]">
          {title}
        </span>
        <span className="h-px w-[160px] bg-black/30 max-sm:hidden" />
      </div>

      {/* SKILLS */}
      <div
        className="
          flex items-start

          max-lg:flex-wrap
          max-lg:gap-y-8
        "
        style={{ gap }}
      >
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            level={skill.level}
            width={skill.width}
          />
        ))}
      </div>
    </div>
  );
}
