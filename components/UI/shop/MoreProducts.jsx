"use client"
import { useRef } from 'react';
import ProductCard from './ProductCard'
import ScrollButons from './ScrollButons';

function MoreProducts({ products, modelHeading, modelsHeading, currency, buy }) {
    const scrollRef = useRef(null);
    return (
        <section className='mt-40'>
            <h3 className='text-3xl font-semibold px-5 lg:px-0'>You may also like</h3>
            <div className='flex flex-nowrap overflow-scroll hide-scrollbar gap-5 mt-10 pl-5 lg:pl-0' ref={scrollRef}>
                {products.map((product, i) => (
                    <div className='flex-none w-11/12 lg:w-4/12 h-full' key={i}>
                        <ProductCard
                            title={product.name}
                            image={product.images[0]}
                            models={product.models}
                            price={product.price}
                            href={`/shop/${product.id}`}
                            modelHeading={modelHeading}
                            modelsHeading={modelsHeading}
                            currency={currency}
                            buy={buy}
                        />
                    </div>
                ))}
            </div>
            <ScrollButons scrollRef={scrollRef} length={products.length} />
        </section>
    )
}

export default MoreProducts