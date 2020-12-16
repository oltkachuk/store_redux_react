import * as types from "./cartActionTypes"

const initialState = {
    cartProducts: [],
    totalPrice: null,
    processing: false
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ITEM_TO_CART: {
            if (state.cartProducts.find(el => el === action.payload)){
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, action.payload]
                }
            }
        }
        case types.DELETE_ITEM_FROM_CART: {
            return {
                ...state,
                cartProducts: [...state.cartProducts.filter(p => p.id !== action.payload)]
            }
        }
        case types.CHANGE_CURRENT_QUANTITY: {
            return {
                ...state,
                cartProducts: [...state.cartProducts.map(o => {
                    return o.id === action.payload.id 
                        ? {...o, 
                            currentQuantity: action.payload.quantity
                        }
                        : o
                })]
            }
        }
        default:
            return state
    }
}

export default cart