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
            return {
                ...state,
                products: [
                    ...state.products,
                    ...action.payload
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