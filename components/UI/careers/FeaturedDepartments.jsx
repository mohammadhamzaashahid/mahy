"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import DepartmentCard from './DepartmentCard';

function FeaturedDepartments() {
    const [index, setIndex] = useState(0);

    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    const getOffset = () => {
        if (typeof window === "undefined") return 240;

        const w = window.innerWidth;

        if (w < 640) return 40;
        if (w < 1024) return 120;
        return 240;
    };

    const handleIndexChange = (i) => {
        setIndex(i);

        const container = containerRef.current;
        const item = itemRefs.current[i];
        if (!container || !item) return;

        container.scrollTo({
            left: item.offsetLeft - getOffset(),
            behavior: "smooth",
        });
    };

    const departments = [
        {
            title: "Aritifical Intelligence",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed qui suscipit aut consequuntur, nemo fuga aspernatur",
            image: "/gallery/gallery-1.jpg"
        },
        {
            title: "Aritifical Intelligence 2",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed qui suscipit aut consequuntur, nemo fuga aspernatur",
            image: "/gallery/gallery-2.jpg"
        },
        {
            title: "Aritifical Intelligence 3",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed qui suscipit aut consequuntur, nemo fuga aspernatur",
            image: "/gallery/gallery-3.jpg"
        },
        {
            title: "Aritifical Intelligence 4",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed qui suscipit aut consequuntur, nemo fuga aspernatur",
            image: "/gallery/gallery-4.jpg"
        },
    ]

    return (
        <section className='max-w-7xl mx-auto px-5 py-15'>
            <h2 className='text-4xl font-semibold mb-8'>Featured Departments</h2>
            <div className='w-full h-[40vh] md:h-[60vh] relative'>
                <Image
                    src={departments[index].image}
                    alt={departments[index].title}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="flex flex-nowrap gap-10 mt-10 overflow-hidden"
                ref={containerRef}>
                {departments.map((department, i) => (
                    <DepartmentCard key={i} i={i}
                        itemRefs={itemRefs}
                        index={index} department={department}
                        handleIndexChange={handleIndexChange} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedDepartments