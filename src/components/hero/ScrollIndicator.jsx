import downArrow from "../../assets/down-arrow.svg";

export default function ScrollIndicator() {
  return (
    <div
      className="absolute top-[868px] left-1/2 -translate-x-1/2 z-20 select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={downArrow}
        alt="Scroll down"
        className="w-[188px] h-[152px] pointer-events-none"
        draggable={false}
      />
    </div>
  );
}
