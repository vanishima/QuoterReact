import React, { useEffect } from "react";
import { connect } from "react-redux";
import Masonry from "react-masonry-css";

// Element
import Quote from "components/quotes/Quote/Quote";
import useInfiniteScroll from "hooks/useInfiniteScroll";

// API
import { fetchQuotes } from "reducers/quotes/actions";
import "./styles/QuotesInfiniteScroll.css";
import { selectSortedQuotes } from "reducers/quotes/selectors";

const QuotesInfiniteScroll = ({
  dispatch,
  quotes,
  loading,
  error,
  refresh,
  hasMore,
  searchParams,
}) => {
  const { pageSize, page } = searchParams;

  // console.log("QuotesInfiniteScroll", pageSize, page, hasMore);

  // console.log("quotes", quotes);
  // console.log("loading", loading);

  const loadMoreItems = () => {
    dispatch(fetchQuotes(pageSize, page, refresh));
  };

  const [lastElementRef] = useInfiniteScroll(
    hasMore ? loadMoreItems : () => {},
    loading
  );

  useEffect(() => {
    console.log("### QuotesInfiniteScroll EFFECT ###");
    loadMoreItems();
  }, []);

  if (error) {
    return (
      <div className="quotes-infinite-scroll">{error && <p>{error}</p>}</div>
    );
  } else if (quotes.length === 0 && loading) {
    <div className="quotes-infinite-scroll">
      <p>Fetching items...</p>
    </div>;
  }

  return (
    <div className="quotes-infinite-scroll">
      {quotes && (
        <Masonry
          breakpointCols={3}
          className="quotes-grid"
          columnClassName="quotes-grid-column"
        >
          {quotes.map((quote, i) => (
            <div
              key={quote._id}
              ref={quotes.length === i + 1 ? lastElementRef : null}
            >
              <Quote quote={quote} />
            </div>
          ))}
        </Masonry>
      )}
      {loading && <p>Fetching items...</p>}
    </div>
  );
};

const mapStateToProps = state => ({
  quotes: selectSortedQuotes(state),
  loading: state.quotes.loading,
  error: state.quotes.error,
  refresh: state.quotes.refresh,
  hasMore: state.quotes.hasMore,
  searchParams: state.quotes.searchParams,
});

export default connect(mapStateToProps)(QuotesInfiniteScroll);
