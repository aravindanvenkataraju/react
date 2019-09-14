import React from "react";
import _ from "lodash";
const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return pagesCount === 1 ? null : (
    <nav>
      <ul class="pagination">
        {pages.map(page => (
          <li class="page-item" key={page}>
            <a class="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
