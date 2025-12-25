"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";

export default function ManufacturingNetworkMap() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  const networkPins = useMemo(
    () => [
      { lon: 55.296249, lat: 25.276987, label: "Dubai, UAE" },
      { lon: 39.1911, lat: 21.4858, label: "Jeddah, Saudi Arabia" },
      { lon: 77.209, lat: 28.6139, label: "New Delhi, India" },
      { lon: 103.8198, lat: 1.3521, label: "Singapore" },
      { lon: 51.389, lat: 25.2854, label: "Doha, Qatar" },
    ],
    []
  );
  const primaryPin = networkPins[0];

  const dotStep = 8;
  const dotRadius = 2.1;
  const baseDot = "#d4d7dd";
  const activeDot = "#2D69FF";
  const waveInterval = 5000;
  const waveDuration = 2600;
  const pulseDuration = 2600;
  const pulseStagger = 360;

  const baseWidth = 1600;
  const baseHeight = 700;

  const [canvasSize, setCanvasSize] = useState({
    width: baseWidth,
    height: baseHeight,
  });

  const [isPinHovered, setIsPinHovered] = useState(false);
  const pointsRef = useRef([]);
  const pinPxRef = useRef([0, 0]);
  const pinPixelsRef = useRef([]);
  const animRef = useRef({ raf: null, start: 0 });
  const hoverStateRef = useRef(false);
  const controlsRef = useRef({ start: () => {}, stop: () => {} });
  const worldDataRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const recalc = () => {
      const rect = wrap.getBoundingClientRect();
      const width = rect.width || baseWidth;
      const height =
        rect.height && rect.height > 0
          ? rect.height
          : Math.max(300, (width / baseWidth) * baseHeight * 0.65);

      setCanvasSize((prev) => {
        if (
          Math.abs(prev.width - width) < 1 &&
          Math.abs(prev.height - height) < 1
        ) {
          return prev;
        }

        return { width, height };
      });
    };

    recalc();
    const observer = new ResizeObserver(recalc);
    observer.observe(wrap);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = Math.max(360, canvasSize.width || baseWidth);
    const height =
      canvasSize.height || Math.max(320, (width / baseWidth) * baseHeight);

    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const scaleFactor = width / baseWidth;
    const renderRadius = Math.min(3, Math.max(1.5, dotRadius * scaleFactor));
    const spacing = Math.max(5.2, dotStep * scaleFactor);
    const projection = geoNaturalEarth1()
      .scale(350 * scaleFactor)
      .translate([width * 0.52, height * 0.56]);
    const path = geoPath(projection);
    let destroyed = false;

    function drawFrame(waveRadius, pulseProgress = []) {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(1, "#f7f9ff");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const pts = pointsRef.current;

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        let color = baseDot;

        if (waveRadius !== null) {
          const edge = 0.06;
          const t = (waveRadius - p.dist) / edge;

          if (t >= 1) {
            color = activeDot;
          } else if (t > 0) {
            ctx.globalAlpha = 0.25 + 0.75 * t;
            ctx.beginPath();
            ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
            ctx.fillStyle = activeDot;
            ctx.fill();
            ctx.globalAlpha = 1;
            continue;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      const pinPixels = pinPixelsRef.current;
      const [mainPx = 0, mainPy = 0] = pinPxRef.current;

      if (mainPx && mainPy) {
        const labelFontSize = Math.max(13, Math.min(18, width / 95));
        ctx.font = `600 ${labelFontSize}px 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial`;
        ctx.fillStyle = "#111827";
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText(primaryPin.label, mainPx - 16, mainPy - 34);

        ctx.beginPath();
        ctx.moveTo(mainPx - 12, mainPy - 34);
        ctx.lineTo(mainPx, mainPy - 34);
        ctx.lineTo(mainPx, mainPy);
        ctx.strokeStyle = activeDot;
        ctx.lineWidth = 1.3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mainPx, mainPy, 12, 0, Math.PI * 2);
        ctx.strokeStyle = activeDot;
        ctx.lineWidth = 2.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mainPx, mainPy, 4.6, 0, Math.PI * 2);
        ctx.fillStyle = activeDot;
        ctx.fill();

        pulseProgress.forEach((progress) => {
          const radius = 18 + progress * 48;
          const alpha = 0.4 * (1 - progress);
          ctx.beginPath();
          ctx.arc(mainPx, mainPy, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(45,105,255,${alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }

      pinPixels.forEach((coords, idx) => {
        if (!coords || idx === 0) return;
        const [px, py] = coords;

        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(45,105,255,0.35)";
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(px, py, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = activeDot;
        ctx.fill();
      });
    }

    function loop(now) {
      if (destroyed) return;
      if (!hoverStateRef.current) {
        if (animRef.current.raf) {
          cancelAnimationFrame(animRef.current.raf);
          animRef.current.raf = null;
        }
        animRef.current.start = 0;
        drawFrame(null);
        return;
      }

      if (!pointsRef.current.length) {
        animRef.current.raf = requestAnimationFrame(loop);
        return;
      }

      if (!animRef.current.start) animRef.current.start = now;

      const elapsed = now - animRef.current.start;
      const cycle = elapsed % waveInterval;

      const waveActive = cycle <= waveDuration;
      const eased = waveActive
        ? 1 - Math.pow(1 - cycle / waveDuration, 3)
        : null;
      const waveRadius = eased !== null ? eased * Math.PI : null;

      const pulseProgress = [];
      for (let i = 0; i < 2; i++) {
        const offset = cycle - i * pulseStagger;
        if (offset < 0 || offset > pulseDuration) continue;
        pulseProgress.push(offset / pulseDuration);
      }

      drawFrame(waveRadius, pulseProgress);
      animRef.current.raf = requestAnimationFrame(loop);
    }

    function startAnimation() {
      if (animRef.current.raf || !hoverStateRef.current) return;
      animRef.current.start = 0;
      animRef.current.raf = requestAnimationFrame(loop);
    }

    function stopAnimation() {
      if (animRef.current.raf) {
        cancelAnimationFrame(animRef.current.raf);
        animRef.current.raf = null;
      }
      animRef.current.start = 0;
      drawFrame(null);
    }

    controlsRef.current = { start: startAnimation, stop: stopAnimation };

    function handleMove(e) {
      const rect = canvas.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * width;
      const my = ((e.clientY - rect.top) / rect.height) * height;
      const [px, py] = pinPxRef.current;
      const hitRadius = 34 * (width / baseWidth);
      const hit = Math.hypot(mx - px, my - py) <= hitRadius;
      setIsPinHovered(hit);
    }

    function handleLeave() {
      setIsPinHovered(false);
    }

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);

    async function loadWorld() {
      if (worldDataRef.current) return worldDataRef.current;
      const data = await fetch(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
      ).then((r) => r.json());
      worldDataRef.current = data;
      return data;
    }

    (async () => {
      const world = await loadWorld();
      if (destroyed) return;

      const land = feature(world, world.objects.countries);
      pinPxRef.current = projection([primaryPin.lon, primaryPin.lat]);
      pinPixelsRef.current = networkPins.map((pin) =>
        projection([pin.lon, pin.lat])
      );

      const pts = [];
      for (const f of land.features) {
        const bounds = path.bounds(f);

        for (let x = bounds[0][0]; x < bounds[1][0]; x += spacing) {
          for (let y = bounds[0][1]; y < bounds[1][1]; y += spacing) {
            const lonlat = projection.invert([x, y]);
            if (!lonlat) continue;
            if (!d3.geoContains(f, lonlat)) continue;

            pts.push({
              x,
              y,
              dist: d3.geoDistance(lonlat, [primaryPin.lon, primaryPin.lat]),
            });
          }
        }
      }

      pointsRef.current = pts;
      drawFrame(null);
    })();

    return () => {
      destroyed = true;
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      if (animRef.current.raf) cancelAnimationFrame(animRef.current.raf);
    };
  }, [primaryPin, networkPins, canvasSize]);

  useEffect(() => {
    hoverStateRef.current = isPinHovered;
    if (isPinHovered) {
      controlsRef.current.start();
    } else {
      controlsRef.current.stop();
    }
  }, [isPinHovered]);

  return (
    <section className="py-16 sm:py-20 bg-[#F1F4FA]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white rounded-[32px] sm:rounded-[38px] shadow-[0_20px_70px_rgba(15,23,42,0.08)] px-5 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,430px)_1fr] items-center gap-10 lg:gap-16">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#1C4C9A]">
                Connected Presence
              </p>
              <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[40px] font-semibold leading-tight text-gray-900">
                Our Networks Centre
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-7 text-gray-600 max-w-xl mx-auto lg:mx-0">
                Anchored in Dubai, our manufacturing network spans the Middle
                East and Asia through authorized plants and logistics partners,
                keeping production nimble and supply chains responsive for every
                market we serve.
              </p>
            </div>
            <div
              ref={wrapRef}
              className="order-1 lg:order-2 relative w-full h-[320px] sm:h-[400px] lg:h-[520px] xl:h-[580px] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] bg-[#F8FAFF]"
            >
              <canvas
                ref={canvasRef}
                className="absolute inset-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
