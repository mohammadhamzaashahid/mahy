import Image from 'next/image'
import React from 'react'

function HistoryCard({ title, image, description }) {
    return (
        <div className='rounded-3xl border border-[#E7E3DA] w-[80vw] lg:w-[40vw] py-5 px-5 flex-none'>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-600">
                {title}
            </p>
            <div className="relative h-80 w-full my-5">
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <p className="text-sm font-light">
                {description}
            </p>
        </div>
    )
}

export default HistoryCard