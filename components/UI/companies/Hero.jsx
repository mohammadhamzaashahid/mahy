"use client"
import { motion } from "framer-motion";
import Image from "next/image";

function Hero() {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-2 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="col-span-2 h-[70vh] relative"
                >
                    <Image
                        src="/gallery/gallery-1.png"
                        alt="Companies"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </motion.div>
            </div>
            <div className="col-span-3 py-20 px-15 flex flex-col justify-end bg-slate-950">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className='text-white text-6xl font-bold'>Our Portfolio</h1>
                    <p className='text-gray-300 mt-6'>The Fund seeks to build a rich investment portfolio of companies across diverse sectors in UAE and beyond, in line with UAE Vision.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero

