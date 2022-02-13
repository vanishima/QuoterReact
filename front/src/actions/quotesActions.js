import axios from "axios";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";
const OPTIONS_SIMPLE = {
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
  mode: "cors",
};

// create redux action types
export const ACTIONS = {
  GET_QUOTES: "GET_QUOTES",
  GET_QUOTES_SUCCESS: "GET_QUOTES_SUCCESS",
  GET_QUOTES_FAILURE: "GET_QUOTES_FAILURE",
};

// create redux action creators that return an action
export const getQuotes = () => ({
  type: ACTIONS.GET_QUOTES,
});

export const getQuotesSuccess = data => ({
  type: ACTIONS.GET_QUOTES_SUCCESS,
  payload: data,
});

export const getQuotesFailure = err => ({
  type: ACTIONS.GET_QUOTES_FAILURE,
  payload: err,
});

// combine them all in an asynchronous thunk
export function fetchQuotes(
  token,
  pageSize,
  page,
  bookid = "undefined",
  sortorder = "latest"
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
          "x-auth-token": token,
        },
        mode: "cors",
      })
      .then(async res => {
        dispatch(getQuotesSuccess(res.data));
        console.log("got data", res.data);
      })
      .catch(err => {
        console.log("failure", err);
        dispatch(getQuotesFailure(err));
      });
  };
}
