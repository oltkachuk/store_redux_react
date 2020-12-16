import React, { useState } from "react";
import { Link } from "react-router-dom";

const Paginator = ({ totalItems, pageSize, currentPage, callbackPageChange, search, path, querySearch }) => {
  let pagesCount = Math.ceil(totalItems / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionSize = 10;
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        {portionNumber > 1 ? (
          <li className="page-item">
            <button
              className="page-link btn btn-outline-primary"
              onClick={() => setPortionNumber(portionNumber - 1)}
            >
              Previous
            </button>
          </li>
        ) : (
          <li className="page-item disabled">
            <button className="page-link btn btn-outline-primary">Previous</button>
          </li>
        )}
        {pages
          .filter((page) => page >= leftPortionNumber && page <= rightPortionNumber)
          .map((page, idx) => {
            return (
              <li
                className={currentPage === page ? "page-item active" : "page-item"}
                onClick={() => {
                  callbackPageChange({search, page, pageSize})
                }}
                key={idx}
              >
                <Link className="page-link" to={`${path}?${search}&page=${page}`}>
                  {page}
                </Link>
              </li>
            );
          })}
        {portionCount > portionNumber ? (
          <li className="page-item">
            <button
              className="page-link btn btn-outline-primary"
              onClick={() => setPortionNumber(portionNumber + 1)}
            >
              Next
            </button>
          </li>
        ) : (
          <li className="page-item disabled">
            <button className="page-link btn btn-outline-primary">Next</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginator;
