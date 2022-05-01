import React from "react";
import classnames from "classnames/bind";

import styles from "./styles/QuotesFilter.scss";
import AuthorFilter from "components/quotes/QuotesSidebar/AuthorFilter/AuthorFilter";

const cx = classnames.bind(styles);

const QuotesFilter = () => {
  return (
    <div className={cx("quotes-filter")}>
      <AuthorFilter />
    </div>
  );
};

export default QuotesFilter;
