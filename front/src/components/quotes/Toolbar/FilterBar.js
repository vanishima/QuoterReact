import React from "react";
import PropTypes from "prop-types";

import QuotesFilters from "components/quotes/QuotesListToolbar/QuotesFilters";

const FilterBar = (props) => {
  const {
    setPage,
    setRefresh,
    sortOrder,
    sort_options,
    setSortOrder,
    limit,
    limit_options,
    setLimit,
  } = props;

  return (
    <div className="btn-group mb-2" role="group">
      FilterBar
      {sort_options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`btn btn-outline-secondary ${
            sortOrder === option.value ? "active" : ""
          }`}
          onClick={() => {
            setSortOrder(option.value);
            if (setRefresh) setRefresh(true);
            if (setPage) setPage(1);
          }}
        >
          {option.name}
        </button>
      ))}
      {limit && (
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {limit}
        </button>
      )}
      {limit && (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {limit_options.map((option) => (
            <li key={option}>
              <button
                value={option}
                className="dropdown-item"
                onClick={(evt) => {
                  setLimit(evt.target.value);
                  if (setRefresh) setRefresh(true);
                  if (setPage) setPage(1);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
      <br />
      <QuotesFilters />
    </div>
  );
};

FilterBar.propTypes = {
  props: PropTypes.shape({
    setPage: PropTypes.func,
    setRefresh: PropTypes.func,
    sortOrder: PropTypes.string,
    sort_options: PropTypes.array,
    setSortOrder: PropTypes.func,
    limit: PropTypes.number,
    limit_options: PropTypes.array,
    setLimit: PropTypes.func,
  }),
};

export default FilterBar;
