"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { motion } from "framer-motion";

export default function HistoryTimeline({ title = "", items = [] }) {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);

  //   const [isActive, setIsActive] = useState(false);

  const [isPinned, setIsPinned] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const green = "var(--accent-color)";
  const accentLight = "var(--accent-color)";

  const lightGreen = "rgba(34,197,94,0.22)";

  const words = useMemo(() => {
    const parts = String(title).trim().split(" ");
    if (parts.length <= 1) return { first: title, rest: "" };
    return { first: parts[0], rest: parts.slice(1).join(" ") };
  }, [title]);

  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  const recomputeProgress = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max <= 0 ? 1 : el.scrollLeft / max;
    const done = p >= 0.985;
    setProgress(clamp01(p));
    setIsCompleted(done);
  }, []);

  //  useEffect(() => {
  //   const el = sectionRef.current;
  //   if (!el) return;

  //   const onScroll = () => {
  //     const rect = el.getBoundingClientRect();
  //     const vh = window.innerHeight;

  //     const fullyVisible =
  //       rect.top <= 0 &&
  //       rect.bottom >= vh;

  //     setIsActive(fullyVisible);
  //   };

  //   onScroll(); // initial check
  //   window.addEventListener("scroll", onScroll, { passive: true });

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      if (isPinned) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const fullyVisible = rect.top <= 0 && rect.bottom >= vh;

      if (fullyVisible) {
        setIsPinned(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isPinned]);

  useEffect(() => {
    // const shouldLock = isActive && !isCompleted;
    // const shouldLock = isPinned && !isCompleted;
    const shouldLock = !isMobile && isPinned && !isCompleted;

    const prevOverflow = document.body.style.overflow;
    const prevOverscroll = document.body.style.overscrollBehavior;

    if (shouldLock) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
    } else {
      document.body.style.overflow = prevOverflow || "";
      document.body.style.overscrollBehavior = prevOverscroll || "";
    }

    return () => {
      document.body.style.overflow = prevOverflow || "";
      document.body.style.overscrollBehavior = prevOverscroll || "";
    };
    //   }, [isActive, isCompleted]);
  }, [isPinned, isCompleted]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let velocity = 0;
    let rafId = null;

    const animate = () => {
      if (Math.abs(velocity) < 0.1) {
        velocity = 0;
        rafId = null;
        return;
      }
      el.scrollLeft += velocity;
      velocity *= 0.92;
      rafId = requestAnimationFrame(animate);
    };

    const onWheel = (e) => {
      //   if (!(isActive && !isCompleted)) return;
      if (isMobile || !(isPinned && !isCompleted)) return;

      e.preventDefault();

      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      velocity += delta * 0.85;

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
    //   }, [isActive, isCompleted]);
  }, [isPinned, isCompleted]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    recomputeProgress();
    const onScroll = () => recomputeProgress();
    const onResize = () => recomputeProgress();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [recomputeProgress]);

  const scrollToProgress = useCallback((p01) => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: max * clamp01(p01), behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isCompleted) {
      setIsPinned(false);
    }
  }, [isCompleted]);
  const onScrubPointerDown = useCallback((e) => {
    const rail = e.currentTarget;
    const move = (clientX) => {
      const rect = rail.getBoundingClientRect();
      const x = clientX - rect.left;
      const p = x / rect.width;
      const el = scrollerRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      el.scrollLeft = max * clamp01(p);
    };

    const onMove = (ev) => {
      move(ev.touches ? ev.touches[0].clientX : ev.clientX);
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };

    move(e.touches ? e.touches[0].clientX : e.clientX);

    window.addEventListener("mousemove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
  }, []);

  const panels = useMemo(() => {
    return items.map((it, idx) => ({ ...it, _idx: idx }));
  }, [items]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="mx-auto max-w-[1000px] px-5 md:px-10 pt-2 md:pt-0">
        <h2
          className="
    text-[44px]
    leading-[1.05]
    md:text-[72px]
    font-semibold
    tracking-tight
    text-left
    md:text-center
  "
        >
          <span style={{ color: green }}>{words.first}</span>{" "}
          <span className="text-black">{words.rest}</span>
        </h2>
      </div>

      <div className="relative mt-6 md:mt-10">
        {isMobile ? (
          <MobileTimeline items={items} green={green} />
        ) : (
          <>
            {!isMobile && (
              <div className="pointer-events-none absolute inset-0">
                <CurveBackdrop stroke={accentLight} progress={progress} />
              </div>
            )}

            <div
              ref={scrollerRef}
              className="
          relative
          mx-auto
          max-w-[1600px]
          px-5 md:px-10
          overflow-x-auto
          overflow-y-hidden
          [scrollbar-width:none]
        "
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="relative flex w-max items-stretch gap-10 md:gap-16 py-12 md:py-16">
                {panels.map((it, i) => (
                  //   <TimelinePanel
                  //     key={`${it.year}-${it.title}-${i}`}
                  //     item={it}
                  //     index={i}
                  //     green={green}
                  //   />

                  <TimelinePanel
                    key={`${it.year}-${it.title}-${i}`}
                    item={it}
                    index={i}
                    green={green}
                    progress={progress}
                    total={panels.length}
                  />
                ))}
                <div className="w-[30vw] md:w-[38vw]" />
              </div>
            </div>

            {!isMobile && (
              <div className="mx-auto max-w-[1600px] px-5 md:px-10 pb-10 md:pb-12">
                <Ruler
                  green={green}
                  progress={progress}
                  onRailClick={(p) => scrollToProgress(p)}
                  onPointerDown={onScrubPointerDown}
                  years={deriveYears(items)}
                />
              </div>
            )}
          </>
        )}
      </div>

      <div className="sr-only" aria-live="polite">
        {isCompleted ? "Timeline completed" : "Timeline in progress"}
      </div>
    </section>
  );
}

