"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutVideo() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center end", "center start"],
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.85, 1, 0.85]
    );

    return (
        <div className="w-full flex justify-center my-5 lg:my-14">
            <motion.div
                ref={ref}
                style={{ scale }}
                className="
          relative
          w-full
          max-w-7xl
          aspect-video
          overflow-hidden
        "
            >
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    controls
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
            </motion.div>

        </div>
    );
}
