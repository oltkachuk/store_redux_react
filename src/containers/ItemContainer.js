import { connect } from 'react-redux'
import Item from '../components/ItemList/Item/Item'

import { getRequestAllProductAction } from '../redux/porduct/productActions'


const mapStateToProps = (state) => ({ product: state.product })
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getRequestToItems: () => dispatch(getRequestAllProductAction())
// 	}
// }


export default connect(mapStateToProps, {
	getRequestAllProductAction
})(Item)