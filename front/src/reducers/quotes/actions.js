import axiosInstance from "axiosconfig";
import { quotesMapper } from "./mappers";

// create redux action types
export const ACTIONS = {
  GET_QUOTES_REQUEST: "GET_QUOTES_REQUEST",
  GET_QUOTES_SUCCESS: "GET_QUOTES_SUCCESS",
  LOAD_MORE_QUOTES_SUCCESS: "LOAD_MORE_QUOTES_SUCCESS",
  GET_QUOTES_FAILURE: "GET_QUOTES_FAILURE",
  UPDATE_QUOTE_INPUT: "UPDATE_QUOTE_INPUT",
  ADD_MEMO: "ADD_MEMO",
  REMOVE_MEMO: "REMOVE_MEMO",
  UPDATE_MEMO: "UPDATE_MEMO",
  INITIALIZE_QUOTE: "INITIALIZE_QUOTE",
  CREATE_QUOTE: "CREATE_QUOTE",
  CREATE_QUOTE_SUCCESS: "CREATE_QUOTE_SUCCESS",
  CREATE_QUOTE_FAILURE: "CREATE_QUOTE_FAILURE",
  UPDATE_QUOTE_SUCCESS: "UPDATE_QUOTE_SUCCESS",
  DELETE_QUOTE_SUCCESS: "DELETE_QUOTE_SUCCESS",
  UPDATE_QUOTE_LIST_INPUT: "UPDATE_QUOTE_LIST_INPUT",
  CANCEL_EDITING_QUOTE: "CANCEL_EDITING_QUOTE",
};

export const SET_EDITING_QUOTE = "SET_EDITING_QUOTE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";

const FETCH_QUOTES_URL = "/quotes";
const CREATE_UPDATE_QUOTE_URL = "/quotes/update";
const DELETE_QUOTE_URL = "/quotes/delete/";

export const updateQuoteInput = (key, value) => ({
  type: ACTIONS.UPDATE_QUOTE_INPUT,
  payload: { key, value },
});

export const updateQuoteListInput = (key, value) => ({
  type: ACTIONS.UPDATE_QUOTE_LIST_INPUT,
  payload: { key, value },
});

export const toggleEditing = () => ({
  type: TOGGLE_EDITING,
});

export const setEditingQuote = quoteId => ({
  type: SET_EDITING_QUOTE,
  payload: { quoteId },
});

export const cancelEditingQuote = () => ({
  type: ACTIONS.CANCEL_EDITING_QUOTE,
});

// combine them all in an asynchronous thunk
export function fetchQuotes(
  pageSize,
  page,
  refresh,
  sortorder = "latest",
  bookid = "undefined"
) {
  return async dispatch => {
    dispatch({
      type: ACTIONS.GET_QUOTES_REQUEST,
    });
    console.log("fetchQuotes", pageSize, page, bookid, sortorder);

    await axiosInstance
      .get(FETCH_QUOTES_URL, {
        params: {
          pagesize: pageSize,
          page: page,
          bookid: bookid,
          sortoder: sortorder,
        },
      })
      .then(async res => {
        // console.log("got data", res.data);
        const quotes = quotesMapper(res.data.quotes);
        // console.log("mapped quotes", quotes);
        if (refresh) {
          dispatch({
            type: ACTIONS.GET_QUOTES_SUCCESS,
            payload: { ...res.data, quotes },
          });
        } else {
          dispatch({
            type: ACTIONS.LOAD_MORE_QUOTES_SUCCESS,
            payload: { ...res.data, quotes },
          });
        }
      })
      .catch(err => {
        console.log("failure", err);
        dispatch({
          type: ACTIONS.GET_QUOTES_FAILURE,
          payload: err,
        });
      });
  };
}

export const addMemo = memo => {
  return { type: ACTIONS.ADD_MEMO, payload: { memo } };
};

export const removeMemo = memoId => {
  return { type: ACTIONS.REMOVE_MEMO, payload: { memoId } };
};

export const updateMemo = memo => {
  return { type: ACTIONS.UPDATE_MEMO, payload: memo };
};

export const initializeQuote = () => {
  return { type: ACTIONS.INITIALIZE_QUOTE };
};

export const createQuote = quote => {
  return async dispatch => {
    dispatch({ type: ACTIONS.CREATE_QUOTE });
    console.log("ready to create quote", quote);

    await axiosInstance
      .post(CREATE_UPDATE_QUOTE_URL, quote, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log("got data", res.data);
        console.groupEnd();
        quote._id = res.data._id;
        dispatch({
          type: ACTIONS.CREATE_QUOTE_SUCCESS,
          payload: { quote },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.CREATE_QUOTE_FAILURE });
      });
  };
};

export const updateQuote = quote => {
  return async dispatch => {
    dispatch({ type: ACTIONS.CREATE_QUOTE });
    console.group("ready to update quote", quote);
    await axiosInstance
      .post(CREATE_UPDATE_QUOTE_URL, quote, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log("successfully updated", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.UPDATE_QUOTE_SUCCESS,
          payload: { quote },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.CREATE_QUOTE_FAILURE });
      });
  };
};

export const deleteQuote = quoteId => {
  return async dispatch => {
    await axiosInstance
      .post(DELETE_QUOTE_URL + quoteId)
      .then(res => {
        console.log("successfully updated", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.DELETE_QUOTE_SUCCESS,
          payload: { quoteId },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
      });
  };
};
