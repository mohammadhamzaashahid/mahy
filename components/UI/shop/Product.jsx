"use client"
import { Slide, ToastContainer } from 'react-toastify';
import ProductImageSection from './ProductImageSection';
import ProductDetailSection from './ProductDetailSection';

function Product({ product, model, locale, modelHeading, modelsHeading }) {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <ProductImageSection images={product.images} alt={product.name} />
            <ProductDetailSection product={product} model={model} locale={locale}
                modelHeading={modelHeading} modelsHeading={modelsHeading} />
            <ToastContainer transition={Slide} autoClose={3000} position="top-right" hideProgressBar
                toastStyle={{ transition: "all 0.5s ease-in-out", }} />
        </div>
    )
}

export default Product