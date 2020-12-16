import * as types from "./productActionTypes"


export function getAllProductAction(payload) {
    return { type: types.GET_ALL_PRODUCTS_SUCCESS, payload }
}
export function getRequestAllProductAction(payload) {
    return { type: types.GET_ALL_PRODUCTS_REQUEST, payload }
}

export function getRequestProductByIdAction(payload) {
    return { type: types.GET_PRODUCT_BY_ID_REQUEST, payload }
}
export function getProductByIdAction(payload) {
    return { type: types.GET_PRODUCT_BY_ID_SUCCESS, payload }
}

export function disabledButtonAddToCartAction (payload) {
    return { type: types.DISABLED_BUTTON_ADD_TO_CART, payload }
}

export function enabledButtonAddToCartAction (payload) {
    return { type: types.ENABLED_BUTTON_ADD_TO_CART, payload }
}

export function changedValueSearchAction (payload) {
    return { type: types.CHANGED_CURRENT_SEARCH_VALUE, payload }
}


export function changedPageCountAction(payload) {
    return {type: types.CHANGED_PAGE_COUNT, payload}
}
export function sortByNewBookRequestAction(payload) {
    return {type: types.SORT_BY_NEW_BOOK_REQUEST, payload}
}
export function sortByNewBookSuccessAction(payload) {
    return {type: types.SORT_BY_NEW_BOOK_SUCCESS, payload}
}

export function goHomeAction(payload) {
    return {type: types.GO_HOME, payload}
}




