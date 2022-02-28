import axiosInstance from "axiosconfig";

export const ACTIONS = {
  LOADING: "LOADING",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "FETCH_USER_FAILURE",
  LOG_OUT: "LOG_OUT",
};

const USER_SIGNUP_URL = "/auth/register";
const USER_LOGIN_URL = "/auth/login";

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

    await axiosInstance
      .post(
        USER_SIGNUP_URL,
        { user: user },
        {
          headers: {
            "Content-Type": "application/json",
          },
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

    await axiosInstance
      .post(
        USER_LOGIN_URL,
        { user: user },
        {
          headers: {
            "Content-Type": "application/json",
          },
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
