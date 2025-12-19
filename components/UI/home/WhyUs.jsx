"use client"

import * as React from "react"
import { motion } from "framer-motion";
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../Accordian";

const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyUs() {
    const items = [
        {
            title: "Sustainable & Smart Solutions",
            content: "From water pumping to recycling, our products are designed to protect the environment while delivering unmatched performance and efficiency."
        },
        {
            title: "Global Partnerships, Local Expertise",
            content: "We collaborate with world-class brands like Grundfos to bring cutting-edge technology tailored to regional needs."
        },
        {
            title: "Seamless Service & Support",
            content: "Our dedicated after-sales team ensures smooth installation, prompt maintenance, and long-term peace of mind - every step of the way."
        },
    ];

    return (
        <div className="grid lg:grid-cols-2 lg:h-[70vh]">
            <motion.div
                className="p-8 lg:p-15"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <p className="font-bold text-3xl uppercase">Why you should choose us?</p>
                <p className="text-gray-600 my-5">We combine innovation, sustainability, and trusted partnerships to deliver solutions that are efficient, reliable, and built for long-term value.</p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {items.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i + 1}`}>
                            <AccordionTrigger className="cursor-pointer t-base-hover transition-colors duration-500 font-bold text-lg">
                                {item.title}
                            </AccordionTrigger>

                            <AccordionContent className="text-balance">
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="mb-1 text-gray-500">{item.content}</p>
                                </motion.div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
            <div className="relative w-full h-80 lg:h-full">
                <Image
                    src="https://res.cloudinary.com/db3fd1qah/image/upload/v1766140489/office_m5htoa.png"
                    alt="Why Us"
                    fill
                    className="object-cover"
                />
            </div>
        </div >
    )
}