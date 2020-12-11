import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'




const initialSagaMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(initialSagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

initialSagaMiddleware.run(rootSaga)



export default store

