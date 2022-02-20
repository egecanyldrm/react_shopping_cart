import { data } from "../../data";

const INITIAL_STATE = {
    cart: [],
    products: [...data]
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'addProduct':
            const isEven = state.cart.some((product) => product.id === action.product.id);
            if (isEven) {
                return {
                    ...state, cart: [...state.cart.map(product => {
                        if (product.id === action.product.id) {
                            return {
                                ...product, count: product.count + 1
                            }
                        }
                        else {
                            return product
                        }
                    })]
                }


            }
            else {
                return {
                    ...state, cart: [
                        ...state.cart,
                        { ...action.product, count: 1 }
                    ]
                }
            }

        case 'removeFromCart':
            return {
                ...state,
                cart: [
                    ...state.cart.filter((product) => {
                        return product.id !== action.id
                    })
                ]
            }

        case 'incrementCount':

            return {
                ...state,
                cart: [
                    ...state.cart.map(product => {
                        if (product.id === action.id) {
                            return { ...product, count: product.count - 1 }
                        }
                        else{
                            return product
                            }
                        
                    })]
            }

        default:
            return state;
    }

}