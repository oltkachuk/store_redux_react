import * as types from "./categoryActionTypes"

export function getRequestProductsByCategoryAction(payload) {
    return { type: types.GET_PRODUCT_BY_CATEGORY_REQUEST, payload }
}
export function getProductsByCategoryAction(payload) {
    return { type: types.GET_PRODUCT_BY_CATEGORY_SUCCESS, payload }
}

export function changePageCategoryCountAction(payload) {
    return { type: types.CHANGED_PAGE_CATRGORY_COUNT, payload }
}



