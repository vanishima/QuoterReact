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
  FETCH_LABELS_SUCCESS: "FETCH_LABELS_SUCCESS",
  ADD_LABEL: "ADD_LABEL",
  REMOVE_LABEL: "REMOVE_LABEL",
  CREATE_LABEL_SUCCESS: "CREATE_LABEL_SUCCESS",
  RESET_LABELS: "RESET_LABELS",
};

const FETCH_LABEL_URL = "/labels";
const CREATE_LABEL_URL = "/labels/create";

export const fetchLabels = () => {
  return dispatch => {
    console.group("fetchLabels");
    dispatch({ type: ACTIONS.LOADING });

    axios
      .get(FRONTEND + FETCH_LABEL_URL, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        mode: "cors",
      })
      .then(async res => {
        console.log("got label data", res.data);

        dispatch({
          type: ACTIONS.FETCH_LABELS_SUCCESS,
          payload: { labels: processItems(res.data.labels, "label") },
        });
      })
      .catch(err => {
        console.log("failure", err);
        dispatch({ type: ACTIONS.FAILURE });
      });

    console.groupEnd();
  };
};

export const addLabel = label => {
  return { type: ACTIONS.ADD_LABEL, payload: { label } };
};

export const removeLabel = label => {
  return { type: ACTIONS.REMOVE_LABEL, payload: { label } };
};

export const resetLabels = {
  type: ACTIONS.RESET_LABELS,
};

export const createLabel = label => {
  return async dispatch => {
    console.group("createLabel", label);
    dispatch({ type: ACTIONS.LOADING });
    console.log("ready to create");
    await axios
      .post(FRONTEND + CREATE_LABEL_URL, label, {
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
          type: ACTIONS.CREATE_LABEL_SUCCESS,
          payload: { label: processItem(label, "label") },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.FAILURE });
      });
  };
};
