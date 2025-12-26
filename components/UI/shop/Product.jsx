"use client"
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi';
import { Slide, toast, ToastContainer } from 'react-toastify';
import Cookies from "js-cookie";

function Product({ product, model, locale }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [modelIndex, setModelIndex] = useState(Number(model));
    const [quantity, setQuantity] = useState(1);
    const productId = product.id;

    const handleModelIndex = (i) => {
        setModelIndex(i);
    }

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1);
    };

    const addToCart = () => {
        const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];

        const existingIndex = cart.findIndex(
            (item) => item.productId === productId && item.model === modelIndex
        );

        if (existingIndex !== -1) {
            cart[existingIndex].quantity = quantity;
        } else {
            cart.push({ productId, modelIndex, quantity });
        }

        Cookies.set("cart", JSON.stringify(cart), { expires: 7 });

        setQuantity(0);
        toast("Product added to cart.");
    };

    const images = product.images;
    const models = product.models;

    const handlePrev = () => {
        setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    };

    const handleNext = () => {
        setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    };

    return (
        <>
            <div className="">
                <div className='relative h-[50vh] lg:h-140 rounded-xl overflow-hidden bg-black/5'>
                    <Image src={product.images[imageIndex]} alt={product.name} fill style={{ objectFit: "cover" }} />
                    <div className="absolute inset-0 pt-2 px-3 flex items-center justify-between lg:opacity-70 hover:opacity-100 transition-all duration-300">
                        <div
                            onClick={handlePrev}
                            className="rounded-full bg-gray-50 p-2 shadow-lg cursor-pointer"
                        >
                            <ChevronLeft size={18} />
                        </div>
                        <div
                            onClick={handleNext}
                            className="rounded-full bg-gray-50 p-2 shadow-lg cursor-pointer"
                        >
                            <ChevronRight size={18} />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex flex-wrap mt-6 gap-3">
                    {images.map((image, i) => (
                        <div key={i} className='relative'>
                            <button onClick={() => setImageIndex(i)}>
                                <Image
                                    width={60} height={60} style={{ objectFit: "cover" }}
                                    className={`rounded-xl bg-gray-200 ${imageIndex === i ? "outline-2 outline-gray-700 " : "opacity-70"
                                        }`}
                                    src={image} alt={product.name}
                                />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex flex-col mt-10 px-8 lg:px-14 select-none">
                <p className="t-base font-medium uppercase">SNEAKER COMPANY</p>
                <h1 className={`text-3xl font-semibold leading-tight mt-1 ${locale !== "ar" && "tracking-tighter"}`}>{product.name}</h1>
                <p className="mt-2 tracking-tighter">{product.price.toLocaleString()} AED</p>

                <p className="mt-10 text-gray-700 font-light tracking-tight">
                    Get access to thousands of DC Fast chargers with a Rivian approved CCS1 adapter.
                </p>
                <ul className='list-disc list-inside space-y-1 mt-3 text-gray-700 font-light tracking-tight'>
                    <li>Lightweight and portable design</li>
                    <li>Rivian approved replacement part</li>
                    <li>Compatible with 2026+ Rivian vehicles</li>
                </ul>
                <div className='mt-10'>
                    <p className='font-medium uppercase text-sm text-gray-600 mb-2'>Models</p>
                    {models.map((model, i) => (
                        <button key={i} onClick={() => handleModelIndex(i)}
                            className={`rounded-xl border border-[#79c4e7] ${i === modelIndex ? "text-white bg-[#79c4e7]" : "text-[#79c4e7]"}  py-1 px-4 mr-2 text-sm hover:text-white hover:bg-[#79c4e7] transition-colors duration-300`}>
                            {model}
                        </button>
                    ))}
                </div>
                <div className="lg:flex gap-4 mt-10">
                    <div className="bg-gray-50 rounded-xl py-2 px-6 flex justify-between gap-10 lg:w-fit">
                        <button onClick={decrement}>
                            <HiMinus />
                        </button>
                        <p className="font-medium text-lg">{quantity}</p>
                        <button onClick={increment} >
                            <HiPlus />
                        </button>
                    </div>
                    <button onClick={addToCart} className="mt-4 lg:mt-0 b-base b-base-hover rounded-xl py-2 px-14 flex items-center justify-center gap-4 w-full lg:w-fit" >
                        <ShoppingCart stroke='white' />
                        <p className="text-white font-medium py-1">Add to cart</p>
                    </button>
                </div>
            </div>
            <ToastContainer
                transition={Slide}
                hideProgressBar
                autoClose={3000}
                position="top-right"
                toastStyle={{
                    transition: "all 0.5s ease-in-out",
                }}
            />
        </>
    )
}

export default Product