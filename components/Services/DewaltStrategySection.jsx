"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function DewaltStrategySection({
  heading = "Informed strategy, Operational strength, and sustainable results.",
  description = "We specialize in empowering B2B companies with results-driven consulting solutions tailored to modern business challenges.",
  items = [
    "Deep experience across B2B sectors",
    "Solutions aligned with your business goals",
    "Frameworks built for long-term success",
    "Working with you, not just for you",
  ],
  image = "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777554817/worker-using-drill-front-view_yavfah.jpg",
  imageAlt = "Strategy meeting",
  buttonText = "More about us",
  showButton = true,
  onButtonClick,
  imageFit = "cover", 
  imageClassName = "",
  imageWrapperClassName = "",
}) {
  const isContain = imageFit === "contain";

  return (
    <section className="bg-black py-28 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.28 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.h2
              variants={fadeUp}
              className="
                text-[38px] md:text-[52px] lg:text-[60px]
                font-medium leading-[1.15] tracking-tight
                text-slate-400
                max-w-[620px]
              "
            >
              {heading}
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-12 relative">
              <div
                className={`
                  relative overflow-hidden rounded-[28px]
                  shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                  ${isContain ? "bg-black" : ""}
                  ${imageWrapperClassName}
                `}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  width={900}
                  height={600}
                  className={`
                    w-full
                    ${
                      isContain
                        ? "h-[420px] md:h-[500px] lg:h-[560px] object-contain"
                        : "h-auto object-cover scale-[1.02]"
                    }
                    ${imageClassName}
                  `}
                  priority
                />

                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
              </div>
            </motion.div>
          </div>

          <div className="pt-[92px] lg:pt-[104px]">
            <motion.p
              variants={fadeUp}
              className="
                text-slate-400 text-[16px]
                leading-relaxed
                max-w-[420px]
              "
            >
              {description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 h-px w-full bg-[#2A2A2A]"
            />

            {items?.length > 0 && (
              <motion.ul
                variants={container}
                className="mt-8 space-y-6 max-w-[420px]"
              >
                {items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-slate-400"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <motion.div
              variants={fadeUp}
              className="mt-8 h-px w-full bg-[#2A2A2A]"
            />

            {showButton && (
              <motion.button
                type="button"
                variants={fadeUp}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={onButtonClick}
                className="
                  mt-12
                  inline-flex items-center justify-center
                  rounded-full
                  bg-slate-400 text-black
                  px-10 py-4
                  font-medium
                  shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                "
              >
                {buttonText}
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}