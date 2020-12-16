import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changedValueSearchAction, getRequestAllProductAction } from '../redux/porduct/productActions'


const Search = (props) => {
    const onChangeValue = (e) => {
        props.changedValueSearchAction(e.target.value)
    } 
    const onSearchValue = () => {
        const query = props.queryParams
        props.history.push({search: `search=${query.search}&page=${query.page}&pageSize=${query.pageSize}`}) 
        props.getRequestAllProductAction(query) 
    }
    return (
        <div className="d-flex">
            <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                onChange={ onChangeValue }
                value={ props.queryParams.search }

            />
            &nbsp;
            {props.queryParams.search 
                ?(<button 
                    className="btn btn-primary" 
                    onClick={ () => { onSearchValue() } }
                >Search</button>)
                : (
                    <button 
                        className="btn btn-primary disabled" 
                    >Search</button>
                )
            }
            
        </div>
    )
}
const mapStateToProps = (state) => ({ ...state.product })

export default connect(mapStateToProps, {
    changedValueSearchAction,
    getRequestAllProductAction
})(withRouter(Search))