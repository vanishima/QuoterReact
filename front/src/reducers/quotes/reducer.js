import _ from "lodash";
import { ACTIONS } from "./actions";
import { QUOTE_ACTIONS } from "./quoteActions";
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
  quotes: {},
  loading: false,
  editing: false,
  error: undefined,
  refresh: true,
  hasMore: true,
  newQuote: undefined,
  activeQuoteId: undefined,
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
    case ACTIONS.GET_QUOTES_REQUEST:
      return { ...state, loading: true, error: undefined };
    case ACTIONS.GET_QUOTES_SUCCESS: {
      const { quotes, lastPage } = payload;
      // console.group("GET_QUOTES_SUCCESS");
      // console.log("quotes", payload.quotes.length);
      // console.log("lastPage", payload.lastPage);
      // console.log(
      //   "pageSize",
      //   state.searchParams.pageSize,
      //   "page",
      //   state.searchParams.page
      // );
      // console.groupEnd();
      return {
        ...state,
        quotes: quotes,
        loading: false,
        refresh: false,
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
        quotes: { ...state.quotes, ...quotes },
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
        newQuote: _.cloneDeep(initialQuote),
      };

    case ACTIONS.CREATE_QUOTE_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.CREATE_QUOTE_SUCCESS:
      const { quote } = payload;
      return {
        ...state,
        quotes: { [quote._id]: quote, ...state.quotes },
        loading: false,
        editing: false,
        newQuote: undefined,
      };
    case ACTIONS.CREATE_QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ACTIONS.UPDATE_QUOTE_INPUT: {
      const { key, value } = payload;
      return {
        ...state,
        newQuote: { ...state.newQuote, [key]: value },
      };
    }
    case ACTIONS.UPDATE_QUOTE_LIST_INPUT: {
      const { key, value } = payload;
      const updatedList = [...state.newQuote[key], value];
      return {
        ...state,
        newQuote: { ...state.newQuote, [key]: updatedList },
      };
    }

    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing,
        newQuote: state.newQuote ? state.newQuote : _.cloneDeep(initialQuote),
        activeQuoteId: undefined,
      };

    /* Update Quote */

    case ACTIONS.CANCEL_EDITING_QUOTE:
      return { ...state, editing: false, activeQuoteId: undefined };

    case SET_EDITING_QUOTE: {
      const { quoteId } = payload;
      return {
        ...state,
        editing: false,
        activeQuoteId: quoteId,
      };
    }

    /* SET QUOTE AUTHOR */
    case QUOTE_ACTIONS.SET_QUOTE_AUTHOR_NEW: {
      const { author } = payload;

      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          author: author,
          book: undefined,
          chapter: undefined,
        },
      };
    }

    case QUOTE_ACTIONS.SET_QUOTE_AUTHOR_LOCAL: {
      const { author, quoteId } = payload;

      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            author: author,
            book: undefined,
            chapter: undefined,
          },
        },
      };
    }

    /* SET QUOTE BOOK */
    case QUOTE_ACTIONS.SET_QUOTE_BOOK_AUTHOR_NEW: {
      const { author, book } = payload;
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          author: author,
          book: book,
          chapter: undefined,
        },
      };
    }

    case QUOTE_ACTIONS.SET_QUOTE_BOOK_AUTHOR_LOCAL: {
      const { author, book, quoteId } = payload;

      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            author: author,
            book: book,
            chapter: undefined,
          },
        },
      };
    }

    case QUOTE_ACTIONS.SET_QUOTE_BOOK_NEW: {
      const { book } = payload;
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          book: book,
          chapter: undefined,
        },
      };
    }

    case QUOTE_ACTIONS.SET_QUOTE_BOOK_LOCAL: {
      const { book, quoteId } = payload;

      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            book: book,
            chapter: undefined,
          },
        },
      };
    }

    /* SET QUOTE INPUT */
    case QUOTE_ACTIONS.SET_QUOTE_INPUT_NEW: {
      const { key, value } = payload;
      return {
        ...state,
        newQuote: { ...state.newQuote, [key]: value },
      };
    }

    case QUOTE_ACTIONS.SET_QUOTE_INPUT_LOCAL: {
      const { key, value, quoteId } = payload;
      console.log("SET_QUOTE_INPUT", key, value, quoteId);
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: { ...state.quotes[quoteId], [key]: value },
        },
      };
    }

    /* SET QUOTE TAG */
    case QUOTE_ACTIONS.ADD_TAG_TO_QUOTE_NEW: {
      const { tag } = payload;
      let updatedTags = state.newQuote.tags;
      updatedTags = updatedTags ? [...updatedTags, tag] : [tag];
      return {
        ...state,
        newQuote: { ...state.newQuote, tags: updatedTags },
      };
    }

    case QUOTE_ACTIONS.ADD_TAG_TO_QUOTE_LOCAL: {
      const { tag, quoteId } = payload;
      let updatedTags = state.quotes[quoteId].tags;
      updatedTags = updatedTags ? [...updatedTags, tag.label] : [tag.label];
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            tags: updatedTags,
          },
        },
      };
    }

    /* REMOVE TAG FROM QUOTE */
    case QUOTE_ACTIONS.REMOVE_TAG_FROM_QUOTE_NEW: {
      const { tag } = payload;
      let updatedTags = state.newQuote.tags.filter(t => t.label !== tag.label);
      return {
        ...state,
        newQuote: { ...state.newQuote, tags: updatedTags },
      };
    }

    case QUOTE_ACTIONS.REMOVE_TAG_FROM_QUOTE_LOCAL: {
      const { tag, quoteId } = payload;
      let updatedTags = state.quotes[quoteId].tags.filter(t => t !== tag.label);
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            tags: updatedTags,
          },
        },
      };
    }

    /* ADD QUOTE MEMO */
    case QUOTE_ACTIONS.ADD_MEMO_TO_QUOTE_NEW: {
      const { memo } = payload;
      let updatedMemos = state.newQuote.memos;
      updatedMemos = updatedMemos ? [...updatedMemos, memo] : [memo];
      return {
        ...state,
        newQuote: { ...state.newQuote, memos: updatedMemos },
      };
    }

    case QUOTE_ACTIONS.ADD_MEMO_TO_QUOTE_LOCAL: {
      const { memo, quoteId } = payload;
      let updatedMemos = state.quotes[quoteId].memos;
      updatedMemos = updatedMemos ? [...updatedMemos, memo] : [memo];
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            memos: updatedMemos,
          },
        },
      };
    }

    /* REMOVE QUOTE MEMO */
    case QUOTE_ACTIONS.REMOVE_MEMO_FROM_QUOTE_NEW: {
      const { memo } = payload;
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          memos: state.newQuote.memos.filter(m => m._id !== memo._id),
        },
      };
    }

    case QUOTE_ACTIONS.REMOVE_MEMO_FROM_QUOTE_LOCAL: {
      const { memo, quoteId } = payload;
      let updatedMemos = state.quotes[quoteId].memos.filter(
        m => m._id !== memo._id
      );
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            memos: updatedMemos,
          },
        },
      };
    }

    /* UPDATE QUOTE MEMO */
    case QUOTE_ACTIONS.UPDATE_MEMO_IN_QUOTE_NEW: {
      const { memo } = payload;
      let updatedMemos = state.newQuote.memos.map(m => {
        if (m._id === memo._id) {
          return memo;
        }
        return m;
      });
      return {
        ...state,
        newQuote: {
          ...state.newQuote,
          memos: updatedMemos,
        },
      };
    }

    case QUOTE_ACTIONS.UPDATE_MEMO_IN_QUOTE_LOCAL: {
      const { memo, quoteId } = payload;
      let updatedMemos = state.quotes[quoteId].memos.map(m => {
        if (m._id === memo._id) {
          return memo;
        }
        return m;
      });
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            memos: updatedMemos,
          },
        },
      };
    }

    case QUOTE_ACTIONS.UPDATE_LOCAL_QUOTE_INPUT: {
      const { quoteId, key, value } = payload;
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: { ...state.quotes[quoteId], [key]: value },
        },
      };
    }

    case QUOTE_ACTIONS.UPDATE_QUOTE_INPUT_LIST_BY_ID: {
      const { quoteId, key, value } = payload;
      console.log("UPDATE_QUOTE_INPUT_LIST_BY_ID", quoteId, key, value);
      const oldList = state.quotes[quoteId][key];
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            [key]:
              oldList && oldList.length > 0 ? [...oldList, value] : [value],
          },
        },
      };
    }

    case QUOTE_ACTIONS.UPDATE_QUOTE_MEMO_BY_ID: {
      console.log("UPDATE_QUOTE_MEMO_BY_ID");
      const { quoteId, memo } = payload;
      console.log("memo", memo);
      let updatedMemos = state.quotes[quoteId].memos;
      updatedMemos = updatedMemos.map(m => {
        if (m._id === memo._id) {
          return memo;
        }
        return m;
      });
      console.log("updatedMemos", updatedMemos);
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            memos: updatedMemos,
          },
        },
      };
    }

    case QUOTE_ACTIONS.REMOVE_MEMO_FROM_QUOTE: {
      console.log("REMOVE_MEMO_FROM_QUOTE");
      const { quoteId, memo } = payload;
      console.log("memo", memo);
      const updatedMemos = state.quotes[quoteId].memos.filter(
        m => m._id !== memo._id
      );
      console.log("updatedMemos", updatedMemos);
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            memos: updatedMemos,
          },
        },
      };
    }

    case QUOTE_ACTIONS.REMOVE_TAG_FROM_QUOTE: {
      const { quoteId, tag } = payload;
      const updatedTags = state.quotes[quoteId].tags.filter(
        t => t.label !== tag.label
      );
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            tags: updatedTags,
          },
        },
      };
    }

    case QUOTE_ACTIONS.UPDATE_QUOTE_AUTHOR_BY_ID: {
      const { quoteId, author } = payload;
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            author: author,
            book: undefined,
            chapter: undefined,
          },
        },
      };
    }

    case QUOTE_ACTIONS.UPDATE_QUOTE_BOOK_BY_ID: {
      const { quoteId, author, book } = payload;
      return {
        ...state,
        quotes: {
          ...state.quotes,
          [quoteId]: {
            ...state.quotes[quoteId],
            author: author,
            book: book,
            chapter: undefined,
          },
        },
      };
    }

    case QUOTE_ACTIONS.UPDATE_QUOTE_REQUEST: {
      const { quote } = payload;
      return {
        ...state,
        loading: true,
        quotes: { ...state.quotes, [quote._id]: quote },
      };
    }
    case QUOTE_ACTIONS.UPDATE_QUOTE_SUCCESS: {
      console.log("UPDATE_QUOTE_SUCCESS");
      // const { quote } = payload;
      return {
        ...state,
        loading: false,
        // quotes: { ...state.quotes, [quote._id]: quote },
        newQuote: undefined,
        activeQuoteId: undefined,
      };
    }
    case QUOTE_ACTIONS.UPDATE_QUOTE_FAILURE:
      return { ...state, loading: false };
    case QUOTE_ACTIONS.DELETE_QUOTE_SUCCESS: {
      const { quoteId } = payload;
      let updatedQuotes = { ...state.quotes };
      delete updatedQuotes[quoteId];
      return {
        ...state,
        loading: false,
        newQuote: undefined,
        quotes: updatedQuotes,
      };
    }
    default:
      return state;
  }
}
