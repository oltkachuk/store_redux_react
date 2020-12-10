import { connect } from 'react-redux'
import Items from '../components/Items/Items'
import { getRequestAllProductAction, getRequestProductByIdAction } from '../redux/porduct/productActions'


const mapStateToProps = (state) => {
	return {
		product: state.product
	}
}
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getRequestToItems: () => dispatch(getRequestAllProductAction())
// 	}
// }


export default connect(mapStateToProps, {
	getRequestAllProductAction,
	getRequestProductByIdAction
})(Items)