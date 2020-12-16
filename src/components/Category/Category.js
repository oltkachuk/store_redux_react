import React from "react";
import { NavLink, Redirect } from "react-router-dom";

const Category = (props) => {
  return (
    <React.Fragment>
      {props.uniqeCategory.length !== 0 ? (
        props.uniqeCategory.map((category, idx) => {
          return (
            <NavLink 
              to={`/categories/${category}`}
              key={ idx }
            ><button
              type="button"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              {category}
            </button></NavLink>
          );
        })
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  )
}


export default Category 