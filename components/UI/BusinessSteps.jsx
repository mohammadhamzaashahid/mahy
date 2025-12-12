"use client";

import Link from "next/link"
import BusinessStepCard from "./BusinessStepCard"
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }
    }),
};

function BusinessSteps() {
    const steps = [
        { id: 1, title: 'Research and Insights', description: 'This first step is critical. It is about gathering information: quantitative information and qualitative insights.', icon: '/icons/step1.png' },
        { id: 2, title: 'Estimate Budget', description: 'This first step is critical. It is about gathering information: quantitative information and qualitative insights.', icon: '/icons/step2.png' },
        { id: 3, title: 'Start Working', description: 'This first step is critical. It is about gathering information: quantitative information and qualitative insights.', icon: '/icons/step3.png' },
    ]
    return (
        <section className="py-20">
            <h2 className="text-center font-bold text-4xl mb-30 mx-5">To Get successful business have to follow some steps</h2>
            <div className="grid lg:grid-cols-2 gap-60 gap-x-20 lg:gap-30 px-4 lg:px-40 xl:grid-cols-3">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.id}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={i}
                        viewport={{ once: true }}
                    >
                        <BusinessStepCard
                            id={step.id}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center items-center mt-50 lg:mt-40 mx-5 gap-2">
                <p>Stay ahead in a rapidly changing world.</p>
                <Link className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-2xl" href={"/"}>Consult Now</Link>
            </div>
        </section>
    )
}

export default BusinessSteps