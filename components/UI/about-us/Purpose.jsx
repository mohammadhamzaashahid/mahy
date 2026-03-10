"use client"
import { motion } from "framer-motion";
import Values from "./Values";
import AnimatedLines from "../AnimatedLines";

function Purpose({ purpose }) {
    return (
        <motion.div
            className="px-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}>
            <div className='py-15 lg:py-20 border-b border-gray-300'>
                <div className='max-w-5xl mx-auto'>
                    <AnimatedLines heading={purpose.heading} marginBottom="mb-8" />
                    {/* <p className="font-bold uppercase mt-2 lg:mt-6 mb-1 text-3xl sm:text-4xl lg:text-5xl px-10">{purpose.subHeading}</p> */}
                    {/* <AboutVideo /> */}
                    <Values items={purpose.items} />
                    <p className="text-sm leading-relaxed font-light text-gray-600">{purpose.text1}</p>
                    <p className="mt-1 text-sm leading-relaxed font-light text-gray-600">{purpose.text2}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Purpose