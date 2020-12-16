import { combineReducers } from "redux";
import cart from "./cart/cartReducer";
import categoryProduct from "./category/categoryReducer";
import favorite from "./favorites/favoritesReducer";
import product from "./porduct/productReducer";




export default combineReducers({
    product,
    cart,
    categoryProduct,
    favorite
})