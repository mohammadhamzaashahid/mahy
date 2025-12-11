"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Dropdown({ isOpen, items }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 mt-3 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="
              w-64 rounded-2xl bg-white shadow-xl py-4
              backdrop-blur-2xl border border-gray-200
            "
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="
                  block w-full px-6 py-2 text-gray-800
                  hover:bg-gray-100 transition
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
