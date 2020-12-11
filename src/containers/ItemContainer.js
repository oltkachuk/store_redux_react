import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/ItemList/Item/Item'
import Loader from '../components/Loader/loader'
import { addItemToCartAction } from '../redux/cart/cartActions'

import { getRequestProductByIdAction } from '../redux/porduct/productActions'

class ItemContainer extends React.Component {
	componentDidMount() {
		this.props.getRequestProductByIdAction(this.props.match.params.id)
	}
	render() {
		return (
			<div className="container">
				{this.props.product.processing
					? <Loader />
					: <Item 
						{...this.props.product.currentProduct} 
						addToCart={ this.props.addItemToCartAction }
						product={ this.props.product.currentProduct }
					/>
				}
			</div>
		)
	}
}


const mapStateToProps = (state) => ({ product: state.product })

export default connect(mapStateToProps, {
	getRequestProductByIdAction,
	addItemToCartAction
})(ItemContainer)