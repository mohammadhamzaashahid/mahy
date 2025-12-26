import Product from '@/components/UI/shop/Product';
import Specs from '@/components/UI/shop/Specs';
import { getProduct } from '@/constants/products';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react'

async function ProductPage({ params, searchParams }) {
    const { id } = await params;
    const { model } = await searchParams;

    const translations = await getTranslations('Articles');
    const product = getProduct(id);
    const locale = await getLocale();

    return (
        <main className='max-w-6xl mx-auto mt-22 pb-15 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <Product product={product} model={model} locale={locale} />
            </div>
            <Specs />
        </main>
    )
}

export default ProductPage