"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function SubDropdown({ isOpen, items }) {
  return (
    <div className="absolute left-full top-0 ml-3 z-9999">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -6, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="
              w-56
              rounded-2xl
              bg-black/55
              backdrop-blur-2xl
              border border-white/10
              shadow-[0_18px_45px_rgba(0,0,0,0.4)]
            "
          >
            {items.map((item, index) => (
              <Link
                key={`${item.href || "sub-item"}-${index}`}
                href={item.href}
                className="
                  group relative block
                  px-6 py-3
                  text-sm font-medium
                  text-white/85
                  hover:text-white
                "
              >
                <span
                  className="
                    absolute left-0 top-0 h-full w-[2px]
                    bg-white/70
                    scale-y-0 origin-top
                    transition-transform duration-200
                    group-hover:scale-y-100
                  "
                />
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
