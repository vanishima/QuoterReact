import React from "react";
import { connect } from "react-redux";

import Layout from "components/common/Layout";
import QuotesInfiniteScroll from "components/quotes/Quotes/QuotesInfiniteScroll/QuotesInfiniteScroll";
import NewQuote from "components/quotes/NewQuote/NewQuote";

import "./styles/QuotesPage.css";

const QuotesPage = props => {
  return (
    <Layout>
      <section className="top">
        <NewQuote />
      </section>
      <section className="middle">
        {/* Infinite Scroll of quotes */}
        <QuotesInfiniteScroll />
      </section>
      {/* Filter bar */}
    </Layout>
  );
};

const mapStateToProps = state => ({
  quotes: state.quotes.quotes,
  loading: state.quotes.loading,
  hasErrors: state.quotes.hasErrors,
  token: state.user.token,
});

export default connect(mapStateToProps)(QuotesPage);
