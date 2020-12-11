import * as types from "./cartActionTypes"

export function addItemToCartAction (payload) {
    return { type: types.ADD_ITEM_TO_CART, payload }
}
export function deleteItemFromCartAction (payload) {
    return { type: types.DELETE_ITEM_FROM_CART, payload }
}

