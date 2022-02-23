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
    case ACTIONS.GET_QUOTES_SUCCESS: {
      const { quotes, lastPage } = payload;
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
        quotes: quotes,
        loading: false,
        hasMore: lastPage > state.searchParams.page + 1,
        searchParams: {
          ...state.searchParams,
          page: state.searchParams.page + 1,
        },
      };
    }
    case ACTIONS.LOAD_MORE_QUOTES_SUCCESS: {
      const { quotes, lastPage } = payload;
      return {
        ...state,
        quotes: [...state.quotes, ...quotes],
        loading: false,
        hasMore: lastPage > state.searchParams.page + 1,
        searchParams: {
          ...state.searchParams,
          lastPage: lastPage,
          page: state.searchParams.page + 1,
        },
      };
    }
    case ACTIONS.GET_QUOTES_FAILURE:
      return { ...state, loading: false, error: true };

    case ACTIONS.UPDATE_INPUT: {
      const { key, value } = payload;
      return {
        ...state,
        newQuote: { ...state.newQuote, [key]: value },
      };
    }
    case ACTIONS.ADD_MEMO: {
      const { memo } = payload;
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          memos: [...state.newQuote.memos, memo],
        },
      };
    }
    case ACTIONS.REMOVE_MEMO: {
      const { memoId } = payload;
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          memos: state.newQuote.memos.filter(memo => memo._id !== memoId),
        },
      };
    }
    case ACTIONS.UPDATE_MEMO: {
      const { _id, text } = payload;
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          memos: state.newQuote.memos.map(memo => {
            if (memo._id === _id) {
              return { ...memo, text: text };
            } else {
              return memo;
            }
          }),
        },
      };
    }
    case ACTIONS.INITIALIZE_QUOTE:
      return {
        ...state,
        editing: true,
        newQuote: _.cloneDeep(initialQuote),
      };
    case ACTIONS.CREATE_QUOTE:
      return { ...state, loading: true };
    case ACTIONS.CREATE_QUOTE_SUCCESS:
      const { quote } = payload;
      return {
        ...state,
        quotes: [quote, ...state.quotes],
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
