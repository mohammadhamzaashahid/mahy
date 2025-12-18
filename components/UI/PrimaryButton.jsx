"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { FiArrowUpRight } from "react-icons/fi";


export default function PrimaryButton({
  label = "View More",
  size = "md",
  bg = "b-base",
  hoverBg = "b-base-hover",
  textColor = "text-white",
  radius = "rounded-full",
  icon: Icon = FiArrowUpRight,
  motionEnabled = true,
  className,
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-3 text-sm gap-3",
    lg: "px-8 py-4 text-base gap-3",
  };

  const ButtonWrapper = motionEnabled ? motion.button : "button";

  return (
    <ButtonWrapper
      whileHover={motionEnabled ? { y: -2 } : undefined}
      whileTap={motionEnabled ? { scale: 0.97 } : undefined}
      transition={
        motionEnabled
          ? { type: "spring", stiffness: 320, damping: 18 }
          : undefined
      }
      className={clsx(
        "inline-flex items-center font-medium transition-all duration-300 cursor-pointer",
        "shadow-lg hover:shadow-xl focus:outline-none",
        "focus:ring-2 f-base focus:ring-offset-2",
        sizeClasses[size],
        bg,
        hoverBg,
        textColor,
        radius,
        className
      )}
    >
      <span>{label}</span>

      {Icon && (
        <motion.span
          whileHover={motionEnabled ? { x: 4, y: -4 } : undefined}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center"
        >
          <Icon className="text-lg" />
        </motion.span>
      )}
    </ButtonWrapper>
  );
}
