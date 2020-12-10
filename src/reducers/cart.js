const ADD_TO_CART = "ADD_TO_CART"

export const AddToCartAC = (id) => ({type: ADD_TO_CART, id})

const InitialState = {
    isReady: false,
    itemsCart: [], 
    items: [
        {id: 1, title: 'Product 1', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 1', price: 200},
        {id: 2, title: 'Product 2', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 2', price: 400},
        {id: 3, title: 'Product 3', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 3', price: 300},
        {id: 4, title: 'Product 4', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 4', price: 1000},
        {id: 5, title: 'Product 5', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 5', price: 800},
        {id: 6, title: 'Product 6', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 6', price: 1200}
    ]
}

function CartReducer( state = InitialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let addToCart = state.items.filter(item => item.id === action.id)
            if (state.itemsCart.find(itemCart => itemCart.id === action.id)) {
                return state
            } else {
                return {
                    ...state,
                    itemsCart: [...state.itemsCart, ...addToCart]
                }
            }
        default:
            return state
    }
}

export default CartReducer