"use client"
import { motion } from "framer-motion";
import CompaniesCard from './CompaniesCard';

function List({ companies, locale }) {
    if (!companies.length) {
        return (
            <div className="rounded-3xl border border-[#E7E3DA] bg-white p-10 text-center">
                <p className="text-sm font-medium text-gray-700">No companies match the selected filters.</p>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {companies.map((company, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <CompaniesCard slug={company.slug} category={company.sector} title={company.name} logo={company.image} locale={locale}
                        onClick={() => { console.log('clicked'); }} />
                </motion.div>
            ))}
        </div>
    )
}

export default List
