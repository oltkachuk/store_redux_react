import * as types from "./cartActionTypes"

const initialState = {
    cartProducts: [],
    processing: false
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ITEM_TO_CART: {
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload]
            }
        }
        case types.DELETE_ITEM_FROM_CART: {
            return {
                ...state,
                cartProducts: [...state.cartProducts.filter(p => p.id !== action.payload)]
            }
        }
        default:
            return state
    }
}

export default cart