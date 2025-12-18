"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { value: 3200, label: "Employees" },
  { value: 31, label: "Nationalities" },
  { value: 300, label: "Certified Engineers" },
  { value: 2000, label: "Projects in UAE" },
  { value: 1000, label: "Distribution Partners" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function KeyStatsSection() {
  return (
    <>
      <div className="text-center mt-20 mb-12 px-4">
        <h2 className="text-heading text-4xl sm:text-5xl font-semibold text-slate-900">
          Key Facts
        </h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="origin-center w-24 sm:w-32 h-[3px] bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 mx-auto mt-4 rounded-full"
        />
      </div>
      <section className="w-full bg-white pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="
              grid
              grid-cols-1
              gap-y-14
              text-center
              sm:grid-cols-2
              sm:gap-y-16
              lg:grid-cols-5
              lg:gap-x-6
              lg:gap-y-0
            "
          >
            {STATS.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center px-2"
              >
                <div className="h-[72px] sm:h-[84px] lg:h-[96px] flex items-center justify-center">
                  <AnimatedCounter
                    value={item.value}
                    className="
    leading-none
    text-4xl
    sm:text-5xl
    lg:text-5xl
    xl:text-6xl
    font-semibold
    tracking-tight
    text-[var(--accent-color)]
  "
                  />
                </div>

                <p className="mt-3 text-sm sm:text-base lg:text-sm xl:text-base font-normal text-slate-700 leading-snug max-w-[240px]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
