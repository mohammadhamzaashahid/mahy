"use client";

import Link from "next/link";

export default function Dropdown({ isOpen, items = [] }) {
  if (!isOpen || !items.length) return null;

  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 mt-3
        w-64 rounded-2xl bg-white shadow-xl py-3
        backdrop-blur-2xl border border-gray-200
        z-40
      "
    >
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="
            block w-full px-6 py-2 text-sm text-gray-800
            hover:bg-gray-100 transition
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
