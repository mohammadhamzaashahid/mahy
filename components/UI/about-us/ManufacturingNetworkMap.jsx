"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";

export default function ManufacturingNetworkMap() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  // Highlight location (Dubai)
  const pin = useMemo(
    () => ({ lon: 55.296249, lat: 25.276987, label: "Dubai, UAE" }),
    []
  );

  // Visual tuning
  const dotStep = 8;
  const dotRadius = 2;
  const baseDot = "#9a9da1";
  const activeDot = "#356CFF";
  const waveInterval = 5000;
  const waveDuration = 2600;
  const pulseDuration = 3200;
  const pulseStagger = 380;

  const canvasWidth = 1600;
  const canvasHeight = 700;

  const [isPinHovered, setIsPinHovered] = useState(false);
  const pointsRef = useRef([]);
  const pinPxRef = useRef([0, 0]);
  const animRef = useRef({ raf: null, start: 0 });
  const hoverStateRef = useRef(false);
  const hoverWaveStartRef = useRef(null);
  const controlsRef = useRef({ start: () => {}, stop: () => {} });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const projection = geoNaturalEarth1()
      .scale(350)
      .translate([canvasWidth * 0.52, canvasHeight * 0.56]);

    const path = geoPath(projection);
    let destroyed = false;

    function drawFrame(waveRadius, pulseProgress = []) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

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
            ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = activeDot;
            ctx.fill();
            ctx.globalAlpha = 1;
            continue;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      // Pin + label
      const [px, py] = pinPxRef.current;

      ctx.font =
        "600 16px 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial";
      ctx.fillStyle = "#111827";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(pin.label, px - 14, py - 38);

      // connector
      ctx.beginPath();
      ctx.moveTo(px - 10, py - 38);
      ctx.lineTo(px, py - 38);
      ctx.lineTo(px, py);
      ctx.strokeStyle = activeDot;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ring
      ctx.beginPath();
      ctx.arc(px, py, 11, 0, Math.PI * 2);
      ctx.strokeStyle = activeDot;
      ctx.lineWidth = 2.4;
      ctx.stroke();

      // inner dot
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fillStyle = activeDot;
      ctx.fill();

      // soft halo pulses
      pulseProgress.forEach((progress) => {
        const radius = 18 + progress * 42;
        const alpha = 0.4 * (1 - progress);
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(53,108,255,${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
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
      const mx = ((e.clientX - rect.left) / rect.width) * canvasWidth;
      const my = ((e.clientY - rect.top) / rect.height) * canvasHeight;
      const [px, py] = pinPxRef.current;
      const hit = Math.hypot(mx - px, my - py) <= 34;
      setIsPinHovered(hit);
    }

    function handleLeave() {
      setIsPinHovered(false);
    }

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);

    async function buildDots() {
      const world = await fetch(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
      ).then((r) => r.json());

      if (destroyed) return;

      const land = feature(world, world.objects.countries);
      const [px, py] = projection([pin.lon, pin.lat]);
      pinPxRef.current = [px, py];

      const pts = [];
      for (const f of land.features) {
        const bounds = path.bounds(f);

        for (let x = bounds[0][0]; x < bounds[1][0]; x += dotStep) {
          for (let y = bounds[0][1]; y < bounds[1][1]; y += dotStep) {
            const lonlat = projection.invert([x, y]);
            if (!lonlat) continue;
            if (!d3.geoContains(f, lonlat)) continue;

            pts.push({
              x,
              y,
              dist: d3.geoDistance(lonlat, [pin.lon, pin.lat]),
            });
          }
        }
      }

      pointsRef.current = pts;
      drawFrame(null);
    }

    buildDots();

    return () => {
      destroyed = true;
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      if (animRef.current.raf) cancelAnimationFrame(animRef.current.raf);
    };
  }, [pin]);

  useEffect(() => {
    hoverStateRef.current = isPinHovered;
    if (isPinHovered) {
      controlsRef.current.start();
    } else {
      controlsRef.current.stop();
    }
  }, [isPinHovered]);

  return (
    // <section className="py-8 bg-[#F2F5FB]">
    <section className="py-12 sm:py-16 bg-[#F2F5FB]">
      <div className="max-w-full mx-auto px-3 sm:px-8 lg:px-12">
        <div
          className="
  bg-white
  rounded-[28px] sm:rounded-[36px] lg:rounded-[42px]
  shadow-[0_24px_80px_rgba(15,23,42,0.08)]
  px-5 sm:px-10 lg:px-16
  py-10 sm:py-12 lg:py-14
"
        >
          {/* <div className="bg-white rounded-[42px] shadow-[0_24px_80px_rgba(15,23,42,0.08)] px-6 sm:px-10 lg:px-16 py-10 lg:py-14"> */}
          <div className="max-w-3xl mx-auto lg:ml-[6%] text-center lg:text-left">
            {/* <div className="max-w-3xl lg:ml-[6%]"> */}
            <h2 className="text-[34px] md:text-[38px] leading-tight font-semibold text-gray-900">
              Our
              <br />
              Network
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-gray-600">
              Headquartered in Dubai, UAE, MAHY Khoory has established an
              intelligent manufacturing and supply network, including authorized
              facilities and strategic partners, with the capability to support
              large-scale industrial production and regional distribution.
            </p>
          </div>
          <div className="flex flex-col gap-12 pt-10">
            {/* <div
              ref={wrapRef}
              className="relative max-w-full h-[360px] sm:h-[430px] lg:h-[570px] overflow-hidden rounded-[34px]"
            > */}

            <div
              ref={wrapRef}
              className="
    relative
    max-w-full
    h-[260px]
    sm:h-[360px]
    md:h-[430px]
    lg:h-[570px]
    overflow-hidden
    rounded-[22px] sm:rounded-[28px] lg:rounded-[34px]
  "
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
