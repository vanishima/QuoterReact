import React, { useEffect } from "react";
import { connect } from "react-redux";

import Layout from "components/common/Layout";
import QuotesInfiniteScroll from "components/quotes/Quotes/QuotesInfiniteScroll/QuotesInfiniteScroll";
import { fetchQuotes } from "reducers/quotes/actions";

const QuotesPage = ({ dispatch, quotes, loading, hasErrors, token }) => {
  // console.log("currentUser", currentUser, "token", token);

  useEffect(() => {
    console.log("### QuotesPage EFFECT");
    dispatch(fetchQuotes(token, 7, 1));
  }, [dispatch, token]);

  console.log("quotes", quotes.length, quotes);

  return (
    <Layout>
      {/* Filter bar */}
      {/* Infinite Scroll of quotes */}
      <QuotesInfiniteScroll />
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
