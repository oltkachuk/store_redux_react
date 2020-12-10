import ItemsReducer from "./reducers/items";
import CartReducer from "./reducers/cart";
import { createStore, combineReducers } from "redux";




let redusers = combineReducers({
   items: ItemsReducer,
   cart: CartReducer
}) 


let store = createStore(redusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
