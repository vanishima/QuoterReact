import axiosInstance from "axiosconfig";
import { selectQuoteById } from "reducers/quotes/selectors";

export const QUOTE_ACTIONS = {
  SET_EDITING_QUOTE: "SET_EDITING_QUOTE",
  UPDATE_QUOTE_INPUT_BY_ID: "UPDATE_QUOTE_INPUT_BY_ID",
  UPDATE_QUOTE_INPUT_LIST_BY_ID: "UPDATE_QUOTE_INPUT_LIST_BY_ID",
  UPDATE_QUOTE_LIST_INPUT: "UPDATE_QUOTE_LIST_INPUT",

  UPDATE_QUOTE_AUTHOR_BY_ID: "UPDATE_QUOTE_AUTHOR_BY_ID",
  UPDATE_QUOTE_BOOK_BY_ID: "UPDATE_QUOTE_BOOK_BY_ID",
  UPDATE_QUOTE_MEMO_BY_ID: "UPDATE_QUOTE_MEMO_BY_ID",
  REMOVE_MEMO_FROM_QUOTE: "REMOVE_MEMO_FROM_QUOTE",
  REMOVE_TAG_FROM_QUOTE: "REMOVE_TAG_FROM_QUOTE",

  UPDATE_QUOTE_REQUEST: "UPDATE_QUOTE_REQUEST",
  UPDATE_QUOTE_SUCCESS: "UPDATE_QUOTE_SUCCESS",
  UPDATE_QUOTE_FAILURE: "UPDATE_QUOTE_FAILURE",
  DELETE_QUOTE_SUCCESS: "DELETE_QUOTE_SUCCESS",
};

const CREATE_UPDATE_QUOTE_URL = "/quotes/update";
const DELETE_QUOTE_URL = "/quotes/delete/";

export const setEditingQuote = quoteId => {
  const quote = {};
  return { type: QUOTE_ACTIONS.SET_EDITING_QUOTE, payload: { quote } };
};

export const updateQuoteInputById = (quoteId, key, value) => {
  return async (dispatch, getState) => {
    console.group("updateQuoteInputById");
    // dispatch({
    //   type: QUOTE_ACTIONS.UPDATE_QUOTE_INPUT_BY_ID,
    //   payload: { quoteId, key, value },
    // });
    let quote = selectQuoteById(getState(), quoteId);
    quote[key] = [...quote.key, value];
    console.log("quote", quote);
    dispatch(updateQuote(quote));
    console.groupEnd("finished");
  };
};

export const updateQuoteInputListById = (quoteId, key, value) => {
  return async (dispatch, getState) => {
    console.group("updateQuoteInputById");
    dispatch({
      type: QUOTE_ACTIONS.UPDATE_QUOTE_INPUT_LIST_BY_ID,
      payload: { quoteId, key, value },
    });
    const quote = selectQuoteById(getState(), quoteId);
    dispatch(updateQuote(quote));
    console.groupEnd("finished");
  };
};

export const updateQuoteAuthorById = (quoteId, author) => ({
  type: QUOTE_ACTIONS.UPDATE_QUOTE_AUTHOR_BY_ID,
  payload: { quoteId, author },
});

export const updateQuoteBookById = (quoteId, author, book) => ({
  type: QUOTE_ACTIONS.UPDATE_QUOTE_BOOK_BY_ID,
  payload: { quoteId, author, book },
});

export const updateQuoteMemoById = (quoteId, memo) => {
  return {
    type: QUOTE_ACTIONS.UPDATE_QUOTE_MEMO_BY_ID,
    payload: { quoteId, memo },
  };
};

export const removeMemoFromQuote = (quoteId, memo) => ({
  type: QUOTE_ACTIONS.REMOVE_MEMO_FROM_QUOTE,
  payload: { quoteId, memo },
});

export const removeTagFromQuote = (quoteId, tag) => {
  return async (dispatch, getState) => {
    console.group("removeTagFromQuote");
    dispatch({
      type: QUOTE_ACTIONS.REMOVE_TAG_FROM_QUOTE,
      payload: { quoteId, tag },
    });
    const quote = selectQuoteById(getState(), quoteId);
    dispatch(updateQuote(quote));
    console.groupEnd("finished");
  };
};

export const updateQuote = quote => {
  return async dispatch => {
    dispatch({ type: QUOTE_ACTIONS.UPDATE_QUOTE_REQUEST, payload: { quote } });
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
          type: QUOTE_ACTIONS.UPDATE_QUOTE_SUCCESS,
          payload: { quote },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: QUOTE_ACTIONS.UPDATE_QUOTE_FAILURE });
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
          type: QUOTE_ACTIONS.DELETE_QUOTE_SUCCESS,
          payload: { quoteId },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
      });
  };
};
