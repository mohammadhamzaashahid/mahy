"use client";

import Image from "next/image";

export default function LogoMarquee({ logos = [], speed = 30 }) {
    return (
        <div className="relative w-full overflow-hidden py-10 bg-white">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
            <div
                className="flex w-max marquee hover:[animation-play-state:paused]"
                style={{ animationDuration: `${speed}s` }}
            >
                {logos.map((logo, i) => (
                    <LogoItem key={`a-${i}`} logo={logo} />
                ))}

                {logos.map((logo, i) => (
                    <LogoItem key={`b-${i}`} logo={logo} />
                ))}
            </div>
        </div>
    );
}

function LogoItem({ logo }) {
    return (
        <div className="flex items-center justify-center mx-10 min-w-[120px] sm:min-w-[160px]">
            <Image
                src={logo.src}
                alt={logo.alt || "Company logo"}
                width={160}
                height={80}
                className="
          object-contain
          opacity-60
          grayscale
          transition-all duration-300
          hover:opacity-100 hover:grayscale-0
        "
            />
        </div>
    );
}
