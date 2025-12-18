"use client"
import React, { useRef, useState } from 'react'
import HistoryCard from './HistoryCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from "framer-motion";

function History() {
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
            title: "Today",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
        {
            title: "1972",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
        {
            title: "1960",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
        {
            title: "1960",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
        {
            title: "1960",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
        {
            title: "1960",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
        {
            title: "1960",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
        {
            title: "1960",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
        {
            title: "1960",
            image: "/office.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde illo officia recusandae. Rem incidunt iste ipsa rerum sequi, numquam"
        },
    ]
    return (
        <div className="relative">
            <div
                ref={scrollRef}
                className="flex flex-nowrap h-180 mt-14 overflow-y-hidden overflow-x-auto scroll-smooth scrollbar-none px-5"
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
                className="absolute inset-0 bottom-15 md:bottom-18 flex items-center justify-center">
                <div className="grid grid-flow-col auto-cols-fr items-center w-full">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <span key={i} className={`mx-auto bg-black w-px ${(i - 9) % 20 === 0 ? "h-3 lg:h-5 lg:bg-teal-600 lg:w-0.5" : "h-2"}`} />
                    ))}
                </div>
            </motion.div>
            <div className="flex justify-center gap-2 px-8">
                <button onClick={handlePrev} className="px-1 py-1/2 border-3 border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white text-4xl rounded-2xl transition-colors duration-300">
                    <HiChevronLeft />
                </button>
                <button onClick={handleNext} className="px-1 py-1/2 border-3 border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white text-4xl rounded-2xl transition-colors duration-300">
                    <HiChevronRight />
                </button>
            </div>
        </div>
    )
}

export default History