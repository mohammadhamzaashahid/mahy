"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { useState } from "react";
import SubDropdown from "./SubDropdown";

export default function Dropdown({ isOpen, items }) {
  const [openSub, setOpenSub] = useState(null);

  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-9999">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="
              w-60 md:w-64
              rounded-2xl
              bg-black/55
              backdrop-blur-2xl
              border border-white/10
              shadow-[0_20px_50px_rgba(0,0,0,0.45)]
              overflow-visible
            "
          >
            {items.map((item, index) => {
              const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenSub(index)}
                  onMouseLeave={() => setOpenSub(null)}
                >
                  <Link
                    href={item.href}
                    className="
                      group relative flex items-center justify-between
                      px-6 py-3
                      text-sm font-medium tracking-wide
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

                    <span>{item.label}</span>

                    {hasChildren && (
                      <HiChevronRight className="text-lg opacity-70 group-hover:opacity-100" />
                    )}
                  </Link>

                  {hasChildren && (
                    <div
                      className="
                        pointer-events-none
                        absolute right-[-14px] top-3
                        h-[calc(100%-24px)] w-px
                        bg-gradient-to-b
                        from-transparent via-white/30 to-transparent
                      "
                    />
                  )}

                  {hasChildren && (
                    <SubDropdown
                      isOpen={openSub === index}
                      items={item.children}
                    />
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
