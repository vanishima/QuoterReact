import React from "react";

import QuotesOptions from "components/quotes/QuotesListToolbar/QuotesOptions";
import QuotesFilters from "components/quotes/QuotesListToolbar/QuotesFilters";

const QuotesListToolbar = () => {
  return (
    <div>
      <QuotesOptions />
      <QuotesFilters />
    </div>
  );
};

export default QuotesListToolbar;
