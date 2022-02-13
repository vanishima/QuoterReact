import { ACTIONS } from "./actions";

export const initialState = {
  user: {},
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
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
        error: "",
      };
    case ACTIONS.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: payload.error };
    case ACTIONS.LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
