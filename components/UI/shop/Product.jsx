"use client"
import { Slide, ToastContainer } from 'react-toastify';
import ProductImageSection from './ProductImageSection';
import ProductDetailSection from './ProductDetailSection';

function Product({ product, model, locale }) {
    return (
        <>
            <ProductImageSection images={product.images} alt={product.name} />
            <ProductDetailSection product={product} model={model} locale={locale} />
            <ToastContainer transition={Slide} autoClose={3000} position="top-right" hideProgressBar
                toastStyle={{ transition: "all 0.5s ease-in-out", }}
            />
        </>
    )
}

export default Product