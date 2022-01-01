import React from "react";

// Element
import Layout from "../components/Layout";
import MyQuotesInfiniteScroll from "./MyQuotesInfiniteScroll";
import DashboardBooks from "../components/DashboardBooks";
import DashboardAuthors from "../components/DashboardAuthors";
import Search from "../components/Search";
// import QuoteEditCard from "../components/quotes/QuoteEditCard";

import "../styles/quotes.css";

const MyQuotes = () => {

  return (
    <Layout currPage={"/my-quotes"}>
      <div className="content-page">
        <div className="row">

          <div className="col-8">
            {/*<QuoteEditCard/>*/}
            <MyQuotesInfiniteScroll/>
          </div>

          <div className="col-4">
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
