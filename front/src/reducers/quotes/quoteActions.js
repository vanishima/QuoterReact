import axiosInstance from "axiosconfig";
import { selectQuoteById } from "reducers/quotes/selectors";

export const QUOTE_ACTIONS = {
  SET_EDITING_QUOTE: "SET_EDITING_QUOTE",

  SET_QUOTE_AUTHOR_LOCAL: "SET_QUOTE_AUTHOR_LOCAL",
  SET_QUOTE_AUTHOR_NEW: "SET_QUOTE_AUTHOR_NEW",

  SET_QUOTE_BOOK_AUTHOR_LOCAL: "SET_QUOTE_BOOK_AUTHOR_LOCAL",
  SET_QUOTE_BOOK_AUTHOR_NEW: "SET_QUOTE_BOO_AUTHORK_NEW",

  SET_QUOTE_BOOK_LOCAL: "SET_QUOTE_BOOK_LOCAL",
  SET_QUOTE_BOOK_NEW: "SET_QUOTE_BOOK_NEW",

  SET_QUOTE_INPUT_LOCAL: "SET_QUOTE_INPUT_LOCAL",
  SET_QUOTE_INPUT_NEW: "SET_QUOTE_INPUT_NEW",

  ADD_TAG_TO_QUOTE_LOCAL: "ADD_TAG_TO_QUOTE_LOCAL",
  ADD_TAG_TO_QUOTE_NEW: "ADD_TAG_TO_QUOTE_NEW",
  REMOVE_TAG_FROM_QUOTE_LOCAL: "REMOVE_TAG_FROM_QUOTE_LOCAL",
  REMOVE_TAG_FROM_QUOTE_NEW: "REMOVE_TAG_FROM_QUOTE_NEW",

  UPDATE_LOCAL_QUOTE_INPUT: "UPDATE_LOCAL_QUOTE_INPUT",
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

/* SET QUOTE AUTHOR */
export const setQuoteAuthor = (author, quoteId = null) => ({
  type: quoteId
    ? QUOTE_ACTIONS.SET_QUOTE_AUTHOR_LOCAL
    : QUOTE_ACTIONS.SET_QUOTE_AUTHOR_NEW,
  payload: { author, quoteId },
});

/* SET QUOTE BOOK AUTHOR*/
export const setQuoteBookAuthor = (book, author, quoteId = null) => ({
  type: quoteId
    ? QUOTE_ACTIONS.SET_QUOTE_BOOK_AUTHOR_LOCAL
    : QUOTE_ACTIONS.SET_QUOTE_BOOK_AUTHOR_NEW,
  payload: { book, author, quoteId },
});

/* SET QUOTE BOOK */
export const setQuoteBook = (book, quoteId = null) => ({
  type: quoteId
    ? QUOTE_ACTIONS.SET_QUOTE_BOOK_LOCAL
    : QUOTE_ACTIONS.SET_QUOTE_BOOK_NEW,
  payload: { book, quoteId },
});

/* SET QUOTE CHAPTER */
export const setQuoteChapter = (chapter, quoteId) => {
  return setQuoteInput("chapter", chapter, quoteId);
};

/* SET QUOTE INPUT */
export const setQuoteInput = (key, value, quoteId) => {
  return {
    type: quoteId
      ? QUOTE_ACTIONS.SET_QUOTE_INPUT_LOCAL
      : QUOTE_ACTIONS.SET_QUOTE_INPUT_NEW,
    payload: {
      key,
      value,
      quoteId,
    },
  };
};

/* SET QUOTE TAG */
export const addTagToQuote = (tag, quoteId) => {
  return {
    type: quoteId
      ? QUOTE_ACTIONS.ADD_TAG_TO_QUOTE_LOCAL
      : QUOTE_ACTIONS.ADD_TAG_TO_QUOTE_NEW,
    payload: { tag, quoteId },
  };
};

/* REMOVE QUOTE TAG */
export const removeTagFromQuote = (tag, quoteId) => {
  return {
    type: quoteId
      ? QUOTE_ACTIONS.REMOVE_TAG_FROM_QUOTE_LOCAL
      : QUOTE_ACTIONS.REMOVE_TAG_FROM_QUOTE_NEW,
    payload: { tag, quoteId },
  };
};

export const updateLocalQuoteInput = (quoteId, key, value) => {
  return {
    type: QUOTE_ACTIONS.UPDATE_LOCAL_QUOTE_INPUT,
    payload: { quoteId, key, value },
  };
};

export const updateQuoteInputById = (quoteId, key, value) => {
  return async (dispatch, getState) => {
    console.group("updateQuoteInputById");
    dispatch(updateLocalQuoteInput(quoteId, key, value));
    // dispatch(updateQuote(quoteId));
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
  return async (dispatch, getState) => {
    dispatch({
      type: QUOTE_ACTIONS.UPDATE_QUOTE_MEMO_BY_ID,
      payload: { quoteId, memo },
    });
    const quote = selectQuoteById(getState(), quoteId);
    console.log("updated quote should look like", quote);
    dispatch(updateQuote(quote));
  };
};

export const removeMemoFromQuote = (quoteId, memo) => {
  return async (dispatch, getState) => {
    dispatch({
      type: QUOTE_ACTIONS.REMOVE_MEMO_FROM_QUOTE,
      payload: { quoteId, memo },
    });
    dispatch(updateQuoteById(quoteId));
  };
};

export const updateQuoteById = quoteId => {
  return async (dispatch, getState) => {
    const quote = selectQuoteById(getState(), quoteId);
    console.log("updated quote should look like", quote);
    dispatch(updateQuote(quote));
  };
};

// export const removeTagFromQuote = (quoteId, tag) => {
//   return async (dispatch, getState) => {
//     console.group("removeTagFromQuote");
//     dispatch({
//       type: QUOTE_ACTIONS.REMOVE_TAG_FROM_QUOTE,
//       payload: { quoteId, tag },
//     });
//     const quote = selectQuoteById(getState(), quoteId);
//     dispatch(updateQuote(quote));
//     console.groupEnd("finished");
//   };
// };

export const updateQuote = quote => {
  return async dispatch => {
    // map quote to desired structure
    console.log("updateQuote", quote);
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
