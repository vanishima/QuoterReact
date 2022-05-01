import React from "react";
import classnames from "classnames/bind";

import styles from "./styles/QuotesSidebar.scss";

const cx = classnames.bind(styles);

const QuotesSidebar = () => {
  return <div className={cx("quotes-side-bar")}>Select Author</div>;
};

export default QuotesSidebar;
