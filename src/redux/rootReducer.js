import { combineReducers } from "redux";
import cart from "./cart/cartReducer";
import product from "./porduct/productReducer";



export default combineReducers({
    product,
    cart
})