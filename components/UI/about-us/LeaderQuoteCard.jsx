"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeaderQuoteCard({
  imageSrc,
  imageAlt,
  quote,
  name,
  designation,
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        relative
        w-full
        bg-black
        text-white
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative h-px bg-white/20 overflow-hidden">
          <motion.div
            variants={{
              rest: { x: "-110%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 bg-white/60"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-16 lg:py-12">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[560px_1fr]
            gap-10
            lg:gap-24
            items-center
          "
        >
          <div className="w-full">
            <div
              className="
                relative
                w-full
                max-w-[460px]
                aspect-square
                bg-white
                overflow-hidden
              "
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="82vw, 360px"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-start gap-6">
              <div
                className="
                  text-indigo-200
                  font-black
                  leading-none
                  text-[84px]
                  sm:text-[96px]
                  lg:text-[110px]
                  -mt-3
                "
                aria-hidden
              >
                “
              </div>

              <div className="max-w-[720px]">
                <p
                  className="
                    text-white
                    font-light
                    leading-[1.35]
                    text-lg
                    sm:text-xl
                    lg:text-2xl
                  "
                >
                  "{quote}"
                </p>

                <div className="mt-8">
                  <div className="font-semibold text-white">{name}</div>
                  <div className="mt-1 text-sm text-white/60">
                    {designation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM RULE */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 lg:pb-20">
        <div className="relative h-px bg-white/20 overflow-hidden">
          <motion.div
            variants={{
              rest: { x: "110%" },
              hover: { x: "0%" },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 bg-white/60"
          />
        </div>
      </div>
    </motion.div>
  );
}
