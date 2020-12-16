import React from 'react'
import { connect } from 'react-redux'
import Favorites from '../components/Favorites/Favorites'
import { requestAddItemToCartAction } from '../redux/cart/cartActions'
import { deleteItemToFavoritesAction } from '../redux/favorites/favoritesActions'

const FavoritesContaier = ({favoriteProducts , deleteItemToFavoritesAction, requestAddItemToCartAction}) => {
    return(
        <div className="container">
            {favoriteProducts.length === 0
                ? (<div>Ви не добавили жодного продукту у список обраних</div>)
                : (favoriteProducts.map((prod, idx) => <Favorites 
                    title={ prod.title }
                    description={ prod.description }
                    smImage={ prod.smImage }
                    price={ prod.price }
                    autors={ prod.autors }
                    removeProduct={deleteItemToFavoritesAction}
                    id={ prod.id }
                    key={ idx }
                    currency={ prod.currency }
                    product={ prod }
                    addItemToCart={ requestAddItemToCartAction }
                /> 
                ))
            }
            
        </div>
    )
}

const mapStateToProps = (state) => ({ ...state.favorite })

export default connect(mapStateToProps, {
    deleteItemToFavoritesAction,
    requestAddItemToCartAction
})(FavoritesContaier) 