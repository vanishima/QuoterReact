import { ACTIONS } from "actions/quotesActions";

export const initialState = {
  quotes: [],
  loading: false,
  hasErrors: false,
  currentPage: 1,
  lastPage: null,
  pageSize: 15,
  refresh: true,
  sortOrder: "recent",
  limit: 10,
  lastElementRef: null,
  bookTags: [],
  quoteTags: [],
};

export default function quotesListReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_QUOTES:
      return { ...state, loading: true };
    case ACTIONS.GET_QUOTES_SUCCESS:
      console.log("GET_QUOTES_SUCCESS", action.payload);
      return {
        ...state,
        quotes: action.payload.quotes,
        lastPage: action.payload.lastPage,
        loading: false,
        hasErrors: false,
      };
    case ACTIONS.GET_QUOTES_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
