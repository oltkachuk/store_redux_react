import * as types from "./favoritesActionTypes"

export function addItemToFavoritesAction (payload) {
    return { type: types.ADD_ITEM_TO_FAVORITES, payload }
}

export function deleteItemToFavoritesAction (payload) {
    return { type: types.DELETE_ITEM_FROM_FAVORITES, payload }
}