import React from 'react'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/loader'

class Items extends React.Component {
    componentDidMount() {
        const query = this.props.product.queryParams
        this.props.history.push({search: `search=${query.search}&orderBy=${query.orderBy}`})
        this.props.product.products.length === 0 && this.props.getRequestAllProductAction(query)
    }
    render() {
        return(
            <div className="container-sm">
                { this.props.product.processing
                    ? <Loader />
                    : <ItemList 
                        product={this.props.product.products} 
                        addItemToCart={this.props.requestAddItemToCartAction}
                        totalItems={this.props.product.totalItems}
                        currentPage={this.props.product.queryParams.page}
                        pageSize={this.props.product.queryParams.pageSize}
                        orderBy={this.props.product.queryParams.orderBy}
                        search={this.props.product.queryParams.search}
                        callbackPageChange={this.props.changedPageCountAction}
                        path={this.props.match.path}
                        addItemToFavoritesAction={this.props.addItemToFavoritesAction}
                        sortCallback={this.props.sortByNewBookRequestAction}
                        showsSort={true}
                    />
                }
            </div>
        )
    }
}

export default Items