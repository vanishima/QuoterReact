import { ACTIONS } from "./actions";

export const initialState = {
  authors: [],
  loading: false,
  currentAuthor: {},
};

export default function authorsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true };
    case ACTIONS.FETCH_AUTHORS_SUCCESS:
      return {
        ...state,
        loading: false,
        authors: payload.authors,
      };
    case ACTIONS.SET_AUTHOR:
      return { ...state, currentAuthor: payload };
    case ACTIONS.CREATE_AUTHOR_SUCCESS:
      return {
        ...state,
        authors: [payload, ...state.authors],
        currentAuthor: payload.author,
        loading: false,
      };
    case ACTIONS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
