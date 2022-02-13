import { FRONTEND } from "api/utilsAPI";
import axios from "axios";

export const ACTIONS = {
  LOADING: "LOADING",
  CREATE_USER: "CREATE_USER",
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
      .post(
        FRONTEND + "/auth/register",
        { user: user },
        {
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      )
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
      .post(
        FRONTEND + "/auth/login",
        { user: user },
        {
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      )
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
