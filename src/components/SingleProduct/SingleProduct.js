import React from 'react'

const SingleProduct = ({ title, description, smImage, price, addToCart, autors, product, addToFavorite }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={ smImage } alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{ title }</h4>
                        <h5 className="card-title">{ autors }</h5>
                        <p className="card-text">{ description }</p>
                        <h3>{ price }</h3>
                        <button
                            className="btn btn-primary"
                            onClick={() => addToCart(product) }
                         >Добавити до корзини</button>
                         &nbsp;
                         <button
                            className="btn btn-success"
                            onClick={() => addToFavorite(product) }
                         >Добавити до улюблених</button>
                    </div>
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct