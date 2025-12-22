import Image from 'next/image'
import React from 'react'

function HistoryCard({ title, subText, image, description, index }) {
    return (
        <div className={`w-[90vw] lg:w-[35vw] flex-none relative z-20 ${index % 2 !== 0 && "top-70"}`}>
            <div className='border-l pt-2 pb-8 relative pl-4'>
                <p className='font-bold text-sm uppercase tracking-[0.28em] text-[#18a2e2]'>{title}</p>
                <p className='text-sm font-semibold mt-1'>{subText}</p>
                <ul className="list-disc list-inside space-y-1 mt-3">
                    {description.map((item, i) => (
                        <li
                            key={i}
                            className={`text-xs ${i === description.length - 1
                                ? 'list-none font-medium pt-1'
                                : 'font-light'
                                }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                {/* <div className="relative h-30 w-full mt-3">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div> */}
                <div className="absolute bottom-0 -left-2 h-4 w-4 rounded-full b-base"></div>
            </div>
        </div>
    )
}

export default HistoryCard