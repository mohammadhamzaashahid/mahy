"use client"
import React, { useRef, useState } from 'react'
import HistoryCard from './HistoryCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from "framer-motion";

function History({ history }) {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const SPACING = 24;

    const scrollToIndex = (index) => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.children[index];
        if (!card) return;

        scrollRef.current.scrollTo({
            left: card.offsetLeft - SPACING,
            behavior: "smooth",
        });

        setCurrentIndex(index);
    };

    const handlePrev = () => {
        scrollToIndex(Math.max(currentIndex - 1, 0));
    };

    const handleNext = () => {
        scrollToIndex(Math.min(currentIndex + 1, items.length - 1));
    };


    const items = [
        {
            title: "1930s-1950s",
            subText: "Foundation & Engineering Leadership",
            image: "/office.jpg",
            description: [
                "Founded in Dubai by Mohd. Abdulla Haji Yousuf Khoory",
                "Introduced modern engineering products during Dubai's formative years",
                "1935: Pioneered water-pumping system design and installation",
                "Established global partnerships, notably with Grundfos",
                "Positioned as a leader in engineering & infrastructure"
            ]
        },
        {
            title: "1960s-1980s",
            subText: "Infrastructure Expansion & Industrial Strength",
            image: "/office.jpg",
            description: [
                "Expanded engineering operations (Al Khoory Engineering / Senan Industry)",
                "Contributed to iconic UAE projects including Burj Khalifa",
                "Built Electrical Division representing Eaton, ABB, Lister Petter, Kirloskar",
                "Recognized regional leader in water & electrical solutions"
            ]
        },
        {
            title: "1988-2010s",
            subText: "Diversification & Manufacturing Growth",
            image: "/office.jpg",
            description: [
                "1988: Launched Union Paper Mills - UAE's first paper-recycling plant",
                "Expanded recycling capacity & manufacturing footprint",
                "Established Al Dhafra Paper Manufacturing (Abu Dhabi)",
                "Diversified into packaging, interiors, hospitality, logistics & waste management",
                "Transitioned into a multi-sector industrial group"
            ]
        },
        {
            title: "2010s-Present",
            subText: "Sustainability, Innovation & Future Mobility",
            image: "/office.jpg",
            description: [
                "Launched Creative Solutions for energy & sustainability consulting",
                "Entered renewable energy as UAE partner for SolarEdge",
                "2024: Re-entered automotive sector with Dongfeng Motor Corporation",
                "Focus on EVs, clean energy & innovation-driven growth",
                "Positioned for future-ready, sustainable expansion"
            ]
        }
    ]
    return (
        <>
            <motion.div
                dir='ltr'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}>
                <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl lg:text-4xl font-bold uppercase px-10'>{history.heading}</h2>
                    <p className="mt-6 font-light px-10 mb-8">{history.subHeading}</p>
                </div>
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap h-125 mt-10 overflow-y-hidden overflow-x-auto scroll-smooth scrollbar-none px-5"
                    >
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                                viewport={{ once: true }}>
                                <HistoryCard
                                    index={i}
                                    title={item.title}
                                    subText={item.subText}
                                    image={item.image}
                                    description={item.description}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="absolute inset-0 bottom-22 md:bottom-25 flex items-center justify-center">
                        <div className="grid grid-flow-col auto-cols-fr items-center w-full">
                            {Array.from({ length: 100 }).map((_, i) => (
                                <span key={i} className={`mx-auto bg-black w-px ${(i - 12) % 20 === 0 ? "h-3 lg:h-5 lg:w-0.5" : "h-2"}`} />
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative mt-1 flex items-center justify-center gap-3">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            aria-label="Previous year"
                            className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-black/20 backdrop-blur-md transition-all duration-300
                                ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:border-black hover:bg-black hover:scale-105"}`}>
                            <HiChevronLeft
                                className="text-3xl text-black transition-all duration-300 group-hover:text-white group-hover:-translate-x-0.5"
                            />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <span className="text-xs tracking-[0.35em] uppercase text-slate-500">
                                TIMELINE
                            </span>
                            <span className="mt-1 text-sm font-semibold text-slate-900">
                                {items[currentIndex]?.title}
                            </span>
                        </div>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === items.length - 1}
                            aria-label="Next year"
                            className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-black/20 backdrop-blur-md transition-all duration-300
                            ${currentIndex === items.length - 1
                                    ? "opacity-30 cursor-not-allowed"
                                    : "hover:border-black hover:bg-black hover:scale-105"}`}>
                            <HiChevronRight
                                className="text-3xl text-black transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
                            />
                        </button>

                    </div>

                </div>
            </motion.div>
        </>

    )
}

export default History