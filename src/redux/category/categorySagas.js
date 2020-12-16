import { all, call, put, takeEvery } from "redux-saga/effects"
import { getItemsByCategoryName } from "../../libs/items";
import * as types from "./categoryActionTypes"
import { getProductsByCategoryAction } from "./categoryActions";


function* getProductByCategory(action) {
    try {
        const data = yield call(getItemsByCategoryName, action.payload)
        yield put(getProductsByCategoryAction(data))
    } catch {
        yield console.log('error getProductByCategory');
    }
}

function* getAllProductByCategory(action) {
    try {
        console.log(action.payload);
        const data = yield call(getItemsByCategoryName, action.payload)
        yield put(getProductsByCategoryAction(data))
    } catch {
        yield console.log('error getProductByCat');
    }
}
  

export default function* categorySagas () {
    yield all(
        yield takeEvery(types.GET_PRODUCT_BY_CATEGORY_REQUEST, getProductByCategory),
        yield takeEvery(types.CHANGED_PAGE_CATRGORY_COUNT, getAllProductByCategory),
    )
}

