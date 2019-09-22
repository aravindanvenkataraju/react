import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  //console.log("currentPage", currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return pagesCount === 1 ? null : (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <button
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
              style={{ cursor: "pointer" }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default Pagination;
