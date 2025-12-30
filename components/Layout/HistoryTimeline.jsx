"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clamp01 = (value) => Math.max(0, Math.min(1, value));

export default function HistoryTimeline({ title = "", items = [] }) {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;
    if (!sectionRef.current || !scrollerRef.current) return;

    const section = sectionRef.current;
    const scroller = scrollerRef.current;
    const distance = () =>
      Math.max(scroller.scrollWidth - scroller.clientWidth, 0);

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + (distance() || window.innerHeight * 0.5),
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const max = distance();
          const left = max * self.progress;
          scroller.scrollLeft = left;
          const ratio = max <= 0 ? 1 : left / max;
          setProgress(clamp01(ratio));
        },
      });

      scrollTriggerRef.current = trigger;
    }, section);

    return () => {
      scrollTriggerRef.current?.kill();
      scrollTriggerRef.current = null;
      ctx.revert();
    };
  }, [isMobile, items.length]);

  const scrollToProgress = useCallback((value) => {
    if (isMobile) return;
    const trigger = scrollTriggerRef.current;
    if (!trigger) return;
    const start = trigger.start;
    const end = trigger.end;
    const target = start + (end - start) * clamp01(value);
    window.scrollTo({ top: target, behavior: "smooth" });
  }, [isMobile]);

  const palette = {
    accent: "var(--accent-color)",
    heading: "#0b1220",
    subheading: "#6c778c",
  };

  const words = splitTitle(title);
  const panels = useMemo(
    () => items.map((entry, index) => ({ ...entry, _idx: index })),
    [items]
  );
  const timelineProgress = isMobile ? 1 : progress;

  return (
    <section
      dir="ltr"
      ref={sectionRef}
      className="relative w-full bg-white text-slate-900"
    >
      <div className="mx-auto max-w-[1000px] px-5 md:px-10 pt-14 md:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          Our Journey
        </p>
        <h2 className="text-[34px] md:text-[58px] leading-tight font-semibold mt-3 text-center md:text-left">
          <span style={{ color: palette.accent }}>{words.first}</span>{" "}
          <span style={{ color: palette.heading }}>{words.rest}</span>
        </h2>
      </div>

      <div className="relative mt-10 md:mt-12">
        {isMobile ? (
          <MobileTimeline items={items} accent={palette.accent} />
        ) : (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-6 hidden lg:block">
              <CurveBackdrop progress={timelineProgress} stroke={palette.accent} />
            </div>

            <div
              ref={scrollerRef}
              className="
                relative
                mx-auto
                max-w-[1600px]
                px-5 md:px-10
                overflow-hidden
              "
            >
              <div className="relative flex w-max gap-10 md:gap-16 py-10 md:py-14">
                {panels.map((panel, index) => (
                  <TimelinePanel
                    key={`${panel.year}-${index}`}
                    item={panel}
                    index={index}
                    progress={timelineProgress}
                    total={panels.length}
                    accent={palette.accent}
                  />
                ))}
                <div className="w-[28vw]" aria-hidden />
              </div>
            </div>

            <div className="mx-auto max-w-[1600px] px-5 md:px-10 pb-14 md:pb-16">
              <Ruler
                progress={timelineProgress}
                years={deriveYears(items)}
                onRailClick={scrollToProgress}
                accent={palette.accent}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function TimelinePanel({ item, index, progress, total, accent }) {
  const offsets = ["translate-y-0", "translate-y-5", "-translate-y-3"];
  const revealAt = total <= 1 ? 0 : index / (total - 1);
  const isVisible = progress >= revealAt - 0.15;

  return (
    <motion.article
      className={`relative w-[78vw] sm:w-[58vw] md:w-[450px] lg:w-[520px] rounded-[28px] border border-slate-100 bg-white/95 p-6 md:p-7 shadow-[0_25px_70px_rgba(10,16,34,0.08)] transition-transform duration-500 ${offsets[index % offsets.length]}`}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
        <StarMarker color={accent} />
        {item.year}
      </div>

      <h3 className="text-lg md:text-[22px] font-semibold text-slate-900">
        {item.title}
      </h3>

      {item.subtitle ? (
        <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
      ) : null}

      <ul className="mt-4 space-y-2 text-[14px] md:text-[15px] leading-6 text-slate-600">
        {Array.isArray(item.description)
          ? item.description.map((line, idx) => (
              <li key={idx} className="relative pl-4">
                <span
                  className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full"
                  style={{ background: accent }}
                />
                {line}
              </li>
            ))
          : item.description && <li>{item.description}</li>}
      </ul>
    </motion.article>
  );
}

function StarMarker({ color }) {
  return (
    <span className="relative inline-flex h-5 w-5 items-center justify-center">
      <span
        className="absolute h-3.5 w-3.5 rotate-45 rounded-[3px]"
        style={{ background: color }}
      />
      <span
        className="absolute h-3.5 w-3.5 rounded-[3px]"
        style={{ background: color }}
      />
    </span>
  );
}

function CurveBackdrop({ stroke, progress }) {
  return (
    <svg
      className="mx-auto block h-[380px] w-full"
      viewBox="0 0 1600 300"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M-80,220
           C 120,90 360,110 540,210
           C 760,330 920,340 1100,230
           C 1340,100 1500,140 1850,250"
        fill="none"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        initial={{ strokeDashoffset: 1 }}
        animate={{ strokeDashoffset: 1 - progress }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </svg>
  );
}

function Ruler({ years, progress, onRailClick, accent }) {
  const activeYear =
    years[Math.min(years.length - 1, Math.round(progress * (years.length - 1)))] ||
    "";

  return (
    <div className="relative">
      <div className="relative mt-2 h-12">
        <div className="absolute inset-x-0 top-0 flex items-end gap-[6px] opacity-70">
          {Array.from({ length: 140 }).map((_, index) => (
            <span
              key={index}
              className="block w-[2px] rounded-full bg-slate-200"
              style={{
                height: index % 10 === 0 ? 24 : index % 5 === 0 ? 16 : 10,
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-x-0 top-0 h-12 cursor-pointer"
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            onRailClick((event.clientX - rect.left) / rect.width);
          }}
        />

        <div
          className="absolute top-[4px] -translate-x-1/2"
          style={{ left: `${progress * 100}%` }}
        >
          <div
            className="flex h-12 w-20 items-center justify-center rounded-full text-sm font-semibold text-white shadow-[0_10px_25px_rgba(15,23,42,0.15)]"
            style={{ background: accent }}
          >
            {activeYear}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
        {years.map((year) => (
          <span key={year}>{year}</span>
        ))}
      </div>
    </div>
  );
}

function MobileTimeline({ items, accent }) {
  return (
    <div className="mx-auto max-w-[640px] px-5 pb-14">
      <ul className="space-y-12 border-l border-slate-200 pl-6">
        {items.map((item, index) => (
          <li key={`${item.year}-${index}`} className="relative pl-5">
            <span
              className="absolute left-[-10px] top-[12px] h-3 w-3 rounded-full"
              style={{ background: accent }}
            />
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              {item.year}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              {Array.isArray(item.description)
                ? item.description.join(" ")
                : item.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function deriveYears(items) {
  return items.map((item) => item.year);
}

function splitTitle(value) {
  const parts = value.trim().split(" ");
  if (parts.length <= 1) return { first: value, rest: "" };
  return { first: parts.shift(), rest: parts.join(" ") };
}
