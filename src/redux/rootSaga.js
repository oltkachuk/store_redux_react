import { all } from 'redux-saga/effects';
import cartSagas from './cart/cartSagas';
import productSagas from './porduct/productSagas'


export default function* rootSaga() {
    yield all([
        productSagas(),
        cartSagas()
    ])
}