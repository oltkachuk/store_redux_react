import React from 'react'
import { connect } from 'react-redux'
import CartItems from '../components/Cart.js/CartItems';
import { changeCurrentQuantityAction, requestDeleteItemFromCartAction } from '../redux/cart/cartActions';

const CartContainer = (props) => {
    return (
        <div className="container">
            {props.cart.cartProducts.length === 0 
            ? (<p>Кошик поки що порожній</p>)
            : (
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Назва товару</th>
                        <th scope="col">Картинка товару</th>
                        <th scope="col">Кількість</th>
                        <th scope="col">Ціна (од)</th>
                        <th scope="col">Вартість</th>
                        <th scope="col">Видалити з корзини</th>
                        <th scope="col">Купити</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cart.cartProducts.map((prod, idx) => <CartItems 
                        title={ prod.title }
                        smImage={ prod.smImage }
                        price={ prod.price }
                        id={ prod.id }
                        key={ prod.id }
                        idx={ idx }
                        currency={ prod.currency }
                        currentQuantity={ prod.currentQuantity }
                        deleteFromCart={ props.requestDeleteItemFromCartAction }
                        changeCurrentQuantityAction={ props.changeCurrentQuantityAction }
                    />)}
                </tbody>
            </table>   
            )}
        </div>
        
    )
}



const mapStateToProps = (state) => ({ cart: state.cart })

export default connect(mapStateToProps, {
    requestDeleteItemFromCartAction,
    changeCurrentQuantityAction
})(CartContainer)
