"use client"
import { useRef } from 'react';
import ProductCard from './ProductCard'
import ScrollButons from './ScrollButons';

function MoreProducts({ products }) {
    const scrollRef = useRef(null);
    return (
        <section className='mt-40'>
            <h3 className='text-3xl font-semibold'>You may also like</h3>
            <div className='flex flex-nowrap overflow-scroll hide-scrollbar gap-3 mt-7' ref={scrollRef}>
                {products.map((product, i) => (
                    <div className='flex-none w-4/12' key={i}>
                        <ProductCard
                            title={product.name}
                            image={product.images[0]}
                            models={product.models}
                            price={product.price}
                            href={`/shop/${product.id}`}
                        />
                    </div>
                ))}
            </div>
            <ScrollButons scrollRef={scrollRef} length={products.length} />
        </section>
    )
}

export default MoreProducts