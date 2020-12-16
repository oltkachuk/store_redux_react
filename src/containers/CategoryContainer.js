import React from 'react'
import { connect } from 'react-redux'
import Category from '../components/Category/Category';
import setUniqCategory from '../helper/setCategory'
import { getRequestProductsByCategoryAction } from '../redux/category/categoryActions';

const CategoryContainer = (props) => {

    let categorySet = setUniqCategory(props.products)
    let uniqeCategory = []
    for (let item of categorySet.keys()) { uniqeCategory.push(item) }
    return (
        <ul className="list-group container">
            <Category 
                uniqeCategory={uniqeCategory}
                getRequestProductsByCategoryAction={props.getRequestProductsByCategoryAction}
            />
        </ul>
    )
}

const mapStateToProps = (state) => ({ ...state.product, ...state.category })

export default connect(mapStateToProps, {
    getRequestProductsByCategoryAction 
})(CategoryContainer)