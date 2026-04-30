"use client"

import AnimatedLines from "../../AnimatedLines"
import Image from "next/image"
import { motion } from "framer-motion"
import PrimaryButton from "../../PrimaryButton"
import { object } from "zod"

function ServicesGlobally({
  heading = "",
  text,
  texts1,
  texts2,
  objectFit = "cover",
  items,
  image = "/gallery/gallery-3.jpg",
  invert = false,
}) {
  return (
    <section className="max-w-7xl mx-auto py-4 md:pt-10 px-3">
      {heading && (
        <>
          <AnimatedLines />
          <h2 className="text-3xl md:text-4xl font-semibold t-base text-center leading-12">
            {heading}
          </h2>
        </>
      )}
      <motion.div
        className="mt-6 md:mt-8 p-6 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-8 b-base md:min-h-100 text-white"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div
          className={`md:py-4 md:col-span-2 ${invert ? "md:order-2" : "md:order-1"
            }`}
        >
          {text && <p className="leading-7 text-amber-50">{text}</p>}

          {texts1 && (
            <div>
              {texts1.map((item, i) =>
                item.link ? (
                  <a
                    key={i}
                    href={`mailto:${item.text}`}
                    className="block text-blue-300 underline hover:text-blue-200"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p key={i} className={`${i > 0 && "mt-2"}`}>
                    {item.text}
                  </p>
                )
              )}
            </div>
          )}

          {items && (
            <ul className="mt-2 space-y-2">
              {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {texts2 && (
            <div className="mt-3 space-y-2">
              {texts2.map((item, i) => (
                <p className="text-amber-50" key={i}>
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className={`overflow-hidden relative h-60 md:h-full md:col-span-3 ${invert ? "md:order-1" : "md:order-2"
            }`}
        >
          <Image src={image} alt="Services" fill style={{ objectFit: {objectFit} }} />
        </div>
      </motion.div>
    </section>
  )
}

export default ServicesGlobally