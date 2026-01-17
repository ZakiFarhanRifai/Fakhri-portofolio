import profileImg from "../../assets/fakhri.png";

export default function AboutContent() {
  return (
    <div
      className="
        flex
        items-center
        gap-[69px]

        max-lg:flex-col
        max-lg:gap-16
      "
    >
      {/* IMAGE */}
      <img
        src={profileImg}
        alt="Fakhri"
        draggable={false}
        className="
          h-[631px]
          w-[623px]
          object-cover
          select-none

          max-lg:h-auto
          max-lg:w-[360px]

          max-sm:w-[280px]
        "
      />

      {/* TEXT */}
      <div
        className="
          max-w-[885px]
          text-black

          max-lg:text-center
        "
      >
        {/* ABOUT LABEL */}
        <div
          className="
            mb-6
            flex
            items-center
            gap-6

            max-lg:justify-center
          "
        >
          <span className="text-[24px] font-light leading-none text-black">
            About Me
          </span>

          <span
            className="
              h-px
              w-[329px]
              bg-black/50

              max-sm:hidden
            "
          />
        </div>

        {/* HEADING */}
        <h2
          className="
            mb-6
            text-[80px]
            font-bold
            leading-[125%]
            text-black

            max-lg:text-[56px]
            max-sm:text-[36px]
          "
        >
          Normal Human with
          <br className="max-sm:hidden" />
          Great Creativity
        </h2>

        {/* PARAGRAPH */}
        <p
          className="
            mb-10
            text-[24px]
            font-light
            leading-[150%]
            text-black
            max-lg:mx-10
            max-lg:text-[18px]
            max-sm:text-[14px]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        {/* BUTTON */}
        <div
          className="
            flex
            max-lg:justify-center
          "
        >
          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              h-[54px]
              w-[282px]
              rounded-[41px]
              bg-black
              text-[24px]
              font-medium
              text-white
              transition
              hover:scale-105
              active:scale-95
              select-none

              max-sm:h-[44px]
              max-sm:w-[220px]
              max-sm:text-[16px]
            "
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
