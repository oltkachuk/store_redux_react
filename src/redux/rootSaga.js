import { all } from 'redux-saga/effects';
import productSagas from './porduct/productSagas'


export default function* rootSaga() {
    yield all({
        productSagas
    })
}