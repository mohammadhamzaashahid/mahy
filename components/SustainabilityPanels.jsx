"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function SustainabilityPanels({
  items = [],
  cols = 4,
  className = "",
}) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const [active, setActive] = useState(0);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const panelRefs = useRef([]);
  const trackRef = useRef(null);
  const activeRef = useRef(0);

  const setActiveIndex = useCallback((value) => {
    setActive((prev) => {
      const next = typeof value === "function" ? value(prev) : value;
      activeRef.current = next;
      return next;
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleChange = () => setIsCompactLayout(mediaQuery.matches);

    handleChange();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCompactLayout || safeItems.length <= 1) {
      return;
    }

    const autoplay = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeItems.length);
    }, 6000);

    return () => clearInterval(autoplay);
  }, [isCompactLayout, safeItems.length, setActiveIndex]);

  useEffect(() => {
    if (!isCompactLayout) {
      return;
    }

    const node = panelRefs.current[active];
    if (node && node.scrollIntoView) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [active, isCompactLayout]);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (!isCompactLayout) {
      return;
    }

    const container = trackRef.current;
    if (!container) {
      return;
    }

    let frame = null;

    const syncActive = () => {
      frame = null;
      const { scrollLeft, clientWidth } = container;
      const center = scrollLeft + clientWidth / 2;

      let closestIdx = activeRef.current;
      let closestDistance = Number.POSITIVE_INFINITY;

      panelRefs.current.forEach((node, idx) => {
        if (!node) return;
        const panelCenter = node.offsetLeft + node.offsetWidth / 2;
        const distance = Math.abs(panelCenter - center);
        if (distance < closestDistance) {
          closestIdx = idx;
          closestDistance = distance;
        }
      });

      if (closestIdx !== activeRef.current) {
        setActiveIndex(closestIdx);
      }
    };

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(syncActive);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    syncActive();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [isCompactLayout, safeItems.length, setActiveIndex]);

  const colMap = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const activeItem = safeItems[Math.min(active, safeItems.length - 1)];

  return (
    <section className={`w-full ${className}`}>
      <div className="relative overflow-hidden  bg-black">
        {/* rounded-[32px] */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem?.image || active}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {activeItem?.image && (
                <Image
                  src={activeItem.image}
                  alt={
                    activeItem?.title
                      ? `${activeItem.title} background`
                      : "Sustainability highlight"
                  }
                  fill
                  priority={active === 0}
                  sizes="(min-width: 1280px) 1200px, (min-width: 768px) 90vw, 140vw"
                  className="object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        </div>

        {/* <div
          className={[
            "relative z-10 grid",
            colMap[cols] || colMap[4],
            "min-h-[240px] sm:min-h-[340px] lg:min-h-[420px]",
          ].join(" ")}
        > */}
        {/*

        <div
          className={[
            "relative z-10 grid",
            colMap[cols] || colMap[4],
            "min-h-[300px] sm:min-h-[420px] lg:min-h-[520px] xl:min-h-[580px]",
          ].join(" ")}
        > */}

        <div
          ref={trackRef}
          className="
    relative z-10 flex w-full gap-0 overflow-x-auto px-0
    h-[360px] sm:h-[420px] lg:h-[520px] xl:h-[580px]
    snap-x snap-mandatory sm:gap-4 sm:px-4 lg:gap-0 lg:overflow-visible lg:px-0 lg:snap-none
  "
        >
          {safeItems.map((item, idx) => {
            const isActive = idx === active;

            return (
              <Panel
                key={idx}
                item={item}
                isActive={isActive}
                showDivider={!isCompactLayout && idx !== 0}
                isCompact={isCompactLayout}
                panelRef={(node) => {
                  panelRefs.current[idx] = node;
                }}
                onActivate={() => setActiveIndex(idx)}
              />
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/10" />
      </div>
    </section>
  );
}

function Panel({
  item,
  isActive,
  showDivider,
  onActivate,
  isCompact,
  panelRef,
}) {
  const hasDetails =
    (item?.bullets && item.bullets.length > 0) || !!item?.description;

  return (
    <motion.button
      layout
      type="button"
      className="group relative flex-1 overflow-hidden text-left focus:outline-none flex-[0_0_100%] snap-start sm:flex-[0_0_95%] md:flex-[0_0_90%] lg:flex-1 lg:min-w-0"
      ref={panelRef}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      animate={{
        flexGrow: isCompact ? 1 : isActive ? 2.3 : 1,
      }}
      transition={{
        duration: isCompact ? 0.35 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {showDivider && (
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/25" />
      )}

      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundColor: isActive ? "rgba(0,0,0,0.00)" : "rgba(0,0,0,0.10)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent"
              initial={{ y: 28 }}
              animate={{ y: 0 }}
              exit={{ y: 28 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6 lg:p-8">
        <motion.h6
          layout
          className={[
            "text-white font-semibold tracking-tight drop-shadow-sm",
            "text-[14px] leading-[1.1]",
            "sm:text-[18px]",
            "lg:text-[28px]",
          ].join(" ")}
          animate={{
            y: isActive ? -10 : 0,
            opacity: isActive ? 1 : 0.95,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {item?.title}
        </motion.h6>

        <AnimatePresence>
          {isActive && hasDetails && (
            <motion.div
              layout
              initial={{
                opacity: 0,
                y: 22,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: 18,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
              className="max-w-[520px] max-h-[220px] overflow-y-auto pr-1 sm:max-h-none sm:overflow-visible sm:pr-0"
            >
              {item?.description && (
                <p className="text-white/90 text-sm sm:text-[15px] lg:text-[16px] leading-relaxed">
                  {item.description}
                </p>
              )}

              {item?.bullets?.length > 0 && (
                <ul className="mt-3 space-y-2 text-white/90 text-sm sm:text-[15px] lg:text-[16px] leading-relaxed">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[0.55em] h-[5px] w-[5px] shrink-0 rounded-full bg-white/85" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="h-2 sm:h-3" />
      </div>
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  );
}
