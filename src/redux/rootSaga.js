import { all } from 'redux-saga/effects';
import cartSagas from './cart/cartSagas';
import categorySagas from './category/categorySagas';
import productSagas from './porduct/productSagas'


export default function* rootSaga() {
    yield all([
        productSagas(),
        cartSagas(),
        categorySagas()
    ])
}