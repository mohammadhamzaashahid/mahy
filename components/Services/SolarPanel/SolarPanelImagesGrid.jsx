"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const defaultItems = [
    { title: "Smart Strategies", text: "Risus tristique proin cras diam sed." },
    {
        title: "Business Growth",
        text: "Ac ut nam vulputate volutpat felis in lorem.",
    },
];

const defaultImages = [
    "/gallery/gallery-2.jpg",
    "/gallery/gallery-3.jpg",
];

function SolarPanelImagesGrid({
    heading = "",
    items = defaultItems,
    images = defaultImages,
    text1 = "250+",
    text2 = "Active Customers",
}) {
    const cols = images.length === 1 ? 1 : 2;

    return (
        <section className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                {/* Left: heading + cards */}
                <div className="lg:col-span-3">
                    <h2 className="text-4xl font-medium text-center lg:text-left">
                        {heading}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {items.map((item, i) => (
                            <CardItem key={i} item={item} i={i} />
                        ))}
                    </div>
                </div>

                {/* Right: image grid + stat block */}
                <div className="lg:col-span-2 flex flex-col gap-16">
                    <div
                        className="grid gap-2"
                        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
                    >
                        {images.map((img, index) => {
                            const isLastOdd = images.length === 3 && index === 2;
                            return (
                                <div
                                    key={index}
                                    className="relative rounded overflow-hidden"
                                    style={{
                                        gridColumn: isLastOdd ? "1 / -1" : undefined,
                                        paddingBottom: isLastOdd ? "50%" : images.length === 1 ? "65%" : "100%",
                                    }}
                                >
                                    <Image
                                        src={img}
                                        alt={`grid-image-${index}`}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 text-white px-6 py-12"
                    >
                        <span className="text-2xl font-medium block">{text1}</span>
                        <span className="uppercase text-sm tracking-wide">{text2}</span>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

function CardItem({ item, i }) {
    const hasBg = Boolean(item.bgImage);

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`
                group relative overflow-hidden rounded-md shadow-md p-10
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${!hasBg ? "bg-slate-900 hover:bg-white" : ""}
            `}
        >
            {hasBg && (
                <>
                    {/* Background image — slight zoom on hover */}
                    <Image
                        src={item.bgImage}
                        alt=""
                        fill
                        className="object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Always-on base dim so image never looks raw at rest */}
                    <div className="absolute inset-0 z-10 bg-black/30" />

                    {/* Resting wave — dark pool anchored at the bottom where text lives */}
                    <div
                        className="absolute bottom-0 left-0 right-0 z-20"
                        style={{
                            height: "55%",
                            background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 60%, transparent 100%)",
                        }}
                    />

                    {/* Hover wave — sweeps up to fill the entire card on hover */}
                    <div
                        className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                        style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.82) 45%, rgba(0,0,0,0.4) 100%)",
                        }}
                    />
                </>
            )}

            {/* Text floats above both wave layers */}
            <div className="relative z-30">
                <h3
                    className={`font-semibold text-xl transition-colors duration-300 ${
                        hasBg
                            ? "text-white drop-shadow-md"
                            : "text-white group-hover:text-[var(--accent-color)]"
                    }`}
                >
                    {item.title}
                </h3>
                <p
                    className={`mt-3 text-sm leading-6 transition-colors duration-300 ${
                        hasBg
                            ? "text-white/75 group-hover:text-white drop-shadow-sm"
                            : "text-gray-300 group-hover:text-[var(--accent-light)]"
                    }`}
                >
                    {item.text}
                </p>
            </div>
        </motion.div>
    );
}

export default SolarPanelImagesGrid;