"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function DiscoverSection({
  eyebrow,
  title,
  description,
  image,
  invert = false,
}) {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial="rest"
          animate="rest"
          whileHover="hover"
          className={clsx(`grid grid-cols-1 lg:grid-cols-2 gap-18`,
            invert && "lg:[&>*:first-child]:order-2"
          )}
        >
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.02 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-[420px] md:h-[380px] sm:h-[300px] overflow-hidden"
          >
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </motion.div>

          <motion.div
            variants={{
              rest: { y: 0 },
              hover: { y: -4 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={clsx(`max-w-4xl pt-8`,
              invert ? "lg:ml-auto" : ""
            )}
          >
            <p className="t-base text-xl font-semibold tracking-tighter">{eyebrow}</p>

            {/* TITLE */}
            <h2 className="font-semibold text-4xl md:text-5xl mt-2 leading-12 md:leading-15">
              {title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 font-light text-gray-700">
              {description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
