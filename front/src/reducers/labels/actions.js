import axiosInstance from "axiosconfig";
import {
  processItem,
  processItems,
} from "components/inputs/CreatableSelect/util";

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

    axiosInstance
      .get(FETCH_LABEL_URL)
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

export const addLabel = labelOption => {
  return { type: ACTIONS.ADD_LABEL, payload: { label: labelOption.label } };
};

export const removeLabel = labelOption => {
  return { type: ACTIONS.REMOVE_LABEL, payload: { label: labelOption.label } };
};

export const resetLabels = {
  type: ACTIONS.RESET_LABELS,
};

export const createLabel = label => {
  return async dispatch => {
    console.group("createLabel", label);
    dispatch({ type: ACTIONS.LOADING });
    console.log("ready to create");

    await axiosInstance
      .post(CREATE_LABEL_URL, {
        data: label,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log("got data", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.CREATE_LABEL_SUCCESS,
          payload: { labelOption: processItem(label, "label") },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.FAILURE });
      });
  };
};
