import React from "react";
import { useSelector } from "react-redux";
import { getRelativeTime } from "api/utilsAPI";
import { selectShowDate } from "reducers/theme/selectors";

import "./styles/QuoteDate.css";

const QuoteDate = ({ date }) => {
    const showDate = useSelector(selectShowDate);

    if(!showDate)return null;
    return <div className="quote-date">{getRelativeTime(date)}</div>;
  
};

export default QuoteDate;
