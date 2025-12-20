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

function DesignProcess({ processes }) {
    return (
        <div className="mt-3 grid grid-cols-1 md:grid-cols-5 items-center justify-center">
            <motion.div
                className="relative overflow-hidden w-150 h-150 rounded-full -left-40 hidden lg:block col-span-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Image
                    src="/processes/customer-service.avif"
                    alt="Design Process"
                    fill
                    className="object-cover"
                />
            </motion.div>
            <div className="col-span-3 space-y-20 lg:space-y-10 relative lg:-left-50 w-screen lg:w-auto">
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
    )
}

export default DesignProcess