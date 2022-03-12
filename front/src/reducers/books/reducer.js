import { ACTIONS } from "./actions";

export const initialState = {
  books: [],
  loading: false,
  currentBook: undefined,
  currentChapter: undefined,
};

export default function booksReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true };
    case ACTIONS.FETCH_BOOKS_SUCCESS:
      const { books } = payload;
      return {
        ...state,
        loading: false,
        books: books,
      };
    case ACTIONS.SET_BOOK: {
      const { book } = payload;
      return { ...state, currentBook: book, currentChapter: undefined };
    }
    case ACTIONS.CREATE_BOOK_SUCCESS: {
      const { book } = payload;
      return {
        ...state,
        books: [book, ...state.books],
        currentBook: book,
        loading: false,
      };
    }
    case ACTIONS.UPDATE_BOOK_SUCCESS: {
      const { book } = payload;
      return {
        ...state,
        books: state.books.map(b => {
          if (b._id === book._id) {
            return book;
          }
          return b;
        }),
        currentBook: book,
        loading: false,
      };
    }
    case ACTIONS.CREATE_CHAPTER_SUCCESS: {
      const { book, chapter } = payload;
      return {
        ...state,
        books: state.books.map(b => {
          if (b._id === book._id) {
            return book;
          }
          return b;
        }),
        currentChapter: chapter,
        loading: false,
      };
    }
    case ACTIONS.UPDATE_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ACTIONS.SET_CHAPTER: {
      const { chapter } = payload;
      return {
        ...state,
        currentChapter: chapter || undefined,
      };
    }
    case ACTIONS.RESET_CHAPTER:
      return {
        ...state,
        currentChapter: undefined,
      };
    case ACTIONS.RESET_BOOK:
      console.log("RESET_BOOK");
      return { ...state, currentBook: undefined, currentChapter: undefined };
    case ACTIONS.MOVE_BOOK_TO_FRONT: {
      const { book } = payload;
      const updatedBooks = state.books.filter(b => b._id !== book._id);
      updatedBooks.unshift(book);
      return { ...state, books: updatedBooks };
    }

    default:
      return state;
  }
}
