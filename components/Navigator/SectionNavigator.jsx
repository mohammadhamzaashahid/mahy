"use client";

import { useEffect, useState } from "react";

export default function SectionNavigator({ sections }) {
  const [active, setActive] = useState(sections[0]?.id || "");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0]?.id;
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          current = s.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  const labelToShow =
    sections.find((s) => s.id === (hovered || active))?.label || "";

  if (!sections.length) return null;

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4">
      <div className="w-px h-6 bg-white/40"></div>

      {sections.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
          className="group relative z-10"
          aria-label={`Go to ${item.label}`}
        >
          <span
            className={`
              block w-px h-6 rounded-full transition-all
              ${active === item.id ? "bg-white w-2" : "bg-white/40"}
            `}
          ></span>

          <span
            className={`
              pointer-events-none absolute right-full mr-4 rounded-full
              border border-white/30 bg-black/40 px-3 py-1 text-[10px]
              font-semibold uppercase tracking-[0.4em] text-white/80 shadow-lg
              transition-all duration-200
              ${hovered === item.id
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2"
              }
            `}
          >
            {item.label}
          </span>
        </button>
      ))}

      <div className="rotate-90 text-xs tracking-[0.3em] uppercase text-white/70 mt-4">
        {labelToShow}
      </div>

      <div className="w-px h-6 bg-white/40"></div>
    </div>
  );
}
