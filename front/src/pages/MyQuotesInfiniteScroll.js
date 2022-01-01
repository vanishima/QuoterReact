import React, { useEffect, useState } from "react";

// Element
import QuotesList from "../components/quotes/QuotesList";
import FilterBar from "../components/FilterBar";

import useInfiniteScroll from "../components/utils/useInfiniteScroll";

import "../styles/quotes.css";

// API
import quotesAPI from "../api/quotesAPI";

const MyQuotesInfiniteScroll = () => {
  const [quotes, setQuotes] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // set initial page
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [pageSize, setPageSize] = useState(15);
  const [refresh, setRefresh] = useState(true);

  // filter options
  const [sortOrder, setSortOrder] = useState("recent");

  const limit_options = [10, 15, 20];
  const sort_options = [
    { value: "latest", name: "Latest" },
    { value: "recent", name: "Recent" },
  ];

  const [lastElementRef] = useInfiniteScroll(
    hasMore ? loadMoreItems : () => {},
    isFetching
  );

  useEffect(() => {
    console.log("### MyQuotesInfiniteScroll EFFECT ###");
    loadMoreItems();
  }, [pageSize, sortOrder]);

  async function loadMoreItems() {
    setIsFetching(true);

    // fetch the latest
    const result = await quotesAPI.getAll(pageSize, page, sortOrder);
    if (result.ok) {
      if (refresh) {
        console.log("REFERSHING...");
        setQuotes(result.quotes);
        setRefresh(false);
      } else {
        setQuotes((current) => [...current, ...result.quotes]);
      }
      setPage((prevPageNumber) => prevPageNumber + 1);
      setHasMore(result.lastPage > page);
      setIsFetching(false);
    } else {
      alert(result.msg);
    }
  }

  return (
    <div className="quotes-scroll">
      <FilterBar
        setPage={setPage}
        setRefresh={setRefresh}
        sortOrder={sortOrder}
        sort_options={sort_options}
        setSortOrder={setSortOrder}
        limit={pageSize}
        limit_options={limit_options}
        setLimit={setPageSize}
      />
      <QuotesList
        quotes={quotes}
        lastElementRef={lastElementRef}
        setQuotes={setQuotes}
      />
      {isFetching && <p>Fetching items...</p>}
    </div>
  );
};

export default MyQuotesInfiniteScroll;
