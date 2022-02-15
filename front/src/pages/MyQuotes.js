import React from "react";

// Element
import Layout from "components/common/Layout";
import QuotesInfiniteScroll from "components/quotes/Quotes/QuotesInfiniteScroll/QuotesInfiniteScroll";
import DashboardBooks from "../components/DashboardBooks";
import DashboardAuthors from "../components/DashboardAuthors";
import Search from "../components/common/Search";
import QuotesSideBar from "components/quotes/QuotesSideBar/QuotesSideBar";

// import "../styles/quotes.css";

const MyQuotes = () => {
  return (
    <Layout currPage={"/my-quotes"}>
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
    </Layout>
  );
};

export default MyQuotes;
