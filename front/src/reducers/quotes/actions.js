import axios from "axios";
import { pageSizeSelector, pageSelector } from "./selectors";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";

// create redux action types
export const ACTIONS = {
  GET_QUOTES: "GET_QUOTES",
  GET_QUOTES_SUCCESS: "GET_QUOTES_SUCCESS",
  ADD_QUOTES: "ADD_QUOTES",
  GET_QUOTES_FAILURE: "GET_QUOTES_FAILURE",
  UPDATE_INPUT: "UPDATE_INPUT",
  ADD_MEMO: "ADD_MEMO",
  REMOVE_MEMO: "REMOVE_MEMO",
  UPDATE_MEMO: "UPDATE_MEMO",
  INITIALIZE_QUOTE: "INITIALIZE_QUOTE",
  CREATE_QUOTE: "CREATE_QUOTE",
  CREATE_QUOTE_SUCCESS: "CREATE_QUOTE_SUCCESS",
  CREATE_QUOTE_FAILURE: "CREATE_QUOTE_FAILURE",
  SET_DATE: "SET_DATE",
  TOGGLE_PRIVACY: "TOGGLE_PRIVACY",
  TOGGLE_EDITING: "TOGGLE_EDITING",
};

const CREATE_QUOTE_URL = "/quotes/update";

// create redux action creators that return an action
export const getQuotes = () => ({
  type: ACTIONS.GET_QUOTES,
});

export const getQuotesSuccess = data => ({
  type: ACTIONS.GET_QUOTES_SUCCESS,
  payload: data,
});

export const addQuotes = data => ({
  type: ACTIONS.ADD_QUOTES,
  payload: data,
});

export const getQuotesFailure = err => ({
  type: ACTIONS.GET_QUOTES_FAILURE,
  payload: err,
});

export const updateInput = (key, value) => ({
  type: ACTIONS.UPDATE_INPUT,
  payload: { key: key, value: value },
});

export const tggleEditing = () => ({
  type: ACTIONS.TOGGLE_EDITING,
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
    dispatch(getQuotes());
    console.log("fetchQuotes", pageSize, page, bookid, sortorder);

    const url =
      FRONTEND +
      "/quotes?pagesize=" +
      pageSize +
      "&page=" +
      page +
      "&bookid=" +
      bookid +
      "&sortorder=" +
      sortorder;

    axios
      .get(url, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        mode: "cors",
      })
      .then(async res => {
        console.log("got data", res.data);
        if (refresh) {
          dispatch(getQuotesSuccess(res.data));
        } else {
          dispatch(addQuotes(res.data));
        }
      })
      .catch(err => {
        console.log("failure", err);
        dispatch(getQuotesFailure(err));
      });
  };
}

export const addMemo = memo => {
  return { type: ACTIONS.ADD_MEMO, payload: memo };
};

export const removeMemo = memoId => {
  return { type: ACTIONS.REMOVE_MEMO, payload: memoId };
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
    await axios
      .post(FRONTEND + CREATE_QUOTE_URL, quote, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
      .then(res => {
        console.log("got data", res.data);
        console.groupEnd();
        quote._id = res.data._id;
        dispatch({
          type: ACTIONS.CREATE_QUOTE_SUCCESS,
          payload: quote,
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.CREATE_QUOTE_FAILURE });
      });
  };
};
