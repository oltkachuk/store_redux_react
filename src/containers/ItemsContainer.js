import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Items from '../components/Items/Items'
import { requestAddItemToCartAction } from '../redux/cart/cartActions'
import { addItemToFavoritesAction } from '../redux/favorites/favoritesActions'
import { changedPageCountAction, getRequestAllProductAction, sortByNewBookRequestAction } from '../redux/porduct/productActions'


const mapStateToProps = (state) => {
	return {
		product: state.product,
		cart: state.cart
	}
}


export default connect(mapStateToProps, {
	getRequestAllProductAction,
	requestAddItemToCartAction,
	changedPageCountAction,
	sortByNewBookRequestAction,
	addItemToFavoritesAction

})(withRouter(Items))