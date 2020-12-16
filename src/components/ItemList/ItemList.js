import React from "react";
import { Link, withRouter } from "react-router-dom";
import Paginator from "../Paginator.js/Paginator";
import Item from "./Item/Item";

const ItemList = (props) => {
  const orderBy = props.orderBy === "relevance" ? "newest" : "relevance";
  const search = props.search;
  const page = props.currentPage;
  const pageSize = props.pageSize;
  return (
    <React.Fragment>
      {props.showsSort && (
        <Link to={`${props.path}?search=${search}&orderBy=${orderBy}`}>
          <button
            className="btn btn-outline-primary sort"
            onClick={() =>
              props.sortCallback({ orderBy, search, page, pageSize })
            }
          >
            {props.orderBy === "relevance" ? (
              <span>Сортувати по нових книгах</span>
            ) : (
              <span>Зняти сортування</span>
            )}
          </button>
        </Link>
      )}
       <Paginator
        totalItems={props.totalItems}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        callbackPageChange={props.callbackPageChange}
        search={props.search}
        querySearch={props.location.search}
        path={props.path}
      />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {props.product.map((prod) => (
          <Item
            title={prod.title}
            description={prod.description}
            smImage={prod.smImage}
            price={prod.price}
            currency={prod.currency}
            id={prod.id}
            key={prod.id}
            addToCart={props.addItemToCart}
            product={prod}
            autors={prod.autors}
            publishDate={prod.publishDate}
            addToFavorite={props.addItemToFavoritesAction}
            subtitle={prod.subtitle}
            isAddedToCart={prod.isAddedToCart}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default withRouter(ItemList);
