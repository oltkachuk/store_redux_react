import { connect } from 'react-redux'
import Items from '../components/Items/Items'
import { addItemToCartAction } from '../redux/cart/cartActions'
import { getRequestAllProductAction, itemAddedToCartAction, itemDeletedFromCartAction,  } from '../redux/porduct/productActions'


const mapStateToProps = (state) => {
	return {
		product: state.product,
		cart: state.cart
	}
}


export default connect(mapStateToProps, {
	getRequestAllProductAction,
	addItemToCartAction,
	itemAddedToCartAction,
	itemDeletedFromCartAction
})(Items)