import { all, call, put, takeEvery } from "redux-saga/effects"
import { getItemById, getItems, getSortItems } from "../../libs/items";
import { getAllProductAction, getProductByIdAction, sortByNewBookSuccessAction } from "./productActions";
import * as types from "./productActionTypes"


function* getAllProduct(action) {
    try {
        const data = yield call(getItems, action.payload)
        yield put(getAllProductAction(data))
    } catch {
        yield console.log('error getAllProduct');
    }
}

function* getProductById(action) {
    try {
        const data = yield call(getItemById, action.payload)
        yield put(getProductByIdAction(data))

    } catch {
        yield console.log('error getProductById');
    }
}
function* sortByNewBook(action) {
    try {
        const data = yield call(getSortItems, action.payload)
        yield put(sortByNewBookSuccessAction(action.payload))
        yield put(getAllProductAction(data))
    } catch {
        yield console.log('error getAllProduct');
    }
}   




export default function* productSagas () {
    yield all(
        yield takeEvery(types.GET_ALL_PRODUCTS_REQUEST, getAllProduct),
        yield takeEvery(types.GET_PRODUCT_BY_ID_REQUEST, getProductById),
        yield takeEvery(types.CHANGED_PAGE_COUNT, getAllProduct),
        yield takeEvery(types.SORT_BY_NEW_BOOK_REQUEST, sortByNewBook),
    )
}

