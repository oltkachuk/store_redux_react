import * as types from "./favoritesActionTypes"

const initialState = {
    favoriteProducts: []
}


const favorite = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ITEM_TO_FAVORITES: {
            if (state.favoriteProducts.find( el => el === action.payload)) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    favoriteProducts: [...state.favoriteProducts, action.payload]
                }
            }
        }
        case types.DELETE_ITEM_FROM_FAVORITES: {
            return {
                ...state,
                favoriteProducts: [...state.favoriteProducts.filter(p => p.id !== action.payload)]
            }
        }
        default:
            return state
    }
}

export default favorite