import axios from "axios";
import { tagsMapper, tagMapper } from "./mappers";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";

export const ACTIONS = {
  FETCH_TAG_REQUEST: "FETCH_TAG_REQUEST",
  FETCH_TAGS_FAILURE: "FETCH_TAGS_FAILURE",
  FETCH_TAGS_SUCCESS: "FETCH_TAGS_SUCCESS",
  ADD_TAG: "ADD_TAG",
  REMOVE_TAG: "REMOVE_TAG",
  CREATE_TAG_SUCCESS: "CREATE_TAG_SUCCESS",
  RESET_TAGS: "RESET_TAGS",
};

const FETCH_TAG_URL = "/tags";
const CREATE_TAG_URL = "/tags/create";

export const fetchTags = () => {
  return dispatch => {
    console.group("fetchTags");
    dispatch({ type: ACTIONS.FETCH_TAG_REQUEST });

    axios
      .get(FRONTEND + FETCH_TAG_URL, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        mode: "cors",
      })
      .then(async res => {
        console.log("got tag data", res.data);
        dispatch({
          type: ACTIONS.FETCH_TAGS_SUCCESS,
          payload: { tags: tagsMapper(res.data.tags) },
        });
      })
      .catch(err => {
        console.log("failure", err);
        dispatch({ type: ACTIONS.FETCH_TAGS_FAILURE });
      });

    console.groupEnd();
  };
};

export const addTag = tagOption => {
  return { type: ACTIONS.ADD_TAG, payload: { tag: tagOption.label } };
};

export const removeTag = tagOption => {
  return { type: ACTIONS.REMOVE_TAG, payload: { tag: tagOption.label } };
};

export const resetTags = {
  type: ACTIONS.RESET_TAGS,
};

export const createTag = tag => {
  return async dispatch => {
    console.group("createTag", tag);
    dispatch({ type: ACTIONS.FETCH_TAG_REQUEST });
    console.log("ready to create");
    await axios
      .post(FRONTEND + CREATE_TAG_URL, tag, {
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
          type: ACTIONS.CREATE_TAG_SUCCESS,
          payload: { tagOption: tagMapper(tag) },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.FETCH_TAGS_FAILURE });
      });
  };
};
