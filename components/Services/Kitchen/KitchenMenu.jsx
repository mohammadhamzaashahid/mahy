"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { object } from "zod";

function KitchenMenu({
  heading = "Services",
  text,
  text2,
  items = [
    {
      title: "Strategic Visionaries",
      text: "We start by understanding your business at its core. Ourteam of seasoned consultants collaborates with you to craft a strategic vision that aligns with your goals.",
      image:
        "/assets/fusion-03-pg30_qsuufj.jpg",
      objectFit: "cover",
    },
    {
      title: "Customized Solutions",
      text: "No two businesses are alike, and we recognize that. Our team develops bespoke solutions tailored to your specific needs.",
      image:
        "/assets/collezioni-frida-03-pg129_qhzqdu.jpg",
      objectFit: "cover",
    },
    {
      title: "Collaborative Execution",
      text: "We start by understanding your business at its core. Ourteam of seasoned consultants collaborates with you to craft a strategic vision that aligns with your goals.",
      image:
        "/assets/collezioni-opera-02-pg199_vbgmzu.jpg",
      objectFit: "cover",
    },
  ],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-5 py-6 md:py-8">
      <h1 className="t-base font-bold text-3xl text-center md:text-start">
        {heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-10">
        <div className="md:col-span-4">
          <p className="mt-3 text-gray-600 text-center md:text-start">{text}</p>
          {text2 && (
            <p className="mt-3 text-gray-600 text-center md:text-start mb-2 md:mb-8">
              {text2}
            </p>
          )}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative w-full h-110 md:h-160 mt-6"
              >
                <Image
                  src={items[currentIndex].image}
                  alt=""
                  fill
                  style={{ objectFit: items[currentIndex].objectFit || "cover" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-5 md:space-y-8 md:col-span-5">
          {items.map((item, i) => (
            <button
              key={i}
              className={`${i === currentIndex ? "bg-slate-500 text-white" : "bg-slate-100 text-gray-400"} p-8 flex gap-6 relative 
                        group w-full transition-all duration-500`}
              onClick={() => setCurrentIndex(i)}
            >
              <span className="text-4xl font-semibold">0{i + 1}</span>
              <div className="text-start">
                {item.title && (
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                )}
                <p>{item.text}</p>
              </div>
              <div
                className={`absolute left-0 top-0 bottom-0 w-2.5 group-hover:bg-slate-700 ${i === currentIndex && "bg-slate-700"} transition-all duration-500`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KitchenMenu;
