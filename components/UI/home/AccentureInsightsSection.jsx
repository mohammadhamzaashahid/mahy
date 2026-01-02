"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DEFAULT_CARDS = [
  {
    id: 1,
    label: "Announcement",
    title: "Accenture, Anthropic partner to drive enterprise AI innovation and value",
    description:
      "Launching dedicated delivery pods so financial services, health, and energy leaders can operationalize frontier AI responsibly.",
    background: "linear-gradient(150deg,#220048 0%,#5701a6 55%,#8b17ff 100%)",
    accent: "#bb9cff",
    theme: "dark",
  },
  {
    id: 2,
    label: "Research report",
    title: "Rewriting platform strategy for agentic AI",
    description:
      "Agentic AI is reshaping work. To capture value, platforms must reinvent architectures and align AI, platform, and business strategies.",
    layout: "image",
    image: "/gallery/gallery-1.jpg",
    overlayGradient: "linear-gradient(140deg,rgba(0,0,0,0.65),rgba(0,0,0,0.25))",
    accent: "#5df3f8",
    theme: "dark",
  },
  {
    id: 3,
    label: "Blog",
    title: "Rethinking talent strategy",
    description:
      "Design talent marketplaces that keep adaptive learning paths in every squad with capability clouds and AI career coaching.",
    background: "linear-gradient(160deg,#ffd2ff 0%,#d779ff 55%,#9b5aff 100%)",
    accent: "#fff0ff",
    theme: "dark",
  },
  {
    id: 4,
    label: "Perspective",
    title: "The complexity dividend",
    description:
      "Modernize value chains without sacrificing control by orchestrating programmable ecosystems and simulation-grade telemetry.",
    background: "linear-gradient(180deg,#f7f7f7,#fefefe)",
    accent: "#864cff",
    theme: "light",
    media: {
      image: "/gallery/gallery-5.jpg",
      alt: "Organic intelligence illustration",
    },
  },
  {
    id: 5,
    label: "Research report",
    title: "Blueprint for success",
    description:
      "Pragmatic playbooks for first-mover supply chains embracing sensor intelligence, predictive maintenance, and AI copilots.",
    background: "linear-gradient(160deg,#0f0f11,#050505)",
    accent: "#ff8f62",
    theme: "dark",
    media: {
      image: "/gallery/gallery-3.jpg",
      alt: "Engineer reviewing blueprint",
    },
  },
  {
    id: 6,
    label: "Research report",
    title: "Powering sustainable AI",
    description:
      "Quantifies how regenerative infrastructure cuts computing emissions by 42% while maintaining throughput.",
    layout: "image",
    image: "/gallery/gallery-4.jpg",
    overlayGradient: "linear-gradient(145deg,rgba(0,0,0,0.55),rgba(0,0,0,0.1))",
    accent: "#abffa6",
    theme: "dark",
  },
  {
    id: 7,
    label: "Research report",
    title: "Holiday shopping 2025: smarter spending, renewed confidence",
    description:
      "Signals from 60M baskets show how ambient AI nudges are reshaping loyalty in the world’s busiest retail streetscapes.",
    layout: "image",
    image: "/gallery/gallery-2.jpg",
    overlayGradient: "linear-gradient(150deg,rgba(0,0,0,0.7),rgba(0,0,0,0.2))",
    accent: "#ffc5e3",
    theme: "dark",
  },
  {
    id: 8,
    label: "Announcement",
    title: "Accenture, OpenAI accelerate reinvention with advanced AI",
    description:
      "Joint innovation foundries prioritize safety cases, orchestration layers, and certified delivery squads across industries.",
    background: "linear-gradient(150deg,#1a012f,#41006b 40%,#60019b 80%)",
    accent: "#d1b2ff",
    theme: "dark",
  },
];

