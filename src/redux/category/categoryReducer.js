import helperFeilterApiResponse from "../../helper/helperFilterApiResponse"
import * as types from "./categoryActionTypes"

const initialState = {
    categoryItems: [],
    queryCategoryParams: {
        search: '',
        page: 1,
        pageSize: 20,
        orderBy: "relevance"
    },
    totalItems: 0,
    processing: false,
    currentProduct: null
}


const categoryProduct = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_BY_CATEGORY_REQUEST: {
            return {
                ...state,
                processing: true,
                queryCategoryParams: {...state.queryCategoryParams, search: action.payload.search}            
            }
        }
        case types.GET_PRODUCT_BY_CATEGORY_SUCCESS: {
            let response = helperFeilterApiResponse(action.payload)
            return {
                ...state,
                categoryItems: [
                    ...response.items
                ],
                processing: false,
                totalItems: action.payload.totalItems
            }
        }
        case types.CHANGED_PAGE_CATRGORY_COUNT: {
            return {
                ...state,
                queryCategoryParams: {
                    ...state.queryCategoryParams, page: action.payload.page
                }
            }
        }
        default: 
            return state
    }    

}

export default categoryProduct