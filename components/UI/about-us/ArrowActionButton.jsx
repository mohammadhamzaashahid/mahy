"use client";

import { FiArrowRight } from "react-icons/fi";

export default function ArrowActionButton({
  width = "w-20",
  height = "h-8",
  iconSize = 19,
  bg = "b-base",
  hoverBg = "b-base-hover",
  textColor = "text-white",
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
        border-base
        t-base
        transition-colors
        duration-300
        hover:text-white
        b-base-hover
        ${className}
      `}
    >
      <FiArrowRight
        size={iconSize}
        className="
  text-[var(--accent-color)]
  transition-transform
  duration-300
  group-hover:text-white
  group-hover:animate-[arrow-loop_0.5s_ease-in-out]
"
      />
    </button>
  );
}
