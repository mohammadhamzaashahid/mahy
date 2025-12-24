"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function ProductCard({ title, image, modelsCount, onClick, href }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onClick={onClick}
      className="group relative cursor-pointer rounded-3xl border border-[#E6E8EC] bg-white px-6 pt-6 pb-5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-all">
      <Link href={href}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-[#0B0F14]">{title}</h3>
          <div
            className="h-9 w-9 rounded-full bg-[#F3F4F6] flex items-center justify-center group-hover:bg-[#79C4E7]  group-hover:text-white transition-colors">
            <FiArrowRight size={16} />
          </div>
        </div>
        <div className="relative mt-4 h-30 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="mt-4 text-sm text-[#6B7280]">
          {modelsCount} {modelsCount > 1 ? "Models" : "Model"}
        </p>
      </Link>
    </motion.div>
  );
}