import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  //   [1,2,3,4,5...]
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((page, index) => (
            <li
              style={{ cursor: "pointer" }}
              key={index}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a href="#!" className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
