import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "components/common/Layout";
import QuotesInfiniteScroll from "components/quotes/QuotesInfiniteScroll/QuotesInfiniteScroll";
import NewQuote from "components/quotes/Quote/NewQuote";

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
      <div className="quotes-page">
        <section className="top">
          <NewQuote />
        </section>
        <section className="middle">
          <QuotesInfiniteScroll />
        </section>
      </div>
    </Layout>
  );
};

export default QuotesPage;
