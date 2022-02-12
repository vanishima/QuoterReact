import React, { useReducer } from "react";
import PropTypes from "prop-types";

// Elements
import useInfiniteScroll from "./useInfiniteScroll";
import QuotesList from "../quotes/Quotes/QuotesList";

// Styles
import "../styles/quotes.css";

// API
import quotesAPI from "../api/quotesAPI";

// Constants
const perPage = 15;
const ACTIONS = {
  START: "start",
  LOADED: "loaded",
};
const SORT_ORDERS = {
  RECENT: "recent",
  LATEST: "latest",
};
const initialState = {
  loading: false,
  hasMore: true,
  data: [],
  last: 0,
  sortOrder: SORT_ORDERS.RECENT,
};

// useReducer functions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, loading: true };
    case ACTIONS.LOADED:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        hasMore: action.newData.length === perPage,
        last: state.last + action.newData.length,
      };
    default:
      return state;
  }
};

const InfiniteScroll = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, data, last, hasMore } = state;

  // const [lastElementRef] = useInfiniteScroll(hasMore ? )

  return (
    <div>
      <QuotesList
        quotes={data}
        lastElementRef={lastElementRef}
        setQuotes={setQuotes}
      />
      {loading && <div>Loading</div>}
      {!loading && hasMore && <div>hasMore to load</div>}
    </div>
  );
};

InfiniteScroll.propTypes = {};

export default InfiniteScroll;
