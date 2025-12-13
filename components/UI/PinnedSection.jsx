"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import NarrativeCard from "./StickySection/NarrativeCard";
import { motion, AnimatePresence } from "framer-motion";

const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};

const narrativeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PinnedSection() {
    const [index, setIndex] = useState(0);
    const items = [{
        title: "Customer Experience",
        subtitle:
            "Deliver a triple play of results: happier customers, employees and shareholders",
        bullets: ["An insurgent mindset", "Integrated innovation"],
        image: "/processes/UAE.avif",
    },
    {
        title: "People & Organization",
        subtitle:
            "Accelerate your organization’s results through your people and teams",
        bullets: ["Passion & Commitment", "Honesty & Openness"],
        image: "/processes/manufacturer.avif",
    },
    {
        title: "Business Strategy",
        subtitle:
            "Deliver a triple play of results: happier customers, employees and shareholders",
        bullets: ["Corporate Strategy and Finance", "Innovation & Business Building"],
        image: "/processes/customer-service.avif",
    }];
    const currentItem = items[index] || items[0];
    const isScrolling = useRef(false);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = document.getElementById("enterprise");
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting && entry.intersectionRatio >= 0.9);
            },
            { threshold: 0.9 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const lastRun = useRef(0);
    const delay = 1000;

    const handleWheel = (e) => {
        const now = Date.now();
        if (now - lastRun.current < delay) {
            lockScroll();
            return;
        }
        if (!inView) return;
        if (isScrolling.current) return;

        if (e.deltaY > 0 && index < items.length - 1) {
            setIndex((prev) => prev + 1);
            lockScroll();
        } else if (e.deltaY < 0 && index > 0) {
            setIndex((prev) => prev - 1);
            lockScroll();
        } else {
            return;
        }
        isScrolling.current = true;
        e.preventDefault();

        lastRun.current = Date.now();

        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    };

    const lockScroll = () => {
        isScrolling.current = true;
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            isScrolling.current = false;
            document.body.style.overflow = "auto";
        }, 500);
    };

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [index, inView]);

    return (
        <div
            className="h-screen grid lg:grid-cols-2 bg-black text-white"
            onWheel={handleWheel}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="relative h-120 lg:h-full w-full"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <Image
                        src={currentItem.image}
                        alt={currentItem.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="h-full snap-y snap-mandatory space-y-4 lg:space-y-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="min-h-auto lg:min-h-screen flex items-center snap-start px-6 md:px-12 lg:px-20 py-20 lg:py-0 border-b border-white/10"
                        variants={narrativeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <NarrativeCard {...currentItem} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}