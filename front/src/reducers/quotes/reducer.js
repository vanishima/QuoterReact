import { ACTIONS } from "./actions";
import { isoDateWithoutTimezone } from "api/utilsAPI";

const initialQuote = {
  _id: null,
  user: {},
  book: {},
  author: {},
  title: "",
  text: "",
  tags: "",
  date: isoDateWithoutTimezone(new Date()),
  memo: [],
  privacy_level: 1,
};

export const initialState = {
  quotes: [],
  loading: false,
  error: undefined,
  refresh: true,
  hasMore: false,
  newQuote: initialQuote,
  searchParams: {
    pageSize: 15,
    page: 1,
    sortOrder: "recent",
    book: {},
    author: {},
    bookTags: [],
    quoteTags: [],
  },
};

export default function quotesListReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.GET_QUOTES:
      return { ...state, loading: true, refresh: false, error: undefined };
    case ACTIONS.GET_QUOTES_SUCCESS:
      console.log("GET_QUOTES_SUCCESS", payload);
      return {
        ...state,
        quotes: payload.quotes,
        loading: false,
        hasMore: payload.lastPage > state.page + 1,
        page: state.page + 1,
      };
    case ACTIONS.ADD_QUOTES:
      console.log("ADD_QUOTES", payload);
      return {
        ...state,
        quotes: [...state.quotes, ...payload.quotes],
        lastPage: payload.lastPage,
        loading: false,
        hasMore: payload.lastPage > state.page + 1,
        page: state.page + 1,
      };
    case ACTIONS.GET_QUOTES_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
