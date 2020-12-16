import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({
  title = "title",
  subtitle,
  smImage,
  price,
  addToCart,
  id,
  product,
  isAddedToCart,
  currency,
  autors,
  addToFavorite,
  publishDate
}) => {
  return (
    <div className="card col itemList d-flex">
        <div className='mx-auto'>
          <img src={smImage} className="card-img-top imag" alt="..." />
        </div>
        <div className="card-body mx-auto">
          <NavLink to={`/item/${id}`}>
            <h5 className="card-title">{title}</h5>
          </NavLink>
          <p className="card-text">{subtitle}</p>
          <h5>Автори: { autors ? autors : 'невідомі' }</h5>
          <h3>
            {price} {currency}
          </h3>
          <small>Дата публікації { publishDate ? publishDate : 'невідома' } </small>
        </div>
        <div className="btn-group card-footer d-flex flex-row-reverse bd-highlight">
          <button
            className="btn btn-success"
            onClick={() => addToFavorite(product)}
          >
            Добавити в обрані
          </button>
          &nbsp;
          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart(product);
            }}
          >
            {isAddedToCart ? (
              <div>Товар в корзині</div>
            ) : (
              <div>Добавити в корзину</div>
            )}
          </button>
        </div>
    </div>
  );
};

export default Item;
