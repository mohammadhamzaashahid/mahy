const products = [
    {
        id: 1,
        name: "Pump",
        models: [
            "Model 1",
            "Model 2",
            "Model 3",
        ],
        images: ["/pump.png", "/pump2.png"],
        price: 400000,
        partnerId: 0
    },
    {
        id: 2,
        name: "Pump",
        models: [
            "Model 1",
            "Model 2",
        ],
        images: ["/pump.png"],
        price: 400000,
        partnerId: 0
    },
    {
        id: 3,
        name: "Pump",
        models: [
            "Model 1",
            "Model 2",
            "Model 3",
        ],
        images: ["/pump.png"],
        price: 4000,
        partnerId: 3
    },
    {
        id: 4,
        name: "Pump",
        models: [
            "Model 1",
            "Model 2",
            "Model 3",
        ],
        images: ["/pump.png"],
        price: 4000,
        partnerId: 4
    },
    {
        id: 5,
        name: "Pump",
        models: [
            "Model 1",
            "Model 2",
            "Model 3",
        ],
        images: ["/pump.png"],
        price: 4000,
        partnerId: 5
    },
    {
        id: 6,
        name: "Pump",
        models: [
            "Model 1",
        ],
        images: ["/pump.png"],
        price: 4000,
        partnerId: 6
    },
];

export const getProduct = (id) => {
    return products.find(product => product.id === Number(id));
}

export const getProducts = (ids) => {
    const idSet = ids.map(Number);
    return products.filter(product => idSet.includes(product.id));
};

export const combineProductsWithCart = (products, cart) => {
    if (!Array.isArray(products) || !Array.isArray(cart)) return [];

    return cart
        .map(({ productId, quantity, modelIndex }) => {
            const product = products.find(
                (p) => p.id === Number(productId)
            );

            if (!product) return null;

            return {
                ...product,
                quantity,
                modelIndex
            };
        })
        .filter(Boolean);
};

export default products;