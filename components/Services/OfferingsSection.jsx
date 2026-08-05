"use client";

import { motion } from "framer-motion";
import PrimaryButton from "../UI/PrimaryButton";
import Link from "next/link";
import { text } from "d3";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OfferingsSection({
  subheading = "",
  image = null,
  heading = "Our offerings fuel creative",
  texts = [
    "Lorem ipsum dolor sit amet consectetur. Elit sed pulvinar libero id ac lacus mauris purus semper. Nascetur lobortis viverra aliquet cursus.",
  ],
  items = [
    {
      heading: "IT consulting",
      text: "Lorem ipsum dolor sit amet consectetur. Egestas in ipsum vel sit et massa cursus nec. Fermentum pretium risus ipsum.",
      icon: "⚙️",
    },
    {
      heading: "Market analysis",
      text: "Lorem ipsum dolor sit amet consectetur. Egestas in ipsum vel sit et massa cursus nec. Fermentum pretium risus ipsum.",
      icon: "📦",
    },
    {
      heading: "Financial analysis",
      text: "Lorem ipsum dolor sit amet consectetur. Egestas in ipsum vel sit et massa cursus nec. Fermentum pretium risus ipsum.",
      icon: "📊",
    },
  ],
}) {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col ${image ? "justify-between h-full" : ""}`}
          >
            {/* Top Content */}
            <div>
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-tight t-base">
                {heading}
              </h2>

              <h3 className="mt-6 text-[20px] md:text-[24px] lg:text-[28px] font-medium leading-relaxed t-base">
                {subheading}
              </h3>
            </div>

            {/* Bottom Area */}
            <div className={image ? "mt-16 lg:mt-20" : "mt-16"}>
              {image ? (
                <div className="w-full max-w-xl aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={image}
                    alt={heading}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                texts.map((text, i) => (
                  <p
                    key={i}
                    className={`${i !== 0 ? "mt-6" : ""} max-w-xl text-[#526064] leading-relaxed`}
                  >
                    {text}
                  </p>
                ))
              )}
            </div>
            {image && (
              <div className="mt-8">
                {texts.map((text, i) => (
                  <p
                    key={i}
                    className={`${i !== 0 ? "mt-6" : ""} max-w-xl text-[#526064] leading-relaxed`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}
          </motion.div>
          {/* LEFT CONTENT */}
          {/* <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-tight t-base">
              {heading}
            </h2>

            <h3 className="mt-6 text-[20px] md:text-[24px] lg:text-[28px] font-medium leading-relaxed t-base">
              {subheading}
            </h3>


            {texts.map((text, i) => (
              <p
                key={i}
                className="mt-6 max-w-xl text-[#526064] leading-relaxed"
              >
                {text}
              </p>
            ))} */}

          {/* <Link href={"/about-us"}>
              <PrimaryButton
                className={"w-fit mt-8 md:mt-10"}
                label="Learn more about us"
              />
            </Link> */}
          {/* </motion.div> */}

          {/* RIGHT LIST */}
          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#1E2629]">{item.heading}</h3>
                {(item.text || item.description) && (
                  <p className="mt-3 text-[#526064] leading-relaxed">
                    {item.description || item.text}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
