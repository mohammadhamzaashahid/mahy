"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function LogoMarquee({ logos = [], speed = 30 }) {
    const [paused, setPaused] = useState(false);
    const locale = useLocale();

    return (
        <div className="relative w-full overflow-hidden py-10 bg-white">
            <div className={`pointer-events-none absolute inset-y-0 ${locale === "ar" ? "right-0" : "left-0"} w-24 bg-gradient-to-r from-white to-transparent z-10`} />
            <div className={`pointer-events-none absolute inset-y-0 ${locale === "ar" ? "left-0" : "right-0"}w-24 bg-gradient-to-l from-white to-transparent z-10`} />

            <div
                className="flex w-max marquee"
                style={{
                    animationDuration: `${speed}s`,
                    animationPlayState: paused ? "running" : "running",
                }}
            >
                {logos.map((logo, i) => (
                    <LogoItem
                        key={`a-${i}`}
                        logo={logo}
                        onHover={setPaused}
                    />
                ))}
                {logos.map((logo, i) => (
                    <LogoItem
                        key={`b-${i}`}
                        logo={logo}
                        onHover={setPaused}
                    />
                ))}
            </div>
        </div>
    );
}

function LogoItem({ logo, onHover }) {
    return (
        <div
            className="
        group
        flex items-center justify-center
        mx-10
        min-w-[120px] sm:min-w-[160px]
        cursor-pointer
      "
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            <Image
                src={logo.src}
                alt={logo.alt || "Company logo"}
                width={140}
                height={60}
                className="
          object-contain
          opacity-60
          grayscale
          transition-all duration-300 ease-out
          group-hover:opacity-100
          group-hover:grayscale-0
          group-hover:scale-125
          group-hover:drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]
        "
            />
        </div>
    );
}
