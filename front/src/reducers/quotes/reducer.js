import _ from "lodash";
import { ACTIONS } from "./actions";
import { isoDateWithoutTimezone } from "api/utilsAPI";

const initialQuote = {
  title: "",
  text: "",
  tags: [],
  date: isoDateWithoutTimezone(new Date()),
  memos: [],
  privacy_level: 1,
};

export const initialState = {
  quotes: [],
  loading: false,
  editing: false,
  error: undefined,
  refresh: true,
  hasMore: true,
  newQuote: {},
  searchParams: {
    pageSize: 25,
    page: 1,
    sortOrder: "recent",
    // book: {},
    // author: {},
    // bookTags: [],
    // quoteTags: [],
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
      return {
        ...state,
        newQuote: { ...state.newQuote, [payload.key]: payload.value },
      };
    case ACTIONS.ADD_MEMO:
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          memos: [...state.newQuote.memos, payload],
        },
      };
    case ACTIONS.REMOVE_MEMO:
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          memos: state.newQuote.memos.filter(memo => memo._id !== payload),
        },
      };

    case ACTIONS.UPDATE_MEMO:
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          memos: state.newQuote.memos.map(memo => {
            if (memo._id === payload._id) {
              return { ...memo, text: payload.text };
            } else {
              return memo;
            }
          }),
        },
      };
    case ACTIONS.INITIALIZE_QUOTE:
      return {
        ...state,
        editing: true,
        newQuote: _.cloneDeep(initialQuote),
      };
    case ACTIONS.CREATE_QUOTE:
      return { ...state, loading: true };
    case ACTIONS.CREATE_QUOTE_SUCCESS:
      console.log("CREATE_QUOTE_SUCCESS", payload);
      return {
        ...state,
        quotes: [payload, ...state.quotes],
        loading: false,
        editing: false,
        newQuote: _.cloneDeep(initialQuote),
      };
    case ACTIONS.CREATE_QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
