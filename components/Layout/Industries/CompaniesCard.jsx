"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function CompaniesCard({ category, title, logo, onClick }) {
  return (
    <div
      className="
        group relative
        w-full
        rounded-[22px]
        border border-[#E7E3DA]
        bg-white
        px-8 pt-8 pb-7
        overflow-hidden
      "
    >
      <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#0B6B61]">
        {category}
      </div>

      <div className="mt-10 flex items-center justify-items-start">
        <div className="relative h-[150px] w-[210px]">
          <Image
            src={logo}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <h3 className="mt-10 text-[28px] font-semibold leading-[1.12] text-[#0B0F14]">
        {title}
      </h3>

      <div className="mt-8">
        <button
          onClick={onClick}
          className="
            inline-flex items-center justify-center
            h-[40px] w-[70px]
            rounded-full
            border border-[#0B6B61]
            text-[#0B0F14]
            transition
            hover:bg-[#0B6B61] hover:text-white
          "
          aria-label="Open company"
        >
          <FiArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
