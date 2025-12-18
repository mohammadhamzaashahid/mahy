import { useEffect, useRef, useState } from "react";
import NarrativeCard from "./NarrativeCard";


const SECTIONS = [
  {
    title: "Customer Experience",
    subtitle:
      "Deliver a triple play of results: happier customers, employees and shareholders",
    bullets: ["An insurgent mindset", "Integrated innovation"],
    image: "/processes/UAE.avif",
  },
  {
    title: "People & Organization",
    subtitle:
      "Accelerate your organization’s results through your people and teams",
    bullets: ["Passion & Commitment", "Honesty & Openness"],
    image: "/processes/manufacturer.avif",
  },
  {
    title: "Business Strategy",
    subtitle:
      "Deliver a triple play of results: happier customers, employees and shareholders",
    bullets: ["Corporate Strategy and Finance", "Innovation & Business Building"],
    image: "/processes/customer-service.avif",
  },
];


export default function ScrollNarrativePane({ onActiveChange }) {
  const sectionRefs = useRef([]);
  const scrollRootRef = useRef(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });


  useEffect(() => {
    if (!scrollRootRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            onActiveChange(index);
          }
        });
      },
      {
        root: scrollRootRef.current,
        threshold: 0.6,
      }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [onActiveChange]);


  return (
    <div
      ref={scrollRootRef}
      className="
    relative
    lg:h-screen
    lg:overflow-y-auto
    hide-scrollbar
  "
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursor({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          active: true,
        });
      }}
      onMouseLeave={() =>
        setCursor((c) => ({ ...c, active: false }))
      }
    >
      <div className="h-full snap-y snap-mandatory space-y-4 lg:space-y-0">
        {SECTIONS.map((section, index) => (
          <section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-index={index}
            className="
    min-h-[auto]
    lg:min-h-screen
    flex
    items-center
    snap-start
    px-6
    md:px-12
    lg:px-20
    py-20
    lg:py-0
    border-b border-white/10
  "
          >
            <NarrativeCard {...section} cursor={cursor} />
          </section>
        ))}
      </div>
    </div>
  );
}
