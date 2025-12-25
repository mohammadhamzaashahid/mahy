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
    const [quantity, setQuantity] = useState(0);
    const productId = product.id;

    const handleModelIndex = (i) => {
        setModelIndex(i);
    }

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity === 0) return;
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
            <div className="relative h-[50vh] rounded-xl overflow-hidden">
                <Image src={product.images[imageIndex]} alt={product.name} fill style={{ objectFit: "contain" }} />
                <div className="absolute inset-0 pt-2 px-1 flex items-center justify-between lg:opacity-70 hover:opacity-100 hover:bg-black/5 transition-all duration-500">
                    <div
                        onClick={handlePrev}
                        className="rounded-full bg-gray-50 p-2 shadow-lg cursor-pointer"
                    >
                        <ChevronLeft />
                    </div>
                    <div
                        onClick={handleNext}
                        className="rounded-full bg-gray-50 p-2 shadow-lg cursor-pointer"
                    >
                        <ChevronRight />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center mt-10 px-8 lg:px-14 lg:col-span-2 select-none">
                <p className="t-base font-semibold uppercase">SNEAKER COMPANY</p>
                <h1 className={`text-3xl lg:text-5xl font-semibold leading-tight uppercase ${locale !== "ar" && "tracking-tighter"}`}>{product.name}</h1>
                <p className="mt-4 text-slate-500">
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything
                    the weather can offer.
                </p>
                <div className="flex gap-3 mt-5 items-center">
                    <p className="font-medium text-2xl">$125.00</p>
                    <p className="font-medium text-sm rounded-md px-2 bg-[#cbdfe9] text-[#39a9de]">50%</p>
                </div>
                <p className="font-medium text-sm text-slate-300 line-through mt-1">$250.00</p>
                <div className='mt-5'>
                    <p className='font-medium uppercase text-sm text-gray-600 mb-2'>Models</p>
                    {models.map((model, i) => (
                        <button key={i} onClick={() => handleModelIndex(i)}
                            className={`rounded-2xl border border-[#79c4e7] ${i === modelIndex ? "text-white bg-[#79c4e7]" : "text-[#79c4e7]"}  py-1 px-4 mr-2 text-sm hover:text-white hover:bg-[#79c4e7] transition-colors duration-300`}>
                            {model}
                        </button>
                    ))}
                </div>
                <div className="lg:flex gap-4 mt-6">
                    <div className="bg-gray-50 rounded-xl py-2 px-6 flex justify-between gap-10 lg:w-fit">
                        <button onClick={decrement}>
                            <HiMinus />
                        </button>
                        <p className="font-medium text-lg">{quantity}</p>
                        <button onClick={increment} >
                            <HiPlus />
                        </button>
                    </div>
                    <button onClick={addToCart} className="b-base b-base-hover rounded-xl py-2 px-14 flex items-center justify-center gap-4 w-full lg:w-fit" >
                        <ShoppingCart stroke='white' />
                        <p className="text-white font-medium">Add to cart</p>
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