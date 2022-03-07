import React from "react";
import { useSelector } from "react-redux";
import { selectShowTitle } from "reducers/theme/selectors";

const QuoteHeader = ({ quoteId, title }) => {
  const showTitle = useSelector(selectShowTitle);

  if ((!quoteId || showTitle) && title) {
    return <div className="card-header">{title}</div>;
  }
  return null;
};

export default QuoteHeader;
