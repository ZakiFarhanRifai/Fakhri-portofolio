export default function SkillItem({ icon, name, level, width }) {
  return (
    <div
      className="
          flex items-start gap-[21px]
          max-lg:w-full
        "
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
    </div>
  );
}
