import React from "react";
import { useSelector } from "react-redux";
import { selectShowTitle } from "reducers/theme/selectors";

import "./styles/QuoteHeader.css";

const QuoteHeader = ({ quoteId, title }) => {
  const showTitle = useSelector(selectShowTitle);

  if ((!quoteId || showTitle) && title) {
    return (
      <div className="card-header quote-header">
        <span className="quote-title">{title}</span>
      </div>
    );
  }
  return null;
};

export default QuoteHeader;
