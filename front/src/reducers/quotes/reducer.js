import _ from "lodash";
import { ACTIONS } from "./actions";
import { SET_EDITING_QUOTE, TOGGLE_EDITING } from "./actions";
import { isoDateWithoutTimezone } from "api/utilsAPI";

const initialQuote = {
  title: "",
  text: "",
  tags: [],
  date: isoDateWithoutTimezone(new Date()),
  memos: [],
  privacy_level: 1,
  book: undefined,
  author: undefined,
};

export const initialState = {
  quotes: [],
  loading: false,
  editing: false,
  error: undefined,
  refresh: true,
  hasMore: true,
  activeQuote: undefined,
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
    /* Quote List */
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

    /* Quote */
    case ACTIONS.INITIALIZE_QUOTE:
      return {
        ...state,
        editing: true,
        activeQuote: _.cloneDeep(initialQuote),
      };
    case ACTIONS.UPDATE_QUOTE_INPUT: {
      const { key, value } = payload;
      return {
        ...state,
        activeQuote: { ...state.activeQuote, [key]: value },
      };
    }

    case ACTIONS.UPDATE_QUOTE_LIST_INPUT: {
      const { key, value } = payload;
      const updatedList = [...state.activeQuote[key], value];
      return {
        ...state,
        activeQuote: { ...state.activeQuote, [key]: updatedList },
      };
    }
    case ACTIONS.ADD_MEMO: {
      const { memo } = payload;
      return {
        ...state,
        activeQuote: {
          ...state.activeQuote,
          memos: [...state.activeQuote.memos, memo],
        },
      };
    }
    case ACTIONS.REMOVE_MEMO: {
      const { memoId } = payload;
      return {
        ...state,
        activeQuote: {
          ...state.activeQuote,
          memos: state.activeQuote.memos.filter(memo => memo._id !== memoId),
        },
      };
    }
    case ACTIONS.UPDATE_MEMO: {
      const { _id, text } = payload;
      return {
        ...state,
        activeQuote: {
          ...state.activeQuote,
          memos: state.activeQuote.memos.map(memo => {
            if (memo._id === _id) {
              return { ...memo, text: text };
            } else {
              return memo;
            }
          }),
        },
      };
    }

    case TOGGLE_EDITING:
      return { ...state, editing: false };

    case ACTIONS.CREATE_QUOTE:
      return { ...state, loading: true };
    case ACTIONS.CREATE_QUOTE_SUCCESS:
      const { quote } = payload;
      return {
        ...state,
        quotes: [quote, ...state.quotes],
        loading: false,
        editing: false,
        activeQuote: _.cloneDeep(initialQuote),
      };
    case ACTIONS.CREATE_QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
      };

    /* Update Quote */
    case SET_EDITING_QUOTE: {
      const { quoteId } = payload;
      const activeQuote = state.quotes?.find(quote => quote._id === quoteId);
      console.log("SET_EDITING_QUOTE", activeQuote);
      return {
        ...state,
        editing: false,
        activeQuote: activeQuote,
      };
    }
    case ACTIONS.CANCEL_EDITING_QUOTE:
      return { ...state, activeQuote: undefined };
    case ACTIONS.UPDATE_QUOTE_SUCCESS: {
      console.log("UPDATE_QUOTE_SUCCESS");
      const { quote } = payload;
      console.log("new quote", quote);
      console.log("quotes", state.quotes);
      const updatedQuotes = state.quotes?.map(q => {
        if (q._id === quote._id) {
          return quote;
        }
        return q;
      });
      console.log("updatedQuotes", updatedQuotes);
      return {
        ...state,
        loading: false,
        activeQuote: undefined,
        quotes: updatedQuotes,
      };
    }

    case ACTIONS.DELETE_QUOTE_SUCCESS: {
      const { quoteId } = payload;
      const updatedQuotes = state.quotes?.filter(
        quote => quote._id !== quoteId
      );
      return {
        ...state,
        loading: false,
        activeQuote: undefined,
        quotes: updatedQuotes,
      };
    }
    default:
      return state;
  }
}