function TimelinePanel({ item, index, green, progress, total }) {
  const offsets = [
    "mt-10 md:mt-0",
    "mt-16 md:mt-6",
    "mt-8  md:mt-0",
    "mt-14 md:mt-4",
    "mt-10 md:mt-2",
  ];
  const mt = offsets[index % offsets.length];

  const revealAt = index / total;
  const isVisible = progress >= revealAt - 0.15;

  return (
    <motion.article
      className={`relative w-[78vw] sm:w-[58vw] md:w-[460px] lg:w-[520px] ${mt}`}
      initial={{ opacity: 0, y: 18 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mb-4 flex items-center gap-3">
        <StarMarker color={green} />
        <div className="text-sm text-black/70">{item.year}</div>
      </div>

      <h3 className="text-xl md:text-[22px] font-semibold text-black">
        {item.title}
      </h3>

      {item.subtitle ? (
        <div className="mt-1 text-sm text-black/60">{item.subtitle}</div>
      ) : null}

      <ul className="mt-4 max-w-[46ch] space-y-2 text-[15px] leading-7 text-black/65">
        {Array.isArray(item.description) &&
          item.description.map((line, idx) => (
            <li key={idx} className="relative pl-4">
              <span
                className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full"
                style={{ background: green }}
              />
              {line}
            </li>
          ))}
      </ul>
    </motion.article>
  );
}

function StarMarker({ color }) {
  return (
    <span className="relative inline-flex h-5 w-5 items-center justify-center">
      <span
        className="absolute h-[14px] w-[14px] rotate-45 rounded-[3px]"
        style={{ background: color }}
      />
      <span
        className="absolute h-[14px] w-[14px] rounded-[3px]"
        style={{ background: color }}
      />
    </span>
  );
}

function CurveBackdrop({ stroke, progress }) {
  const pathLength = 1;

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1600 650"
      preserveAspectRatio="none"
    >
      {/* better stroke */}
      <motion.path
        d="M-60,420
           C 240,560 420,520 620,380
           C 840,230 990,120 1220,170
           C 1440,215 1520,350 1670,300"
        fill="none"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={pathLength}
        strokeDasharray={pathLength}
        strokeDashoffset={1 - progress}
        initial={{ strokeDashoffset: 1 }}
        animate={{ strokeDashoffset: 1 - progress }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </svg>
  );
}

function Ruler({ green, progress, onRailClick, onPointerDown, years }) {
  return (
    <div className="relative">
      <div className="relative mt-2 h-10">
        <div className="absolute left-0 right-0 top-0 flex items-end gap-[6px] opacity-80">
          {Array.from({ length: 160 }).map((_, i) => (
            <span
              key={i}
              className="block w-[2px] rounded-full bg-black/15"
              style={{
                height: i % 10 === 0 ? 22 : i % 5 === 0 ? 16 : 10,
              }}
            />
          ))}
        </div>
        <div
          className="absolute left-0 right-0 top-0 h-10 cursor-pointer"
          onMouseDown={onPointerDown}
          onTouchStart={onPointerDown}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const p = (e.clientX - rect.left) / rect.width;
            onRailClick(p);
          }}
        />

        <div
          className="absolute top-[6px] -translate-x-1/2"
          style={{ left: `${progress * 100}%` }}
        >
          <div
            className="
              flex h-9 w-14 items-center justify-center
              rounded-full
              shadow-[0_10px_25px_rgba(0,0,0,0.08)]
            "
            style={{ background: green }}
          >
            <span className="text-white text-lg leading-none select-none">
              ← →
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-black/55">
        {years.map((y) => (
          <span key={y} className="tracking-wide">
            {y}
          </span>
        ))}
      </div>
    </div>
  );
}

function deriveYears(items) {
  return items.map((item) => item.year);
}

function MobileTimeline({ items, green }) {
  return (
    <div className="mx-auto max-w-[640px] px-6 pb-12">
      <ul className="space-y-14 border-l border-black/15 pl-7">
        {" "}
        {items.map((item, idx) => (
          <li key={idx} className="relative pl-6">
            <span
              className="absolute left-[-14px] top-[6px] h-3.5 w-3.5 rounded-full"
              style={{ background: green }}
            />

            <div className="text-sm font-medium text-black/70">{item.year}</div>

            <h3 className="mt-1 text-lg font-semibold text-black">
              {item.title}
            </h3>

            <div className="mt-3 max-w-[42ch] text-[15px] leading-7 text-black/65">
              {item.description?.join(" ")}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
