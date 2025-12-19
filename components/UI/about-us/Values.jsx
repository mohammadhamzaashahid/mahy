import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../Accordian";

const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Values() {
    const items = [
        {
            title: "Mission",
            content:
                "To deliver innovative, sustainable solutions that create long-term value for our partners, communities, and the markets we serve. We are committed to combining expertise, technology, and responsible practices to address real-world challenges while driving measurable impact. Through continuous improvement and collaboration, we aim to build resilient businesses that contribute positively to economic and social development.",
        },
        {
            title: "Vision",
            content:
                "To be a trusted regional leader, shaping the future through smart investments, innovation, and responsible growth. We envision a future where our initiatives set new benchmarks for excellence, adaptability, and sustainability across industries. By anticipating change and embracing progress, we strive to create lasting value for generations to come.",
        },
        {
            title: "Values",
            content:
                "Integrity, collaboration, and excellence guide everything we do, ensuring accountability, transparency, and lasting impact. We believe in building strong relationships based on trust, mutual respect, and shared goals. Our values drive ethical decision-making, foster teamwork, and inspire us to consistently deliver high-quality outcomes in all our endeavors.",
        },
    ];

    return (
        <motion.div
            className="p-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
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
    )
}

export default Values