const getSurfaceStyle = (card) => {
  if (card.layout === "image") {
    return {
      backgroundImage: `${card.overlayGradient ?? "linear-gradient(130deg,rgba(0,0,0,0.65),rgba(0,0,0,0.1))"}, url(${card.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  return {
    background: card.background,
  };
};

export default function AccentureInsightsSection({
  cards = DEFAULT_CARDS,
  eyebrow = "Insights",
  heading = "Hoverable stories that feel as sleek as Accenture",
  description = "GSAP orchestrates the reveal while Lenis keeps the scroll feeling silky. Every card owns its gradient, imagery, and hover narration.",
  className = "",
}) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = cardRefs.current.filter(Boolean);
      if (!nodes.length) return;

      gsap.fromTo(
        nodes,
        { y: 40, opacity: 0, rotateX: -8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [cards.length]);

  const handleHover = (index, entering) => {
    const card = cardRefs.current[index];
    const overlay = overlayRefs.current[index];
    if (!card || !overlay) return;

    gsap.to(card, {
      y: entering ? -18 : 0,
      scale: entering ? 1.01 : 1,
      duration: 0.45,
      ease: entering ? "power3.out" : "power3.inOut",
      boxShadow: entering
        ? "0 35px 80px -45px rgba(0,0,0,0.9)"
        : "0 15px 55px -40px rgba(0,0,0,0.75)",
    });

    if (entering) {
      overlay.style.pointerEvents = "auto";
    }

    gsap.to(overlay, {
      yPercent: entering ? 0 : 110,
      duration: 0.55,
      ease: "power3.out",
      onComplete: () => {
        if (!entering) {
          overlay.style.pointerEvents = "none";
        }
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-[#050505] py-24 text-white ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <p className="text-xs uppercase tracking-[0.55em] text-white/60">
          {eyebrow}
        </p>
        <div className="mt-5 max-w-3xl space-y-4">
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            {heading}
          </h2>
          <p className="text-lg text-white/70">{description}</p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const isLight = card.theme === "light";
            const surfaceStyle = getSurfaceStyle(card);
            const borderColor = isLight
              ? "rgba(12,12,12,0.1)"
              : "rgba(255,255,255,0.15)";

            return (
              <article
                key={card.id}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                onMouseEnter={() => handleHover(index, true)}
                onMouseLeave={() => handleHover(index, false)}
                onFocus={() => handleHover(index, true)}
                onBlur={() => handleHover(index, false)}
                tabIndex={0}
                className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border bg-black/40 text-left shadow-[0_15px_55px_-40px_rgba(0,0,0,0.75)] outline-none transition-[border-color] duration-300 focus-visible:ring-2 focus-visible:ring-white/50"
                style={{
                  ...surfaceStyle,
                  borderColor,
                  color: isLight ? "#0c0c0c" : "#ffffff",
                }}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <span
                      className={`text-[0.65rem] font-semibold uppercase tracking-[0.35em] ${isLight ? "text-neutral-500" : "text-white/80"}`}
                    >
                      {card.label}
                    </span>
                    <h3 className="text-2xl font-semibold leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {card.media ? (
                    <div className="relative h-40 w-full overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0)), url(${card.media.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <span className="relative z-10 m-4 inline-block text-[0.6rem] uppercase tracking-[0.35em] text-white/80">
                        {card.media.alt}
                      </span>
                    </div>
                  ) : (
                    <div className="pb-6" />
                  )}
                </div>

                <div
                  ref={(node) => {
                    overlayRefs.current[index] = node;
                    if (node) {
                      node.style.pointerEvents = "none";
                    }
                  }}
                  className="pointer-events-none absolute inset-0 flex translate-y-[110%] flex-col justify-between rounded-[28px] px-7 pb-7 pt-9"
                  style={{
                    background: isLight ? "rgba(255,255,255,0.96)" : "rgba(0,0,0,0.92)",
                    color: isLight ? "#111" : "#fff",
                  }}
                >
                  <div className="space-y-3">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] opacity-70">
                      {card.label}
                    </span>
                    <h3 className="text-2xl font-semibold leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-80">
                      {card.description}
                    </p>
                  </div>

                  <button
                    className="group inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em]"
                    style={{ color: card.accent ?? (isLight ? "#111" : "#fff") }}
                    type="button"
                    tabIndex={-1}
                  >
                    Expand
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &gt;
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
