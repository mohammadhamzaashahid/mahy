"use client";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";
import { scrollToTop } from "@/lib/utils";
import { useRouter } from "next/navigation";

const container1 = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container2 = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const paddingMap = {
  none:    "py-0",
  sm:      "py-4 md:py-6",
  default: "py-6 md:py-10",
  lg:      "py-10 md:py-16",
  xl:      "py-16 md:py-24",
};

function WhoWeAre({
  image,
  topHeading,
  heading = "MAHY Khoory",
  text = `MAHY Khoory Group of Companies is a Dubai-based diversified
holding group comprising 25+ operating companies and business
divisions across multiple industries. The Group has built a strong
presence in the UAE and the wider region through long-term
commercial relationships, technical capability, and integrated
operations. With businesses spanning trading, engineering,
industrial manufacturing, recycling, sustainability, logistics,
automotive, hospitality, and food & beverage, the Group operates a
balanced and resilient portfolio designed to support both
traditional industries and future-focused sectors.`,
  showButton = true,
  buttonLabel = "Learn more about us",
  buttonHref = "/about-us",
  imageAlt = "About Us",
  invert = false,
  padding = "default", // "none" | "sm" | "default" | "lg" | "xl"
}) {
  const router = useRouter();

  return (
    <section className={`relative overflow-hidden ${paddingMap[padding]}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            variants={container1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col justify-center max-w-xl ${
              invert ? "md:order-2" : "md:order-1"
            }`}
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
              {topHeading || ""}
            </h2>
            <p className="font-semibold text-4xl md:text-5xl mt-2 md:mt-3 leading-tight t-base">
              {heading}
            </p>
            <p className="mt-2 md:mt-3 font-light text-gray-600 leading-relaxed">
              {text}
            </p>
            {showButton && (
              <PrimaryButton
                onClick={() => scrollToTop(buttonHref, router)}
                className="w-fit mt-8"
                label={buttonLabel}
              />
            )}
          </motion.div>

          <motion.div
            variants={container2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative min-h-80 md:min-h-120 w-full overflow-hidden ${
              invert ? "md:order-1" : "md:order-2"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 800px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;