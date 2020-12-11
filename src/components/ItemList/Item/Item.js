import React from "react"
import { NavLink } from "react-router-dom"

const Item = ({ title, description, image, price, addToCart, id, product, addedToCart }) => {
    return (
        <div className="card col item">
            <img src={ image }
                className="card-img-top imag"
                alt="..." 
            />
            <div className="card-body">
                <NavLink to={`/item/${id}`}>
                    <h5 className="card-title">{ title }</h5>
                </NavLink>
                <p className="card-text">{ description }</p>
                <h3>{ price }</h3>
                <button onClick={ () => { addToCart(product) } }>
                    {
                        addedToCart ? <div>Товар в корзині</div> : <div>Добавити товар в корзину</div>
                    }
                </button> 
            </div>
        </div>
    )
}

export default Item