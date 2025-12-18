"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SECTIONS = [
    {
        title: "Customer Experience",
        content: "Deliver better outcomes for customers.",
        image: "/processes/UAE.avif",
    },
    {
        title: "People & Organization",
        content: "Empower teams to move faster.",
        image: "/processes/manufacturer.avif",
    },
    {
        title: "Business Strategy",
        content: "Build long-term competitive advantage.",
        image: "/processes/customer-service.avif",
    },
];

export default function PinnedScrollSection() {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const sectionRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // Redirect wheel events from the image to the scrollable right column
    useEffect(() => {
        const handleWheel = (e) => {
            if (!scrollRef.current) return;

            // Only scroll the right column
            scrollRef.current.scrollBy({
                top: e.deltaY,
            });
            e.preventDefault();
        };

        const imgCol = containerRef.current?.querySelector(".left-image");
        imgCol?.addEventListener("wheel", handleWheel, { passive: false });

        return () => imgCol?.removeEventListener("wheel", handleWheel);
    }, []);

    // Update active section based on scroll in right column
    useEffect(() => {
        if (!scrollRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(Number(entry.target.dataset.index));
                    }
                });
            },
            { root: scrollRef.current, threshold: 0.6 }
        );

        sectionRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Lock page scroll only if right column not fully scrolled
    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const sc = scrollRef.current;
            const atTop = sc.scrollTop === 0;
            const atBottom = sc.scrollHeight - sc.scrollTop === sc.clientHeight;

            document.body.style.overflow =
                containerRef.current &&
                    !atTop &&
                    !atBottom
                    ? "hidden"
                    : "";
        };

        const scrollEl = scrollRef.current;
        scrollEl?.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => scrollEl?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen bg-black">
            <div className="grid grid-cols-2 h-full">

                {/* LEFT — FIXED IMAGE */}
                <div className="left-image sticky top-0 h-screen pointer-events-auto">
                    <Image
                        src={SECTIONS[activeIndex].image}
                        alt=""
                        fill
                        className="object-cover transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* RIGHT — SCROLLABLE CONTENT */}
                <div ref={scrollRef} className="h-screen overflow-y-auto">
                    {SECTIONS.map((section, i) => (
                        <div
                            key={i}
                            ref={(el) => (sectionRefs.current[i] = el)}
                            data-index={i}
                            className="h-screen flex items-center px-16"
                        >
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-gray-300 max-w-md">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}