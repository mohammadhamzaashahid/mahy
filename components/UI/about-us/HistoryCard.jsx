import Image from 'next/image'
import React from 'react'

function HistoryCard({ title, image, description, index }) {
    return (
        <div className={`w-[40vw] lg:w-[20vw] flex-none relative z-20 ${index % 2 !== 0 && "top-75"}`}>
            <div className='border-l pt-2 pb-8 relative'>
                <p className='font-bold text-sm uppercase tracking-[0.28em] text-[#0B6B61] pl-2'>{title}</p>
                <p className='text-xs font-light mt-1 pl-2 line-clamp-3'>{description}</p>
                <div className="relative h-30 w-full mt-3 ml-2">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
                <div className="absolute bottom-0 -left-2 h-4 w-4 rounded-full bg-teal-900"></div>
            </div>
        </div>
    )
}

export default HistoryCard