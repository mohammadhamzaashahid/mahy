import { articles } from '@/constants/articles';
import Image from 'next/image';
import React from 'react'

async function Article({ params }) {
    const { id } = await params;
    const article = articles[id - 1];

    return (
        <main className='max-w-4xl mx-auto mt-25 pb-25'>
            <h1 className='text-3xl lg:text-5xl font-semibold leading-tight uppercase tracking-tighter px-4'>{article.heading}</h1>
            <div className='text-lg mt-7 px-4 t-base'>{article.date.toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
            <div className="md:px-4 mt-3">
                <div className='relative w-full h-80 lg:h-140'>
                    <Image src={article.image} fill style={{ objectFit: "cover" }} alt={article.heading} />
                </div>
            </div>
            <h2 className='text-xl lg:text-3xl mt-12 font-medium text-justify inter-word px-4'>{article.subHeading}</h2>
            <p className='text-xl mt-12 font-light text-justify inter-word px-4'>{article.article}</p>
        </main>
    )
}

export default Article