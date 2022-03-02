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
      const { newBook } = payload;
      return {
        ...state,
        books: state.books.map(book => {
          if (book._id === newBook._id) {
            return newBook;
          }
          return book;
        }),
        currentBook: newBook,
        loading: false,
      };
    }
    case ACTIONS.ADD_CHAPTER:
      console.log("ADD_CHAPTER", payload);
      const { chapter } = payload;
      return {
        ...state,
        currentChapter: chapter,
      };
    case ACTIONS.CREATE_CHAPTER_SUCCESS: {
      const newBook = {
        ...state.currentBook,
        chapters: state.currentBook.chapters
          ? [...state.currentBook.chapters, state.currentChapter]
          : [state.currentChapter],
      };
      return {
        ...state,
        books: state.books.map(book => {
          if (book._id === newBook._id) {
            return newBook;
          }
          return book;
        }),
      };
    }
    case ACTIONS.FAILURE:
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
    case ACTIONS.CREATE_CHAPTER_FAILURE:
      return { ...state, currentChapter: undefined };
    case ACTIONS.RESET_BOOK:
      console.log("RESET_BOOK");
      return { ...state, currentBook: undefined, currentChapter: undefined };
    default:
      return state;
  }
}
