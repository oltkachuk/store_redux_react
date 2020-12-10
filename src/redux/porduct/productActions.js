import * as types from "./productActionTypes"

export function getProductsByCategoryAction (payload) {
    return { type: types.GET_PRODUCT_BY_CATEGORY_REQUEST, payload }
}

export function getAllProductAction (payload) {
    return { type: types.GET_ALL_PRODUCTS_SUCCESS, payload }
}
export function getRequestAllProductAction () {
    return { type: types.GET_ALL_PRODUCTS_REQUEST }
}

export function getRequestProductByIdAction (payload) {
    return { type: types.GET_PRODUCT_BY_ID_REQUEST, payload }
}
export function getProductByIdAction (payload) {
    return { type: types.GET_PRODUCT_BY_ID_SUCCESS, payload }
}

