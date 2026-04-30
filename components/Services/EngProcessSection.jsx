"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

function SwipeRevealImage({
  src,
  alt,
  className = "",
  priority = false,
  delay = 0,
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden bg-white ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.38 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06 }}
        whileInView={reduce ? undefined : { scale: 1 }}
        viewport={{ once: true, amount: 0.38 }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
          delay: delay + 0.05,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 92vw, 560px"
        />
      </motion.div>

      {!reduce && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ y: "0%" }}
          whileInView={{ y: "120%" }}
          viewport={{ once: true, amount: 0.38 }}
          transition={{
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1],
            delay,
          }}
        />
      )}
    </motion.div>
  );
}

const itemFade = {
  hidden: { opacity: 0, y: 16 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

/* ─── aspect ratio maps ───────────────────────────────────────────────── */

/**
 * Preset keys → per-slot aspect classes used inside each layout.
 *
 *   primary  — the dominant image (SingleImage / TwoImageStack top)
 *   accent   — the overlapping smaller card (TwoImageStack bottom)
 *   grid     — every cell in the 2×2 or 3-image right-column grid
 *   tall     — the row-spanning left image in ThreeImageLayout
 */
const ASPECT_PRESETS = {
  landscape: { primary: "aspect-[4/3]", accent: "aspect-[3/4]", grid: "aspect-[4/3]", tall: "aspect-[3/4]" },
  portrait:  { primary: "aspect-[3/4]", accent: "aspect-[2/3]", grid: "aspect-[3/4]", tall: "aspect-[2/3]" },
  square:    { primary: "aspect-square", accent: "aspect-square", grid: "aspect-square", tall: "aspect-square" },
};

function resolveAspect(imageAspect) {
  if (!imageAspect || imageAspect === "landscape") return ASPECT_PRESETS.landscape;
  if (ASPECT_PRESETS[imageAspect]) return ASPECT_PRESETS[imageAspect];
  // raw Tailwind string passed directly, e.g. "aspect-[9/16]"
  return { primary: imageAspect, accent: imageAspect, grid: imageAspect, tall: imageAspect };
}

/* ─── layout helpers ──────────────────────────────────────────────────── */

function SingleImage({ images, aspect }) {
  return (
    <div className="relative lg:pl-20">
      <SwipeRevealImage
        src={images[0]}
        alt="Process image 1"
        priority
        delay={0.06}
        className={`
          relative mx-auto lg:ml-[54px]
          w-[92%] sm:w-[80%] lg:w-[82%]
          ${aspect.primary}
          rounded-[2px]
          shadow-[0_18px_55px_rgba(0,0,0,0.18)]
          ring-1 ring-black/5
        `}
      />
    </div>
  );
}

function TwoImageStack({ images, aspect }) {
  return (
    <div className="relative lg:pl-20">
      <SwipeRevealImage
        src={images[0]}
        alt="Process image 1"
        priority
        delay={0.06}
        className={`
          relative
          mx-auto lg:ml-[54px]
          w-[92%] sm:w-[80%] lg:w-[82%]
          ${aspect.primary}
          rounded-[2px]
          shadow-[0_18px_55px_rgba(0,0,0,0.18)]
          ring-1 ring-black/5
        `}
      />
      <SwipeRevealImage
        src={images[1]}
        alt="Process image 2"
        delay={0.22}
        className={`
          absolute
          left-[6%] sm:left-[8%] lg:left-[2%]
          bottom-[-56px] sm:bottom-[-62px] lg:bottom-[-68px]
          w-[58%] sm:w-[46%] lg:w-[46%]
          ${aspect.accent}
          rounded-[2px]
          shadow-[0_18px_55px_rgba(0,0,0,0.18)]
          ring-1 ring-black/5
        `}
      />
    </div>
  );
}

function ThreeImageLayout({ images, aspect }) {
  return (
    <div className="relative lg:pl-10 grid grid-cols-2 gap-3 sm:gap-4">
      <SwipeRevealImage
        src={images[0]}
        alt="Process image 1"
        priority
        delay={0.06}
        className={`
          row-span-2 w-full h-full
          min-h-[260px] sm:min-h-[340px]
          ${aspect.tall}
          rounded-[2px]
          shadow-[0_18px_55px_rgba(0,0,0,0.18)]
          ring-1 ring-black/5
        `}
      />
      <SwipeRevealImage
        src={images[1]}
        alt="Process image 2"
        delay={0.16}
        className={`
          w-full ${aspect.grid}
          rounded-[2px]
          shadow-[0_12px_35px_rgba(0,0,0,0.15)]
          ring-1 ring-black/5
        `}
      />
      <SwipeRevealImage
        src={images[2]}
        alt="Process image 3"
        delay={0.26}
        className={`
          w-full ${aspect.grid}
          rounded-[2px]
          shadow-[0_12px_35px_rgba(0,0,0,0.15)]
          ring-1 ring-black/5
        `}
      />
    </div>
  );
}

function FourImageGrid({ images, aspect }) {
  const offsets = ["mt-0", "mt-6 sm:mt-8", "mt-0", "mt-6 sm:mt-8"];
  return (
    <div className="relative lg:pl-10 grid grid-cols-2 gap-3 sm:gap-4">
      {images.slice(0, 4).map((src, i) => (
        <SwipeRevealImage
          key={i}
          src={src}
          alt={`Process image ${i + 1}`}
          priority={i === 0}
          delay={0.06 + i * 0.1}
          className={`
            w-full ${aspect.grid}
            rounded-[2px]
            shadow-[0_12px_35px_rgba(0,0,0,0.15)]
            ring-1 ring-black/5
            ${offsets[i]}
          `}
        />
      ))}
    </div>
  );
}

/* ─── main component ──────────────────────────────────────────────────── */

export default function EngProcessSection({
  heading = "Process",
  items = [
    {
      heading: "Understand your needs",
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
    },
    {
      heading: "Develop custom solutions",
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
    },
    {
      heading: "Achieve targeted results",
      text: "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
    },
  ],
  images: propImages,
  /**
   * imageAspect  — optional, controls image proportions across all layouts.
   *
   *   "landscape"     4/3 primary  ← default, original behaviour (safe to omit)
   *   "portrait"      3/4 primary  ← tall / narrow photos (e.g. ladder shots)
   *   "square"        1/1 all
   *   "aspect-[w/h]"  any raw Tailwind aspect string for full custom control
   *
   * All existing usages that don't pass this prop continue to work exactly as before.
   */
  imageAspect,
}) {
  const defaultImages = ["/gallery/gallery-1.jpg", "/gallery/gallery-2.jpg"];
  const images = propImages?.length ? propImages : defaultImages;
  const count  = images.length;
  const aspect = resolveAspect(imageAspect);

  const ImageLayout =
    count === 1 ? SingleImage :
    count === 2 ? TwoImageStack :
    count === 3 ? ThreeImageLayout :
    FourImageGrid;

  const leftColPb = count === 2 ? "pb-[72px] lg:pb-[80px]" : "pb-0";

  return (
    <section className="relative bg-white py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* BIG VERTICAL WORD */}
          <div className="pointer-events-none select-none hidden lg:block absolute left-[-96px] top-1/2 -translate-y-1/2">
            <div className="rotate-[-90deg] origin-left">
              <span className="text-[160px] xl:text-[190px] font-semibold tracking-tight text-[#F0F5F6]">
                {heading}
              </span>
            </div>
          </div>

          {/* LEFT — IMAGE AREA */}
          <div className={leftColPb}>
            <ImageLayout images={images} aspect={aspect} />
          </div>

          {/* RIGHT — STEPS */}
          <div className="relative">
            <div className="absolute left-[20px] top-[18px] bottom-[18px] w-px border-l border-dashed border-black/35" />

            <div className="space-y-16 md:space-y-20">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-8"
                  variants={itemFade}
                  initial="hidden"
                  whileInView="visible"
                  custom={0.1 * i}
                  viewport={{ once: true, amount: 0.38 }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="h-10 w-10 text-white rounded-full bg-slate-700 flex items-center justify-center text-[12px] font-semibold">
                      {i + 1}
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-slate-600" />
                  </div>
                  <div className="pt-[1px]">
                    <h3 className="text-[20px] font-semibold text-[#0B1320]">
                      {item.heading}
                    </h3>
                    <p className="mt-2 text-[#526064] leading-relaxed max-w-[520px]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 lg:hidden">
              <span className="text-[54px] font-semibold text-[#F0F5F6] leading-none">
                {heading}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}