import React, { useEffect } from "react";
import { connect } from "react-redux";
import Masonry from "react-masonry-css";

// Element
import Quote from "components/quotes/Quote/Quote";
import useInfiniteScroll from "hooks/useInfiniteScroll";

// API
import { fetchQuotes } from "reducers/quotes/actions";
import "./styles/QuotesInfiniteScroll.css";

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

  console.log("quotes", quotes);
  console.log("loading", loading);

  // const limit_options = [10, 15, 20];
  // const sort_options = [
  //   { value: "latest", name: "Latest" },
  //   { value: "recent", name: "Recent" },
  // ];

  const [lastElementRef] = useInfiniteScroll(
    hasMore ? dispatch(fetchQuotes(pageSize, page, refresh)) : () => {},
    loading
  );

  useEffect(() => {
    console.log("### QuotesInfiniteScroll EFFECT ###");
    dispatch(fetchQuotes(pageSize, page, refresh));
  }, []);
  // dispatch, pageSize, page, refresh
  // useEffect(() => {
  //   console.log("### QuotesInfiniteScroll EFFECT ###");
  //   fetchQuotes(token);
  // }, [pageSize, sortOrder]);

  // async function loadMoreItems() {
  //   setIsFetching(true);

  //   // fetch the latest
  //   const result = await quotesAPI.getAll(pageSize, page, sortOrder);
  //   if (result.ok) {
  //     if (refresh) {
  //       console.log("REFERSHING...");
  //       setQuotes(result.quotes);
  //       setRefresh(false);
  //     } else {
  //       setQuotes(current => [...current, ...result.quotes]);
  //     }
  //     setPage(prevPageNumber => prevPageNumber + 1);
  //     setHasMore(result.lastPage > page);
  //     setIsFetching(false);
  //   } else {
  //     alert(result.msg);
  //   }
  // }

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
  quotes: state.quotes.quotes,
  loading: state.quotes.loading,
  error: state.quotes.error,
  refresh: state.quotes.refresh,
  hasMore: state.quotes.hasMore,
  searchParams: state.quotes.searchParams,
});

export default connect(mapStateToProps)(QuotesInfiniteScroll);
