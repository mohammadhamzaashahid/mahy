"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { motion } from "framer-motion";

import { cn } from "@/lib/utils"
import Image from "next/image"

const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Accordion(props) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("border-b last:border-b-0", className)}
            {...props}
        />
    );
}

function AccordionTrigger({ className, children, ...props }) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({ className, children, ...props }) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            {...props}
        >
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

export default function WhyUs() {
    const items = [
        {
            title: "Product Information",
            content: "Lorem ipsum dolor sit amet consecteture Duis aute irure dolor innocente reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
        },
        {
            title: "Shipping Details",
            content: "Lorem ipsum dolor sit amet consecteture Duis aute irure dolor innocente reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
        },
        {
            title: "Return Policy",
            content: "Lorem ipsum dolor sit amet consecteture Duis aute irure dolor innocente reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
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
                <p className="text-teal-500 font-bold uppercase">Exclusive Benefits</p>
                <p className="text-cyan-900 font-bold text-3xl mt-1">You should choose us</p>
                <p className="text-gray-600 my-5">Lorem ipsum dolor sit amet consecteture Duis aute irure dolor innocente reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {items.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i + 1}`}>
                            <AccordionTrigger className="cursor-pointer hover:text-teal-600 transition-colors duration-500 font-bold text-lg">
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
                                    <p className="mb-1">{item.content}</p>
                                </motion.div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
            <div className="relative w-full h-80 lg:h-full">
                <Image
                    src="/office.jpg"
                    alt="Why Us"
                    fill
                    className="object-cover"
                />
            </div>
        </div >
    )
}