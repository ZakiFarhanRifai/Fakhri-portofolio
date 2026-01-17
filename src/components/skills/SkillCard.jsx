export default function SkillCard({ title, skills }) {
  return (
    <div className="w-full rounded-[12px] bg-white px-[48px] py-[36px] shadow-md">
      <div className="mb-[32px] flex items-center gap-6">
        <span className="text-[36px] font-semibold leading-[125%] text-black">
          {title}
        </span>
        <span className="h-px w-[160px] bg-black/30" />
      </div>

      <div className="grid grid-flow-col auto-cols-max gap-x-[48px]">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-start gap-[21px]">
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-[64px] w-[64px] select-none"
              draggable={false}
            />

            <div>
              <p className="text-[24px] font-normal text-black">{skill.name}</p>
              <p className="text-[24px] font-normal text-black/55">
                {skill.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
