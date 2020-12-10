const SET_ITEMS = "SET_ITEMS"
const HIGHT_TO_LOWER = "HIGHT_TO_LOWER"
const LOWER_TO_HIGHT = "LOWER_TO_HIGHT"

export const ItemsActionsCreater = () => ({type: SET_ITEMS})
export const SortHightToLowerAC = () => ({type: HIGHT_TO_LOWER})
export const SortLowerToHightAC = () => ({type: LOWER_TO_HIGHT})

const InitialState = {
    isReady: false,
    items: [
        {id: 1, title: 'Product 1', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 1', price: 200},
        {id: 2, title: 'Product 2', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 2', price: 400},
        {id: 3, title: 'Product 3', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 3', price: 300},
        {id: 4, title: 'Product 4', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 4', price: 1000},
        {id: 5, title: 'Product 5', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 5', price: 800},
        {id: 6, title: 'Product 6', srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', descript: 'Describe to product 6', price: 1200}
    ]
}

function ItemsReducer( state = InitialState, action) {
    switch (action.type) {
        case HIGHT_TO_LOWER:
            return {
                ...state,
                items: [...state.items.sort((a, b) => b.price - a.price)]
            }
        case LOWER_TO_HIGHT:
            return {
                ...state,
                items: [...state.items.sort((a, b) => a.price - b.price)]
            }
        case SET_ITEMS:
            return {
                ...state,
                items: [...state.items, {
                    id: 7, 
                    title: 'Product 7', 
                    srcImg: 'https://st.depositphotos.com/2026267/2280/i/950/depositphotos_22807282-stock-photo-online-shop.jpg', 
                    descript: 'Describe to product 7', 
                    price: 20}],
                isReady: true
            }
    
        default:
            return state
    }
}

export default ItemsReducer