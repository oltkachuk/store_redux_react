import React from "react"

const Item = ({ title, description, imgSrc, price, addToCart, id }) => {
    return (
        <div className="card col item">
            <img src={ imgSrc }
                className="card-img-top"
                alt="..." 
            />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ description }</p>
                <h3>{ price }</h3>
                <button onClick={ () => { addToCart(id) } }>ADD TO CART</button> 
            </div>
        </div>
    )
}

export default Item