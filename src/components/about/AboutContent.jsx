import profileImg from "../../assets/fakhri.png";
export default function AboutContent() {
  return (
    <div className="flex items-center gap-[69px]">
      <img
        src={profileImg}
        alt="Fakhri"
        className="h-[631px] w-[623px] object-cover"
        draggable={false}
      />
      <div className="max-w-[885px] text-black">
        <div className="mb-6 flex items-center gap-6">
          <span className="text-[24px] font-light leading-none text-black">
            About Me
          </span>

          <span className="h-px w-[329px] bg-black/50" />
        </div>

        <h2 className="mb-6 text-[80px] font-bold leading-[125%] text-black">
          Normal Human with <br /> Great Creativity
        </h2>

        <p className="mb-10 text-[24px] font-light leading-[150%] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <button
          type="button"
          className=" flex items-center justify-center h-[54px] w-[282px] rounded-[41px] bg-black text-[24px] font-medium text-white transition hover:scale-105 active:scale-95 select-none "
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
