import axiosInstance from "axiosconfig";
import {
  processItem,
  processItems,
} from "components/inputs/CreatableSelect/util";

export const ACTIONS = {
  LOADING: "LOADING",
  FAILURE: "FAILURE",
  FETCH_AUTHORS_SUCCESS: "FETCH_AUTHORS_SUCCESS",
  SET_AUTHOR: "SET_AUTHOR",
  CREATE_AUTHOR_SUCCESS: "CREATE_AUTHOR_SUCCESS",
  MOVE_AUTHOR_TO_FRONT: "MOVE_AUTHOR_TO_FRONT",
};

const FETCH_AUTHOR_URL = "/authors";
const CREATE_AUTHOR_URL = "/authors/create";
// const UPDATE_AUTHOR_URL = "/authors/update";

export const fetchAuthors = () => {
  return async dispatch => {
    // console.group("fetchAuthors");
    dispatch({ type: ACTIONS.LOADING });

    await axiosInstance
      .get(FETCH_AUTHOR_URL)
      .then(async res => {
        // console.log("got data", res.data);
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

    await axiosInstance
      .post(CREATE_AUTHOR_URL, author, {
        headers: {
          "Content-Type": "application/json",
        },
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

export const moveAuthorToFront = author => ({
  type: ACTIONS.MOVE_AUTHOR_TO_FRONT,
  payload: { author },
});
