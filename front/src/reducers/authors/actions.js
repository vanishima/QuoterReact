import axios from "axios";
import {
  processItem,
  processItems,
} from "components/inputs/CreatableSelect/util";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";

export const ACTIONS = {
  LOADING: "LOADING",
  FAILURE: "FAILURE",
  FETCH_AUTHORS_SUCCESS: "FETCH_AUTHORS_SUCCESS",
  SET_AUTHOR: "SET_AUTHOR",
  CREATE_AUTHOR_SUCCESS: "CREATE_AUTHOR_SUCCESS",
};

const FETCH_AUTHOR_URL = "/authors";
const CREATE_AUTHOR_URL = "/authors/update";

export const fetchAuthors = () => {
  return dispatch => {
    console.group("fetchAuthors");
    dispatch({ type: ACTIONS.LOADING });

    axios
      .get(FRONTEND + FETCH_AUTHOR_URL, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        mode: "cors",
      })
      .then(async res => {
        console.log("got data", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.FETCH_AUTHORS_SUCCESS,
          payload: { authors: processItems(res.data.authors, "name") },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.FAILURE });
      });
  };
};

export const setAuthor = author => {
  return { type: ACTIONS.SET_AUTHOR, payload: { author } };
};

export const createAuthor = author => {
  return async dispatch => {
    console.group("createAuthor", author);
    dispatch({ type: ACTIONS.LOADING });
    console.log("ready to create");
    await axios
      .post(FRONTEND + CREATE_AUTHOR_URL, author, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
      .then(res => {
        console.log("got data", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.CREATE_AUTHOR_SUCCESS,
          payload: { author: processItem(res.data, "name") },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.FAILURE });
      });
  };
};
