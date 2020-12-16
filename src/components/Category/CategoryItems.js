import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { requestAddItemToCartAction } from '../../redux/cart/cartActions'
import { changePageCategoryCountAction, getRequestProductsByCategoryAction } from '../../redux/category/categoryActions'
import { addItemToFavoritesAction } from '../../redux/favorites/favoritesActions'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/loader'


class CategoryItems extends React.Component {
    componentDidMount() {
        let search = this.props.match.params.categoryName
        let page = this.props.queryCategoryParams.page
        let pageSize = this.props.queryCategoryParams.pageSize
        this.props.getRequestProductsByCategoryAction({search, page, pageSize})        
    }
    render() {
        return (
            <div className="container-sm">
                {this.props.processing
                    ? <Loader />
                    :<ItemList 
                        product={this.props.categoryItems}
                        addItemToCart={this.props.requestAddItemToCartAction}
                        totalItems={this.props.totalItems}
                        currentPage={this.props.queryCategoryParams.page}
                        pageSize={this.props.queryCategoryParams.pageSize}
                        search={this.props.queryCategoryParams.search}
                        callbackPageChange={this.props.changePageCategoryCountAction}
                        path={this.props.match.url}
                        orderBy={this.props.queryCategoryParams.orderBy}
                        sortCallback={this.props.sortByNewBookForCategoryRequestAction}
                        showsSort={false}
                        addItemToFavoritesAction={this.props.addItemToFavoritesAction}
                    />
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ ...state.categoryProduct })

export default connect(mapStateToProps, {
    requestAddItemToCartAction,
    getRequestProductsByCategoryAction,
    changePageCategoryCountAction,
    addItemToFavoritesAction
})(withRouter(CategoryItems))