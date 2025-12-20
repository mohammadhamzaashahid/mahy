"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

export default function SectionNavigator({ sections = [] }) {
  const [active, setActive] = useState(sections[0]?.id || "");
  const [hovered, setHovered] = useState(null);
  const observerRef = useRef(null);
  const locale = useLocale();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const displayId = hovered || active;
  const labelToShow =
    sections.find((s) => s.id === displayId)?.label || "";

  return (
    <div className={`fixed ${locale === "ar" ? "left-10" : "right-10"} top-1 /2 - translate - y - 1 / 2 z - 40 hidden md:flex flex - col items - center gap - 4`}>

      <div className="w-px h-6 bg-white/40" />

      {sections.map((item) => {
        const isActive = active === item.id;
        const isHovered = hovered === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex items-center"
          >
            <span className="relative h-6 w-2 flex items-center justify-center">
              <span
                className={`
                  absolute inset - y - 0 left - 1 / 2 - translate - x - 1 / 2
  rounded - full bg - white transition - transform duration - 300 ease - out
                  ${isActive || isHovered ? "scale-x-100" : "scale-x-[0.25]"}
  `}
                style={{ width: "2px" }}
              />
            </span>
            <span
              className={`
  pointer - events - none absolute right - full mr - 4
  rounded - full border border - white / 30 bg - black / 50
  px - 3 py - 1 text - [10px] font - semibold uppercase
  tracking - [0.4em] text - white / 80 backdrop - blur - sm
  transition - all duration - 300
                ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}
  `}
            >
              {item.label}
            </span>
          </button>
        );
      })}

      <div className="rotate-90 text-xs tracking-[0.3em] uppercase text-white/80 mt-4">
        {labelToShow}
      </div>

      <div className="w-px h-6 bg-white/40" />
    </div>
  );
}
