"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ManufacturingNetworkMap from "./ManufacturingNetworkMap";

export default function ManufacturingNetworkSection({ network, locale }) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#99afdc]">
      <div
        className="relative min-h-245 sm:min-h-260 md:min-h-275 lg:min-h-295 xl:min-h-315" >
        <Image src="/dubai-pano.jpg" alt="Global network background"
          fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-b from-[#071A3A]/75 via-[#0B3A7A]/45 to-[#F1F4FA]" />
        <motion.div className="relative z-10" initial="hidden" animate="visible"
          variants={prefersReducedMotion ? {} : stagger}>
          <div
            className="max-w-275 mx-auto px-4 sm:px-8 pt-20 sm:pt-24 md:pt-28 text-center text-white">
            <motion.h2
              variants={prefersReducedMotion ? {} : fadeUp}
              className="text-[22px] sm:text-[28px] md:text-[34px] font-medium leading-tight">
              {network.text[0]}
            </motion.h2>
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed opacity-90 max-w-225 mx-auto">
              {network.text[1]}
            </motion.p>
            <motion.div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-6"
              variants={prefersReducedMotion ? {} : stagger}>
              <Stat value={network.statsNo[0]} label={network.stats[0]} />
              <Stat value={network.statsNo[1]} label={network.stats[1]} />
              <Stat value={network.statsNo[2]} label={network.stats[2]} />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="
            relative
            z-20
            mt-20
            sm:mt-28
            md:mt-32
            lg:mt-36
          "
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.25,
          }}
        >
          <ManufacturingNetworkMap data={network.map} locations={network.locations} />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="max-w-[360px] mx-auto text-center"
    >
      <div
        className="
          font-semibold
          tracking-tight
          leading-none
          text-[36px]
          sm:text-[44px]
          md:text-[52px]
          lg:text-[62px]
        "
      >
        {value}+
      </div>
      <p
        className="
          mt-3
          text-xs
          sm:text-sm
          md:text-base
          opacity-90
          leading-relaxed
        "
      >
        {label}
      </p>
    </motion.div>
  );
}
