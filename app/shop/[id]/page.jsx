import MoreProducts from '@/components/UI/shop/MoreProducts';
import Product from '@/components/UI/shop/Product';
import Specs from '@/components/UI/shop/Specs';
import { getProduct, getProducts } from '@/constants/products';
import { getLocale, getTranslations } from 'next-intl/server';

async function ProductPage({ params, searchParams }) {
    const { id } = await params;
    const { model } = await searchParams;

    const translations = await getTranslations('ShopPage');
    const product = await getProduct(id);
    const moreProducts = await getProducts();
    const locale = await getLocale();

    return (
        <main className='max-w-6xl mx-auto pt-22 pb-15 '>
            <Product product={product} model={model} locale={locale} />
            <Specs />
            <MoreProducts
                products={moreProducts}
                modelHeading={translations("Model")}
                modelsHeading={translations("Models")}
                currency={translations("Currency")}
                buy={translations("Buy")} />
        </main>
    )
}

export default ProductPage