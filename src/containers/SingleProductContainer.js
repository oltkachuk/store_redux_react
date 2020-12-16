import React from 'react'
import { connect } from 'react-redux'
import SingleProduct from '../components/SingleProduct/SingleProduct'

import Loader from '../components/Loader/loader'
import { requestAddItemToCartAction } from '../redux/cart/cartActions'
import { addItemToFavoritesAction } from '../redux/favorites/favoritesActions'


import { getRequestProductByIdAction } from '../redux/porduct/productActions'

class SingleProductContainer extends React.Component {
	componentDidMount() {
		this.props.getRequestProductByIdAction(this.props.match.params.id)
		if (this.props.match.params.added) {
			this.props.product.currentProduct = {...this.props.product.currentProduct, isAddedToCart: this.props.match.params.added }
		}

	}
	render() {
		return (
			<div className="container">
				{this.props.product.processing
					? <Loader />
					: <SingleProduct 
						{...this.props.product.currentProduct}	
						product={this.props.product.currentProduct}	
						addToCart={this.props.requestAddItemToCartAction}
						addToFavorite={this.props.addItemToFavoritesAction}			
					/>
				}
			</div>
		)
	}
}


const mapStateToProps = (state) => ({ product: state.product })

export default connect(mapStateToProps, {
	getRequestProductByIdAction,
	requestAddItemToCartAction,
	addItemToFavoritesAction
})(SingleProductContainer)