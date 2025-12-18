"use client"
import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";

const sections = [
  { id: "home", label: "Home", lightBg: false },
  { id: "about", label: "About", lightBg: true },
  { id: "gallery", label: "Gallery", lightBg: false },
  { id: "partners", label: "Partners", lightBg: true },
  { id: "enterprise", label: "Enterprise", lightBg: false },
  { id: "after-sales", label: "After Sales", lightBg: true },
  { id: "why-us", label: "Why Us", lightBg: false },
];

export default function FloatingMenu() {
  const [active, setActive] = useState(null);
  const isActiveLightBg = sections.find((s) => s.id === active)?.lightBg;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="hidden lg:block fixed bottom-25 lg:right-20 space-y-4 z-30">
      {sections.map((s) => (
        <li key={s.id} className="group">
          <a
            href={`#${s.id}`}
            className={`flex items-center justify-end gap-2 text-xs font-bold uppercase w-30 ${isActiveLightBg ? "t-base t-base-hover" : "text-gray-200 hover:text-white"}`}
          >
            {active !== s.id && <FiMinus className="group-hover:opacity-0 absolute" />}
            <span
              className={`transition-opacity opacity-0 group-hover:opacity-100 ${active === s.id ? "opacity-100" : ""
                }`}
            >
              {s.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}