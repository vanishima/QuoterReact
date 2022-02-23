import { ACTIONS } from "./actions";

export const initialState = {
  currentUser: undefined,
  token: null,
  loading: false,
  error: undefined,
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true };
    case ACTIONS.FETCH_USER_SUCCESS:
      localStorage.setItem("currentUser", JSON.stringify(payload.user));
      localStorage.setItem("token", payload.token);
      const { user, token } = payload;
      return {
        ...state,
        loading: false,
        currentUser: user,
        token: token,
        error: "",
      };
    case ACTIONS.FETCH_USER_FAILURE:
      const { error } = payload;
      return { ...state, loading: false, error: error };
    case ACTIONS.LOG_OUT:
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
      return initialState;
    default:
      return state;
  }
}
