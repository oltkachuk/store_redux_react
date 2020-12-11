import React from 'react'
import { connect } from 'react-redux'
import CartProduct from '../components/Cart.js/CartProduct'
import { deleteItemFromCartAction } from '../redux/cart/cartActions';

const CartContainer = (props) => {
    console.log(props.cart.cartProducts);
    return (
        <div className="container">
            {props.cart.cartProducts.length === 0 
                ? <p>Кошик поки що порожній</p>
                : props.cart.cartProducts.map(prod => <CartProduct 
                    title={ prod.title }
                    description={ prod.description }
                    image={ prod.image }
                    price={ prod.price }
                    id={ prod.id }
                    key={ prod.id }
                    removeProduct={ props.deleteItemFromCartAction }
                /> )
            }
        </div>
    )
}


const mapStateToProps = (state) => ({ cart: state.cart })

export default connect(mapStateToProps, {
    deleteItemFromCartAction
})(CartContainer)
