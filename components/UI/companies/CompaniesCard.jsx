"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function CompaniesCard({ category, title, logo, onClick }) {
    return (
        <div
            className="
        group relative
        w-full
        rounded-3xl
        border border-[#E7E3DA]
        bg-white
        hover:shadow-lg
        px-8 pt-8 pb-7
        overflow-hidden
        cursor-pointer
        transition-colors duration-500
      "
            onClick={onClick}
        >
            <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#0B6B61]">
                {category}
            </div>

            <div className="mt-5">
                <div className="relative h-40 w-full">
                    <Image
                        src={logo}
                        alt={title}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>
            </div>

            <h3 className="mt-5 text-[28px] font-medium leading-[1.12] text-[#0B0F14]">
                {title}
            </h3>

            <div className="mt-4">
                <button
                    className="
      group
      relative
      inline-flex items-center justify-center
      h-8 w-20
      overflow-hidden
      rounded-full
      border border-[#0B6B61]
      text-[#0B0F14]
      transition-colors duration-300
      group-hover:bg-[#0B6B61]
      group-hover:text-white
    "
                    aria-label="Open company"
                >
                    <FiArrowRight
                        size={19}
                        className="
        transition-transform
        duration-300
        group-hover:animate-[arrow-loop_0.5s_ease-in-out]
      "
                    />
                </button>
            </div>
        </div>
    );
}