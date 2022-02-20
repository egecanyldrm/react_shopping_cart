export const addToCart = (product) => (
    {
        type: 'addProduct',
        product: product

    })
export const removeFromCart = id => (
    {
        type: 'removeFromCart',
        id
    }
)

export const incrementCount = id => (
    {
        type: 'incrementCount',
        id
    }
)