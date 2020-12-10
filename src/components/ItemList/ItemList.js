import React from "react";
import Item from "./Item/Item";

const ItemList = ({ product }) => {
  return (
    <div className="row row-cols-4">
      {
        product.map(prod => <Item 
            title={ prod.title }
            description={ prod.description }
            imgSrc={ prod.image }
            price={ prod.price }
            key={ prod.id }
        />)
      } 
    </div>
  )
}

export default ItemList

