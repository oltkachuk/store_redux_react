import helperFeilterApiResponse from "../../helper/helperFilterApiResponse"
import * as types from "./productActionTypes"

const initialState = {
    products: [],
    queryParams: {
        search: "javascript",
        page: 1,
        pageSize: 16,
        orderBy: "relevance"
    },
    totalItems: 0,
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
            const response = helperFeilterApiResponse(action.payload)
            return {
                ...state,
                products: [
                    ...response.items
                ],
                queryParams: {...state.queryParams },
                processing: false,
                totalItems: action.payload.totalItems
            }
        }
        case types.GET_PRODUCT_BY_ID_REQUEST: {
            return {
                ...state,
                processing: true
            }
        }
        case types.GET_PRODUCT_BY_ID_SUCCESS: {
            let response = helperFeilterApiResponse(action.payload)
            return {
                ...state,
                currentProduct: response,
                processing: false
            }
        }
        case types.DISABLED_BUTTON_ADD_TO_CART: {
            return {    
                ...state,
                products: [...state.products.map(p => {
                    if (p.id === action.payload.id) {
                        p.isAddedToCart = true
                    }
                    return p
                }) ]
            }
        }
        case types.ENABLED_BUTTON_ADD_TO_CART: {
            return {    
                ...state,
                products: [...state.products.map(p => {
                    if (p.id === action.payload) {
                        p.isAddedToCart = false
                    }
                    return p
                }) ]
            }
        }
        case types.CHANGED_PAGE_COUNT: {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams, page: action.payload.page
                }
            }
        }
        case types.CHANGED_CURRENT_SEARCH_VALUE: {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    search: action.payload
                }
            }
        }
        case types.SORT_BY_NEW_BOOK_REQUEST: { 
            return {
                ...state,
                processing: true
            }
        }
        case types.SORT_BY_NEW_BOOK_SUCCESS: {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    orderBy: action.payload.orderBy
                },
                processing: false
            }
        }
        case types.GO_HOME: {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    page: action.payload
                }

            }
        }
        default: 
            return state
    }    

}


export default product