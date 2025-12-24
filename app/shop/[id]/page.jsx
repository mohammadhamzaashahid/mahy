import Product from '@/components/UI/shop/Product';
import { getProduct } from '@/constants/products';
import { ShoppingCart } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react'

async function ProductPage({ params }) {
    const { id } = await params;
    const translations = await getTranslations('Articles');
    const product = getProduct(id);
    const locale = await getLocale();

    return (
        <main className='max-w-6xl mx-auto mt-22 pb-15 grid grid-cols-1 lg:grid-cols-3 gap-2'>
            <Product product={product} locale={locale} />
        </main>
    )
}

export default ProductPage