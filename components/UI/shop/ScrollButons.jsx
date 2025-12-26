import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function ScrollButons({ scrollRef, length }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToIndex = (index) => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.children[index];
        if (!card) return;

        scrollRef.current.scrollTo({
            left: card.offsetLeft - 200,
            behavior: "smooth",
        });

        setCurrentIndex(index);
    };

    const handlePrev = () => {
        scrollToIndex(Math.max(currentIndex - 1, 0));
    };

    const handleNext = () => {
        scrollToIndex(Math.min(currentIndex + 1, length - 1));
    };

    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex === length - 1;

    const baseBtn =
        "group relative flex h-14 w-14 items-center justify-center rounded-full border border-black/20 backdrop-blur-md transition-all duration-300";

    const enabledBtn = "hover:border-black hover:bg-black hover:scale-105";
    const disabledBtn = "opacity-30 cursor-not-allowed";

    return (
        <div className="relative mt-8 flex items-center justify-center gap-3">
            <button
                onClick={handlePrev}
                disabled={isPrevDisabled}
                aria-label="Previous year"
                className={`${baseBtn} ${isPrevDisabled ? disabledBtn : enabledBtn}`}
            >
                <HiChevronLeft className="text-3xl text-black transition-all duration-300 group-hover:text-white group-hover:-translate-x-0.5" />
            </button>

            <button
                onClick={handleNext}
                disabled={isNextDisabled}
                aria-label="Next year"
                className={`${baseBtn} ${isNextDisabled ? disabledBtn : enabledBtn}`}
            >
                <HiChevronRight className="text-3xl text-black transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" />
            </button>
        </div>
    )
}

export default ScrollButons