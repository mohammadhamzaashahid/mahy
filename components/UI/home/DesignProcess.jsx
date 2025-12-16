"use client"

import Image from "next/image"
import DesignProcessCard from "./DesignProcessCard"
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }
    }),
};

function DesignProcess() {
    const processes = [
        {
            id: 1,
            title: "Understanding Needs",
            description: "We begin by listening carefully to our customers and stakeholders, identifying their unique requirements and challenges. This ensures every solution is tailored to deliver maximum impact.",
            icon: "/processes/planning.png",
            horizontalShift: "left-0"
        },
        {
            id: 2,
            title: "Designing Sustainable Solutions",
            description: "Our experts craft innovative, eco-friendly, and cost-effective solutions that balance performance with environmental responsibility. Sustainability is embedded in every stage of our process.",
            icon: "/processes/design.png",
            horizontalShift: "left-22"
        },
        {
            id: 3,
            title: "Implementing with Excellence",
            description: "From planning to execution, we apply advanced technologies and industry best practices to deliver reliable, high-quality outcomes. Precision and efficiency guide every project we undertake.",
            icon: "/processes/development.png",
            horizontalShift: "left-20"
        },
        {
            id: 4,
            title: "Continuous Improvement & Support",
            description: "We don't stop at delivery. Ongoing monitoring, feedback, and support help us refine our solutions, ensuring long-term value and exceeding stakeholder expectations.",
            icon: "/processes/deployment.png",
            horizontalShift: "left-12"
        }];

    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center font-bold text-4xl my-20 md:mt-20 md:mb-0 mx-5">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                    Our Process
                </h2>
                <div className="w-24 md:w-32 h-0.75 bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto my-4 rounded-full" />
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-5 items-center justify-center">
                <motion.div
                    className="relative overflow-hidden w-170 h-170 rounded-full -left-50 hidden lg:block col-span-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Image
                        src="/pumps.avif"
                        alt="Design Process"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="col-span-3 space-y-20 lg:space-y-14 relative lg:-left-50 w-screen lg:w-auto">
                    {processes.map((process, i) => (
                        <motion.div
                            key={process.id}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={i}
                            viewport={{ once: true }}
                        >
                            <DesignProcessCard process={process} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DesignProcess