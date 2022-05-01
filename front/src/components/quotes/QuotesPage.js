import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";

import Layout from "components/common/Layout";
import QuotesInfiniteScroll from "components/quotes/QuotesInfiniteScroll/QuotesInfiniteScroll";
import NewQuoteBar from "components/quotes/Quote/NewQuoteBar";

import { fetchBooks } from "reducers/books/actions";
import { fetchAuthors } from "reducers/authors/actions";
import { fetchTags } from "reducers/tags/actions";

import "./styles/QuotesPage.css";
import { selectIsDarkMode } from "reducers/theme/selectors";
// import QuotesSidebar from "./QuotesSidebar/QuotesSidebar";

const QuotesPage = ({ isDarkMode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchAuthors());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Layout>
      <div className="quotes-page">
        {/* <div className="side-bar">
          <QuotesSidebar />
        </div> */}
        <div className="top">
          <NewQuoteBar />
        </div>
        <div className="middle">
          <QuotesInfiniteScroll />
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
  isDarkMode: selectIsDarkMode(state),
});

export default connect(mapStateToProps)(QuotesPage);
