"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Dropdown({ isOpen, items }) {
  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="
              w-56 md:w-64
              rounded-2xl
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
              overflow-hidden
            "
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="
                  block px-6 py-2.5 text-white/90 text-sm
                  hover:bg-white/15 hover:text-white
                  transition-all duration-200
                "
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
