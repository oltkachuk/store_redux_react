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
export function setFelterHightToLowAction (payload) {
    return { type: types.FILLTER_PRICE_HIGHT_TO_LOW, payload }
}
export function setFelterLowToHightAction (payload) {
    return { type: types.FILLTER_PRICE_LOW_TO_HIGHT, payload }
}

export function itemAddedToCartAction (payload) {
    return { type: types.ITEM_ADDED_TO_CART, payload }
}
export function itemDeletedFromCartAction (payload) {
    return { type: types.ITEM_DELETED_FROM_CART, payload }
}
