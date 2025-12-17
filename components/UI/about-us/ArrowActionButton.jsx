"use client";

import { FiArrowRight } from "react-icons/fi";

export default function ArrowActionButton({
  width = "w-20",
  height = "h-8",
  iconSize = 19,
  className = "",
  ariaLabel = "Open",
}) {
  return (
    <button
      aria-label={ariaLabel}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        ${width}
        ${height}
        overflow-hidden
        rounded-full
        border border-[#0B6B61]
        text-[#0B0F14]
        transition-colors duration-300
        hover:bg-[#0B6B61]
        hover:text-white
        ${className}
      `}
    >
      <FiArrowRight
        size={iconSize}
        className="
          transition-transform
          duration-300
          group-hover:animate-[arrow-loop_0.5s_ease-in-out]
        "
      />
    </button>
  );
}
