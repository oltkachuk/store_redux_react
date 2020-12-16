import { all, put, takeEvery } from "redux-saga/effects";
import { disabledButtonAddToCartAction, enabledButtonAddToCartAction } from "../porduct/productActions";
import { addItemToCartAction, deleteItemFromCartAction } from "./cartActions";

import * as types from "./cartActionTypes"


function* addedItemToCart(action) {
    try{
        yield put(disabledButtonAddToCartAction(action.payload))
        yield put(addItemToCartAction(action.payload))
    } catch {
        console.log('error added');
    }
}

function* deletedItemFromCart(action) {
    try{
        yield put(enabledButtonAddToCartAction(action.payload))
        yield put(deleteItemFromCartAction(action.payload))
    } catch {
        console.log('error added');
    }
}


export default function* cartSagas() {
    yield all(
        yield takeEvery(types.ADD_ITEM_TO_CART_REQUEST, addedItemToCart),
        yield takeEvery(types.DELETE_ITEM_FROM_CART_REQUEST, deletedItemFromCart)
    )
}