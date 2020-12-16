import React from "react";
import { roundCount } from "../../helper/floorFunc";

const CartItems = ({
  title,
  smImage,
  price,
  currency,
  deleteFromCart,
  id,
  idx,
  currentQuantity,
  changeCurrentQuantityAction,
}) => {
  const changeQuantity = (e) => {
    let quantity = parseInt(e.target.value);
    changeCurrentQuantityAction({ quantity, id, price });
  };
  return (
    <tr>
      <th scope="row">{idx + 1}</th>
      <td>{title}</td>
      <td>
        <img src={smImage} alt={title} className="img-fluid" />
      </td>
      <td>
        <input
          type="number"
          min="1"
          className="form-control"
          value={currentQuantity}
          onChange={(e) => changeQuantity(e)}
        />
      </td>
      <td>
        {price}&nbsp;<span>{currency}</span>
      </td>
      {currentQuantity 
        ?(<td>
            {roundCount((price * currentQuantity), 2)}&nbsp;<span>{currency}</span>
          </td>)
        :(<td>
            {roundCount(price, 2)}&nbsp;<span>{currency}</span>
          </td>)
      }
       <td>
        <button className="btn btn-danger" onClick={() => deleteFromCart(id)}>Видалити</button>
      </td>
       <td>
        <button className="btn btn-primary">Купити</button>
      </td>
    </tr>
  );
};

export default CartItems;
