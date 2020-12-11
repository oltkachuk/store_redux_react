import React from 'react'

const CartProduct = ({ title, description, image, price, removeProduct, id }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={ image } alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">{ description }</p>
                        <h3>{ price }</h3>
                        <button onClick={() => removeProduct(id) }>Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct