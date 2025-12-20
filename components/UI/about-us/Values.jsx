import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../Accordian";

const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Values({ items }) {
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