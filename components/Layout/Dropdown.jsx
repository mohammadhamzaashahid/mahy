"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Dropdown({ isOpen, items }) {
  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-9999">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              w-60 md:w-64
  rounded-2xl
  bg-black/55
  backdrop-blur-2xl
  border border-white/10
  shadow-[0_20px_50px_rgba(0,0,0,0.45)]
  overflow-hidden
            "
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="
    group relative flex items-center
    px-6 py-3
    text-sm font-medium tracking-wide
    text-white/85
    transition-all duration-200
    hover:text-white
  "
              >
                <span
                  className="
      absolute left-0 top-0 h-full w-[2px]
      bg-white/70
      scale-y-0
      origin-top
      transition-transform duration-200
      group-hover:scale-y-100
    "
                />

                <span className="relative z-10">
                  {item.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
