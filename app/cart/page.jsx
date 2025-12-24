import Cart from '@/components/UI/cart/Cart'
import { combineProductsWithCart, getProducts } from '@/constants/products';
import { cookies } from 'next/headers';
import React from 'react'

async function CartPage() {
    const cookieStore = await cookies();
    const cart = cookieStore.get("cart")
        ? JSON.parse(cookieStore.get("cart").value)
        : [];
    const products = getProducts(cart.map(cart => cart.productId))
    const combined = combineProductsWithCart(products, cart);

    return (
        <main className='max-w-7xl mx-auto mt-25 pb-15'>
            <Cart products={combined} />
        </main>
    )
}

export default CartPage