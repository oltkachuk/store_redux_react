import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'
import productSagas from './porduct/productSagas'




const initialSagaMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(initialSagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

initialSagaMiddleware.run(productSagas)



export default store

