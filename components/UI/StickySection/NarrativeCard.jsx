import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NarrativeCard({
  title,
  subtitle,
  bullets,
  image,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="max-w-xl w-full"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-4 text-slate-400 leading-relaxed">
        {subtitle}
      </p>

      <ul className="mt-8 space-y-4">
        {bullets.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-white">
            <span className="text-teal-400 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <PrimaryButton
        label="View More"
        size="md"
        bg="bg-gradient-to-r from-teal-600 to-emerald-600"
        hoverBg="hover:from-teal-500 hover:to-emerald-500"
        radius="rounded-full"
        className="mt-10"
      />
    </motion.div>
  );
}
