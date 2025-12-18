"use client"
import React, { useRef, useState } from 'react'
import HistoryCard from './HistoryCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function History() {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToIndex = (index) => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.children[index];
        if (card) {
            scrollRef.current.scrollTo({
                left: card.offsetLeft,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
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
    ]
    return (
        <div className="relative">
            <div
                ref={scrollRef}
                className="flex flex-nowrap gap-4 mt-14 overflow-x-auto scroll-smooth scrollbar-none px-5"
            >
                {items.map((item, i) => (
                    <HistoryCard
                        key={i}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </div>
            <div className="flex gap-2 px-8 mt-6">
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