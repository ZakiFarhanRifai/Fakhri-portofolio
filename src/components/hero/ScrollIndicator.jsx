import downArrow from "../../assets/down-arrow.svg";

export default function ScrollIndicator() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[868px]
        z-20
        -translate-x-1/2
        select-none
        hidden
        lg:block
      "
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={downArrow}
        alt="Scroll down"
        className="h-[152px] w-[188px] pointer-events-none"
        draggable={false}
      />
    </div>
  );
}
