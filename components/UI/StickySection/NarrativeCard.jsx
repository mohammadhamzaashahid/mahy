import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NarrativeCard({
  title,
  subtitle,
  bullets,
  image,
  cursor,
}) {
  return (
    <div className="relative isolate max-w-xl w-full">
      <span
        aria-hidden
        className="
          absolute
          inset-0
          rounded-3xl
          blur-[80px]
    b-base
          opacity-60
          pointer-events-none
          z-0
        "
      />

      <span
        aria-hidden
        className="
          absolute
          inset-0
          pointer-events-none
          transition-opacity
          duration-300
          z-0
        "
        style={{
          opacity: cursor?.active ? 1 : 0,
          background: `radial-gradient(
            220px circle at ${cursor?.x}px ${cursor?.y}px,
            rgba(16, 185, 129, 0.12),
            transparent 65%
          )`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-semibold
            text-white
            leading-tight
            tracking-tight
          "
        >
          {title}
        </motion.h2>

        <p className="mt-6 text-slate-300/90 text-lg leading-relaxed max-w-lg">
          {subtitle}
        </p>

        <ul className="mt-8 space-y-4">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white">
              <span className="t-base mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <PrimaryButton
          label="View More"
          size="md"
          radius="rounded-full"
          className="mt-12"
        />

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-10 block lg:hidden w-full"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
