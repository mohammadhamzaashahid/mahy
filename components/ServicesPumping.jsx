"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const services = [
  {
    title: "Business planning",
    desc: "Lorem ipsum dolor sit amet consectetur. Vulputate iaculis morbi morbi convallis erat. Blandit lacinia donec semper ut nam aliquam mus duis.",
    image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822181/gallery-3_exvuhu.jpg",
    imageFit: "cover", // "cover" | "contain"
  },
  {
    title: "Financial strategy",
    desc: "Lorem ipsum dolor sit amet consectetur. Vulputate iaculis morbi morbi convallis erat. Blandit lacinia donec semper ut nam aliquam mus duis.",
    image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822181/gallery-3_exvuhu.jpg",
    imageFit: "cover",
  },
  {
    title: "Business consulting",
    desc: "Lorem ipsum dolor sit amet consectetur. Vulputate iaculis morbi morbi convallis erat. Blandit lacinia donec semper ut nam aliquam mus duis.",
    image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822181/gallery-3_exvuhu.jpg",
    imageFit: "cover",
  },
  {
    title: "Market research",
    desc: "Lorem ipsum dolor sit amet consectetur. Vulputate iaculis morbi morbi convallis erat. Blandit lacinia donec semper ut nam aliquam mus duis.",
    image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773822181/gallery-3_exvuhu.jpg",
    imageFit: "cover",
  },
];

export default function ServicesPumping({
  title1 = "Our service",
  title2 = "Grow client base for improved business standing",
  items = services,
}) {
  const [active, setActive] = useState(0);

  const columns = 2;
  const totalRows = Math.ceil(items.length / columns);

  return (
    <section className="b-base text-white py-24 sm:py-32">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-20 sm:mb-28 px-4">
        <p className=" uppercase tracking-widest text-xs sm:text-sm mb-3">
          {title1}
        </p>
        <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-semibold leading-tight">
          {title2}
        </h2>
      </div>

      {/* GRID */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {items.map((item, i) => {
            const isActive = active === i;
            const currentRow = Math.floor(i / columns);
            const currentCol = i % columns;
            const isNotLastColumn = currentCol !== columns - 1;
            const isNotLastRow = currentRow !== totalRows - 1;

            // per-item fit — fallback to "cover"
            const fit = item.imageFit === "contain" ? "object-contain" : "object-cover";
            // contain images sit better on a faintly lighter bg so they read against dark
            const imgBg = item.imageFit === "contain" ? "bg-white/[0.06]" : "";

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={clsx(
                  "relative transition-colors duration-300 cursor-default",
                  "px-8 sm:px-12 md:px-14",
                  "pt-8 pb-12 md:pt-10 md:pb-14",
                  isNotLastColumn && "md:border-r border-white/20",
                  isNotLastRow    && "border-b border-white/20",
                  isActive        && "bg-white/5"
                )}
              >
                {/* ── IMAGE — always visible ───────────────────────── */}
                <div
                  className={clsx(
                    "relative w-full overflow-hidden rounded-sm mb-7",
                    imgBg
                  )}
                  style={{ aspectRatio: "16/9" }}
                >
                  {/* image zooms out slightly when inactive */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: isActive ? 1 : 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={fit}
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </motion.div>

                  {/* dark veil lifts on active to "reveal" the image */}
                  <motion.div
                    className="absolute inset-0 bg-[#061737]"
                    animate={{ opacity: isActive ? 0 : 0.5 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </div>

                {/* ── CONTENT ─────────────────────────────────────── */}
                <div className="relative z-10">
                  <motion.h3
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.35 }}
                    className="text-xl sm:text-2xl font-semibold mb-3"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    animate={{ opacity: isActive ? 0.8 : 0.38 }}
                    transition={{ duration: 0.35 }}
                    className="text-sm leading-7 max-w-md"
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}