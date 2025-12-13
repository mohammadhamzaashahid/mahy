"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

function HeroVideo({ slides }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(id);
    }, [slides.length]);

    return (
        <section className="relative h-screen">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-20 left-6 md:left-20 z-30 max-w-xl"
                >
                    <h1 className="text-4xl md:text-6xl font-semibold text-gray-100 leading-tight drop-shadow-lg">
                        {slides[index].title}
                    </h1>
                    {slides[index].subtitle && (
                        <p className="mt-4 text-gray-200 font-light">{slides[index].subtitle}</p>
                    )}
                    {slides[index].cta && (
                        <div className="mt-6">
                            <Button onClick={slides[index].cta.onClick || (() => { })}>
                                {slides[index].cta.label}
                            </Button>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default HeroVideo