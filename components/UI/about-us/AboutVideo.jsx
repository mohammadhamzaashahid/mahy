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
        <motion.div
            ref={ref}
            style={{ scale }}
            className="h-[50vh] lg:h-[90vh] w-[90vw]"
        >
            <video
                className="object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src="videos/hero-video.mp4"
                    type="video/mp4"
                />
            </video>
        </motion.div>
    );
}