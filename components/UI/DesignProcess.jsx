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
            title: "Planning",
            description: "Our next step is to thoroughly research and organize your strengths and weaknesses. We start with understanding how you want to position your website and offer technical assistance.",
            icon: "/processes/planning.png",
            horizontalShift: "left-0"
        },
        {
            id: 2,
            title: "Design",
            description: "The next stage is where we start with designing the website, checking the sitemap, optimizing user experience and making sure the website is responsive across all digital fronts.",
            icon: "/processes/design.png",
            horizontalShift: "left-22"
        },
        {
            id: 3,
            title: "Development",
            description: "We create initial mockups of the web design from scratch. Our team ensures to optimize the design and add content that is fully optimized to rank on different search engines.",
            icon: "/processes/development.png",
            horizontalShift: "left-20"
        },
        {
            id: 4,
            title: "Deployment",
            description: "The launch phase is where (once the customer feels satisfied), we send the website live. We ensure the original design works smoothly and gain feedback on improvements.",
            icon: "/processes/deployment.png",
            horizontalShift: "left-12"
        }];

    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center font-bold text-4xl my-20 md:mt-20 md:mb-0 mx-5">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                    Our Process
                </h2>
                <div className="w-24 md:w-32 h-[3px] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto my-4 rounded-full" />
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