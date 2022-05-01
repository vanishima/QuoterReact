import React, { useEffect } from "react";
import { connect } from "react-redux";
import Masonry from "react-masonry-css";

// Element
import Quote from "components/quotes/Quote/Quote";
import MySpinner from "components/common/Spinner/Spinner";
import useInfiniteScroll from "hooks/useInfiniteScroll";

// API
import { fetchQuotes } from "reducers/quotes/actions";
import "./styles/QuotesInfiniteScroll.css";
import {
  selectError,
  selectHasMore,
  selectLoading,
  selectRefresh,
  selectSearchParams,
  selectSortedQuotes,
} from "reducers/quotes/selectors";
import QuotesFilter from "components/common/Navbar/QuotesFilter/QuotesFilter";

const QuotesInfiniteScroll = ({
  dispatch,
  quotes,
  loading,
  error,
  refresh,
  hasMore,
  searchParams,
}) => {
  const { pageSize, page, author, book } = searchParams;

  // console.log("QuotesInfiniteScroll", pageSize, page, hasMore);

  // console.log("quotes", quotes);
  // console.log("loading", loading);

  const loadMoreItems = () => {
    dispatch(
      fetchQuotes({
        pageSize,
        page,
        refresh,
        authorId: author?._id,
        bookId: book?._id,
      })
    );
  };

  const [lastElementRef] = useInfiniteScroll(
    hasMore ? loadMoreItems : () => {},
    loading
  );

  useEffect(() => {
    console.log("### QuotesInfiniteScroll EFFECT ###");
    loadMoreItems();
  }, [author]);

  if (error) {
    return (
      <div className="quotes-infinite-scroll">{error && <p>{error}</p>}</div>
    );
  } else if (quotes.length === 0 || loading) {
    <div className="quotes-infinite-scroll">
      <p>Fetching items...</p>
    </div>;
  }

  return (
    <div className="quotes-infinite-scroll">
      <QuotesFilter />
      {!refresh && quotes && (
        <Masonry
          breakpointCols={2}
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
      {
        loading && <MySpinner />
        // <p>Fetching items...</p>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  quotes: selectSortedQuotes(state),
  loading: selectLoading(state),
  error: selectError(state),
  refresh: selectRefresh(state),
  hasMore: selectHasMore(state),
  searchParams: selectSearchParams(state),
});

export default connect(mapStateToProps)(QuotesInfiniteScroll);
