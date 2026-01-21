import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function BackTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="
        fixed bottom-20 right-5
 z-[9999]
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-gradient-to-br from-black to-gray-800
        text-white
        border-2 border-white
        shadow-2xl
        hover:scale-110
        active:scale-95
        transition-transform
      "
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}
