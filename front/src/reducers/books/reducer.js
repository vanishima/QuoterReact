import { ACTIONS } from "./actions";

export const initialState = {
  books: [],
  loading: false,
  currentBook: {},
};

export default function booksReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true };
    case ACTIONS.FETCH_BOOKS_SUCCESS:
      console.log("FETCH_BOOKS_SUCCESS", payload);
      return {
        ...state,
        loading: false,
        books: payload.books,
      };
    case ACTIONS.SET_BOOK:
      return { ...state, currentBook: payload };
    case ACTIONS.CREATE_BOOK_SUCCESS:
      console.log("CREATE_BOOK_SUCCESS", payload);
      return {
        ...state,
        books: [payload, ...state.books],
        currentBook: payload.book,
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
