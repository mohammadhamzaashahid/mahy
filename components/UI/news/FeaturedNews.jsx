"use client";

import { motion } from "framer-motion";
import ArrowActionButton from "../about-us/ArrowActionButton";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedNews({
  image,
  date,
  title,
  location,
  excerpt,
  ctaLabel,
  href,
  invert = false,
}) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-0 lg:px-8 mt-12 lg:mt-24">
        <div
          className={`
        grid
        grid-cols-1
        lg:grid-cols-2
        items-center
        gap-y-10
        lg:gap-x-20
        ${invert
              ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
              : ""
            }
      `}
        >
          {/* IMAGE — untouched hover logic */}
          <motion.div
            initial={{ opacity: 0, x: invert ? 48 : -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="
          group
          relative
          w-full
          aspect-[4/3]
          overflow-hidden
          bg-slate-100
        "
          >
            <div
              className="
            pointer-events-none
            absolute inset-0 z-10
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            bg-gradient-to-tr
            from-white/10
            via-white/5
            to-transparent
          "
            />

            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.05]
          "
            />
          </motion.div>

          {/* TEXT — padded on mobile */}
          <motion.div
            initial={{ opacity: 0, x: invert ? -48 : 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="
          px-4 sm:px-6
          lg:px-0
          flex
          flex-col
          justify-center
          max-w-[520px]
        "
          >
            <span className="text-ui text-xs tracking-[0.22em] text-slate-500 mb-3">
              {date}
            </span>

            <h2 className="text-heading text-2xl sm:text-4xl lg:text-3xl leading-tight text-black">
              {title}
            </h2>

            <p className="mt-4 text-body text-slate-600 leading-relaxed">
              {location && (
                <span className="font-medium text-slate-800">
                  {location} —{" "}
                </span>
              )}
              {excerpt}
            </p>

            <Link href={href} className="mt-6 flex items-center gap-3">
              <span className="text-sm font-medium text-slate-900">
                {ctaLabel}
              </span>
              <ArrowActionButton />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
