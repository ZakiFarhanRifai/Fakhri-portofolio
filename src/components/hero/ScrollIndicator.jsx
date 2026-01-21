import downArrow from "../../assets/down-arrow.svg";

export default function ScrollIndicator() {
  return (
    <a
      href="#about"
      className="
        absolute
        bottom-[-76px]
        left-1/2
        -translate-x-1/2
        z-[999]
        pointer-events-auto
        select-none
        cursor-pointer
      "
    >
      <img
        src={downArrow}
        alt="Scroll down"
        className="w-[188px] h-[152px]"
        draggable={false}
      />
    </a>
  );
}
