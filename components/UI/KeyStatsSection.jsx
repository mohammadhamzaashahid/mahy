"use client";

import AnimatedCounter from "./AnimatedCounter";


const STATS = [
    { value: 3200, label: "Employees" },
    { value: 31, label: "Nationalities" },
    { value: 300, label: "Certified Engineers" },
    { value: 2000, label: "Projects in UAE" },
    { value: 1000, label: "Distribution Partners" },
];

export default function KeyStatsSection() {
    return (
        <>
            <div className="text-center mt-20 mb-12 px-4">
                <h2 className="text-heading text-4xl sm:text-5xl font-semibold text-slate-900">
                    Key Facts
                </h2>

                <div className="w-24 sm:w-32 h-[3px] bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 mx-auto mt-4 rounded-full" />
            </div>

            <section className="w-full bg-white pb-20 sm:pb-24 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="
              grid
              grid-cols-1
              gap-y-14
              text-center

              sm:grid-cols-2
              sm:gap-y-16

              lg:grid-cols-5
              lg:gap-x-6
              lg:gap-y-0
            "
                    >
                        {STATS.map((item, index) => (
                            <div
                                key={index}
                                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-2
                "
                            >
                                <div
                                    className="
    h-[72px]
    sm:h-[84px]
    lg:h-[96px]
    flex
    items-center
    justify-center
  "
                                >
                                    <AnimatedCounter
                                        value={item.value}
                                        className="
      leading-none
      text-4xl
      sm:text-5xl
      lg:text-5xl
      xl:text-6xl
      font-semibold
      tracking-tight
      text-[#b59b5a]
    "
                                    />
                                </div>

                                <p
                                    className="
    mt-3
    text-sm
    sm:text-base
    lg:text-sm
    xl:text-base
    font-normal
    text-slate-700
    leading-snug
    text-center
    max-w-[240px]
  "
                                >
                                    {item.label}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
