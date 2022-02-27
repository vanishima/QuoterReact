import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import Layout from "components/common/Layout";
import QuotesInfiniteScroll from "components/quotes/Quotes/QuotesInfiniteScroll/QuotesInfiniteScroll";
import NewQuote from "components/quotes/NewQuote/NewQuote";

import { fetchBooks } from "reducers/books/actions";
import { fetchAuthors } from "reducers/authors/actions";
import { fetchTags } from "reducers/tags/actions";
import { fetchLabels } from "reducers/labels/actions";

import "./styles/QuotesPage.css";

const QuotesPage = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchAuthors());
    dispatch(fetchTags());
    dispatch(fetchLabels());
  }, [dispatch]);

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
