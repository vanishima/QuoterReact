import { FRONTEND } from "api/utilsAPI";
import axios from "axios";

const BASIC_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
};

export const ACTIONS = {
  LOADING: "LOADING",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "FETCH_USER_FAILURE",
  LOG_OUT: "LOG_OUT",
};

export const loading = () => {
  return {
    type: ACTIONS.LOADING,
  };
};

export const fetchUserSuccess = data => ({
  type: ACTIONS.FETCH_USER_SUCCESS,
  payload: { user: data.user, token: data.token },
});

export const fetchUserFailure = data => ({
  type: ACTIONS.FETCH_USER_FAILURE,
  payload: { error: data.msg },
});

export const signup = user => {
  return async dispatch => {
    dispatch(loading());

    return await axios
      .post(FRONTEND + "/auth/register", { user: user }, BASIC_OPTIONS)
      .then(res => {
        console.log("got response", res);
        dispatch(fetchUserSuccess(res.data));
      })
      .catch(err => {
        console.log("error response", err.response && err.response);
        dispatch(fetchUserFailure(err.response.data));
      });
  };
};

export const login = user => {
  return async dispatch => {
    dispatch(loading());

    return await axios
      .post(FRONTEND + "/auth/login", { user: user }, BASIC_OPTIONS)
      .then(res => {
        console.log("got response", res);
        dispatch(fetchUserSuccess(res.data));
      })
      .catch(err => {
        console.log("error response", err.response && err.response);
        dispatch(fetchUserFailure(err.response.data));
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.LOG_OUT });
  };
};
