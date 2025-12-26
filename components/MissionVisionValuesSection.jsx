"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function MissionVisionValuesSection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F4F7FB]">
      <div className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px]">
        <Image
          src="/pano.jpg"
          alt="Mission vision background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A3A]/40 via-[#071A3A]/20 to-transparent" />
        <motion.div
          className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={prefersReducedMotion ? {} : stagger}
        >
          <motion.div
            variants={prefersReducedMotion ? {} : fadeUp}
            className="
              rounded-[32px]
              px-8 sm:px-12 lg:px-16
              py-14 sm:py-16 lg:py-20

              bg-[rgba(255,255,255,0.28)]
              backdrop-blur-2xl

              border border-white/30
              shadow-[0_40px_120px_rgba(15,23,42,0.25)]
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_56px_1fr] gap-10 lg:gap-14 items-start">
              <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-slate-900 tracking-tight">
                  Mission
                </h3>

                <ul className="mt-5 space-y-3 text-[15px] sm:text-[16px] leading-[1.6] text-slate-700">
                  {[
                    "Create great products for users",
                    "Create a joyful and progressive environment for employees",
                    "Create win-win platforms for partners based on mutual trust",
                    "Render steady long-term returns on investment for shareholders",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-slate-400/70 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="hidden lg:flex justify-center">
                <div className="h-[85%] w-px bg-gradient-to-b from-transparent via-white/70 to-transparent" />
              </div>

              <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-slate-900 tracking-tight">
                  Vision
                </h3>

                <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-slate-700 max-w-[420px]">
                  Develop into a healthier, more sustainable world-class
                  corporation
                </p>

                <h3 className="mt-10 text-[18px] sm:text-[20px] font-medium text-slate-900 tracking-tight">
                  Core value
                </h3>

                <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-slate-700 max-w-[420px]">
                  Benfen, design-driven value, user-orientation, continuous
                  learning and team spirit
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
