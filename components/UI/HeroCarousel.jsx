"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Button from "@/components/UI/Button";

export default function HeroCarousel({ slides = [], interval = 6000 }) {
  const safeSlides = useMemo(() => slides ?? [], [slides]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!safeSlides.length) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeSlides.length);
    }, interval);

    return () => clearInterval(id);
  }, [safeSlides.length, interval]);

  if (!safeSlides.length) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        No slides available
      </div>
    );
  }

  const active = safeSlides[index];

  const goTo = (target) => {
    setIndex((target + safeSlides.length) % safeSlides.length);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {safeSlides.map((slide, i) => (
        <div
          key={slide.id || i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt={slide.title || ""}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>
      ))}

      <div className="absolute bottom-20 left-6 md:left-20 z-30 max-w-xl select-none">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-lg">
          {active.title}
        </h1>

        {active.subtitle && (
          <p className="mt-4 text-base md:text-lg text-gray-200 max-w-md drop-shadow">
            {active.subtitle}
          </p>
        )}

        {active.cta && (
          <div className="mt-6">
            <Button onClick={active.cta.onClick || (() => {})}>
              {active.cta.label}
            </Button>
          </div>
        )}
      </div>

      <div className="absolute bottom-10 right-10 z-30 flex gap-3">
        {safeSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full shadow-sm transition-all duration-300 ${
              i === index ? "bg-white w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
