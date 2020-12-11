import React from "react";
import Item from "./Item/Item";

const ItemList = ({ product, addItemToCart }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      {
        product.map(prod => <Item 
            title={ prod.title }
            description={ prod.description }
            image={ prod.image }
            price={ prod.price }
            id={ prod.id }
            key={ prod.id }
            addToCart={ addItemToCart }
            product={ prod }
            addedToCart={ prod.addedToCart }
            
        />)
      } 
    </div>
  )
}

export default ItemList

