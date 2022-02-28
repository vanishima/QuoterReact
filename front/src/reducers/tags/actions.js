import axiosInstance from "axiosconfig";
import { tagsMapper, tagMapper } from "./mappers";

export const ACTIONS = {
  FETCH_TAG_REQUEST: "FETCH_TAG_REQUEST",
  FETCH_TAGS_FAILURE: "FETCH_TAGS_FAILURE",
  FETCH_TAGS_SUCCESS: "FETCH_TAGS_SUCCESS",
  ADD_TAG: "ADD_TAG",
  REMOVE_TAG: "REMOVE_TAG",
  CREATE_TAG_SUCCESS: "CREATE_TAG_SUCCESS",
  RESET_TAGS: "RESET_TAGS",
  SET_TAGS: "SET_TAGS",
};

const FETCH_TAG_URL = "/tags";
const CREATE_TAG_URL = "/tags/create";

export const fetchTags = () => {
  return async dispatch => {
    console.group("fetchTags");
    dispatch({ type: ACTIONS.FETCH_TAG_REQUEST });

    await axiosInstance
      .get(FETCH_TAG_URL)
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

export const addTag = tag => {
  return { type: ACTIONS.ADD_TAG, payload: { tag } };
};

export const removeTag = tag => {
  return { type: ACTIONS.REMOVE_TAG, payload: { tag } };
};

export const resetTags = {
  type: ACTIONS.RESET_TAGS,
};

export const setTags = rawTags => {
  return { type: ACTIONS.RESET_TAGS, payload: { tag: tagsMapper(rawTags) } };
};

export const createTag = tag => {
  return async dispatch => {
    console.group("createTag", tag);
    dispatch({ type: ACTIONS.FETCH_TAG_REQUEST });
    console.log("ready to create");

    await axiosInstance
      .post(CREATE_TAG_URL, {
        data: tag,
        headers: {
          "Content-Type": "application/json",
        },
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
