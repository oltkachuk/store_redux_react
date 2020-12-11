import React from 'react'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/loader'

class Items extends React.Component {
    componentDidMount() {
        if (this.props.product.products.length === 0) {
            this.props.getRequestAllProductAction()
        }
    }
    render() {
        return(
            <div className="container-sm">
                { this.props.product.processing
                    ? <Loader />
                    : <ItemList 
                        product={this.props.product.products} 
                        addItemToCart={this.props.addItemToCartAction} 
                    />
                }
            </div>
        )
    }
}

export default Items