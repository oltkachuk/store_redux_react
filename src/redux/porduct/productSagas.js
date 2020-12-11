import { all, call, put, takeEvery } from "redux-saga/effects"
import { getItemById, getItems } from "../../libs/items";
import { getAllProductAction, getProductByIdAction } from "./productActions";
import * as types from "./productActionTypes"


function* getAllProduct() {
    try {
        const data = yield call(getItems)
        yield put(getAllProductAction(data))
    } catch {
        yield console.log('error getAllProduct');
    }
}

function* getProductById(action) {
    try {
        const data = yield call(getItemById, action.payload)
        console.log(data);
        yield put(getProductByIdAction(data))

    } catch {
        yield console.log('error getProductById');
    }
}


export default function* productSagas () {
    yield all(
        yield takeEvery(types.GET_ALL_PRODUCTS_REQUEST, getAllProduct),
        yield takeEvery(types.GET_PRODUCT_BY_ID_REQUEST, getProductById)
    )
}

