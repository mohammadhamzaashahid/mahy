"use client"
import { motion } from "framer-motion";
import Image from "next/image";

function PageHeading({ title, description, image }) {
    return (
        <div className="lg:grid lg:grid-cols-5 relative z-40">
            <div className="col-span-2 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="col-span-2 h-[60vh] lg:h-[70vh] relative"
                >
                    <Image
                        src={image}
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
                    <h1 className='text-white text-6xl font-bold'>{title}</h1>
                    <p className='text-gray-300 mt-6'>{description}</p>
                </motion.div>
            </div>
        </div>
    )
}

export default PageHeading

