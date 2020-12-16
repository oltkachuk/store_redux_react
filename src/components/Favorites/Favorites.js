import React from "react";

const Favorites = ({
  title,
  description,
  smImage,
  price,
  removeProduct,
  addItemToCart,
  id,
  currency,
  product,
  autors,
}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={smImage} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h5 className="card-title">{autors}</h5>
            <p className="card-text">{description}</p>
            <h3>{price}&nbsp;<span>{ currency }</span></h3>
            <button 
              onClick={() => addItemToCart(product)}
              className="btn btn-primary"
            >Добавити до корзини</button>
            &nbsp;
            <button 
              onClick={() => removeProduct(id)}
              className="btn btn-danger"
            >
              Видалити із обраних
            </button>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Favorites
