import * as types from "./productActionTypes"

const initialState = {
    products: [],
    processing: false,
    currentProduct: null
}


const product = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_PRODUCTS_REQUEST: {
            return {
                ...state,
                processing: true
            }
        }
        case types.GET_ALL_PRODUCTS_SUCCESS: {
            let newPayload = action.payload.map((o) => {
                return {...o, addedToCart: false}
            }) 
            return {
                ...state,
                products: [
                    ...state.products,
                    ...newPayload
                ],
                processing: false
            }
        }
        case types.GET_PRODUCT_BY_ID_REQUEST: {
            return {
                ...state,
                processing: true
            }
        }
        case types.GET_PRODUCT_BY_ID_SUCCESS: {
            return {
                ...state,
                currentProduct: action.payload,
                processing: false
            }
        }
        case types.ITEM_ADDED_TO_CART: {
            return {
                ...state,
                products: [
                    ...state.products.map(p => {
                        if (p.id === action.payload) {
                            return {...p, addedToCart: true}
                        }
                        return p
                    })
                ]
                
            }
        }
        case types.ITEM_DELETED_FROM_CART: {
            return {
                ...state,
                products: [
                    ...state.products.map(p => {
                        if (p.id === action.payload) {
                            return {...p, addedToCart: false}
                        }
                        return p
                    })
                ]
                
            }
        }


        
        case types.FILLTER_PRICE_HIGHT_TO_LOW:
            return {
                ...state,
                products: [...state.products.sort((a, b) => b.price - a.price)]
            }
        case types.FILLTER_PRICE_LOW_TO_HIGHT:
            return {
                ...state,
                products: [...state.products.sort((a, b) => a.price - b.price)]
            }
 


        case types.GET_PRODUCT_BY_CATEGORY_SUCCESS: {
            return {
                ...state,
                products: {
                    ...state.products,
                    [action.categoryName]: action.result
                }
            }
        }
        default: 
            return state
    }    

}


export default product