import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav style={{ margin: "auto" }}>
      <ul className="pagination">
        {pages.map(p => (
          <li
            key={p}
            className={p === currentPage ? "page-item active" : "page-item"}
            onClick={() => onPageChange(p)}
            role="presentation"
          >
            <a className="page-link" href={`#${p}`}>
              {p}
            </a>
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
