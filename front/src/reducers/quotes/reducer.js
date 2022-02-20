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
  hasMore: true,
  newQuote: initialQuote,
  authors: [],
  books: [],
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
      console.group("GET_QUOTES_SUCCESS");
      console.log("quotes", payload.quotes.length);
      console.log("lastPage", payload.lastPage);
      console.log(
        "pageSize",
        state.searchParams.pageSize,
        "page",
        state.searchParams.page
      );
      console.groupEnd();
      return {
        ...state,
        quotes: payload.quotes,
        loading: false,
        hasMore: payload.lastPage > state.searchParams.page + 1,
        searchParams: {
          ...state.searchParams,
          page: state.searchParams.page + 1,
        },
      };
    case ACTIONS.ADD_QUOTES:
      console.log("ADD_QUOTES", payload);
      return {
        ...state,
        quotes: [...state.quotes, ...payload.quotes],
        loading: false,
        hasMore: payload.lastPage > state.searchParams.page + 1,
        searchParams: {
          ...state.searchParams,
          lastPage: payload.lastPage,
          page: state.searchParams.page + 1,
        },
      };
    case ACTIONS.GET_QUOTES_FAILURE:
      return { ...state, loading: false, error: true };

    case ACTIONS.UPDATE_INPUT:
      console.log("newQuote", state.newQuote);
      console.log("UPDATE_INPUT", payload);
      return {
        ...state,
        newQuote: { ...state.newQuote, [payload.key]: payload.value },
      };
    default:
      return state;
  }
}
