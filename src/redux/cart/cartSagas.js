import { all, put, takeEvery } from "redux-saga/effects";
import { itemAddedToCartAction, itemDeletedFromCartAction } from "../porduct/productActions";
import * as types from "./cartActionTypes"


function* addedItemToCart() {
    try{
        yield put(itemAddedToCartAction(1))
    } catch {
        console.log('error added');
    }
}

function* deletedItemFromCart() {
    try{
        yield put(itemDeletedFromCartAction(2))
    } catch {
        console.log('error deleted');

    }
}


export default function* cartSagas() {
    yield all(
        takeEvery(types.ADD_ITEM_TO_CART, addedItemToCart),
        takeEvery(types.DELETE_ITEM_FROM_CART, deletedItemFromCart)
    )
}