import React from "react";

// Element
import QuotesInfiniteScroll from "components/quotes/Quotes/QuotesInfiniteScroll";
import DashboardBooks from "../components/DashboardBooks";
import DashboardAuthors from "../components/DashboardAuthors";
import Search from "../components/common/Search";
import QuotesSideBar from "components/quotes/QuotesSideBar/QuotesSideBar";

import "../styles/quotes.css";

const MyQuotes = () => {
  return (
    <div>
      <div className="content-page">
        <div className="row">
          <div className="col-2">
            <QuotesSideBar />
          </div>
          <div className="col-8">
            <QuotesInfiniteScroll />
          </div>

          <div className="col-2">
            <Search />
            <DashboardBooks />
            <DashboardAuthors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQuotes;
