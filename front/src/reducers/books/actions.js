import axiosInstance from "axiosconfig";
import { processItem } from "components/inputs/CreatableSelect/util";
import { booksMapper } from "./mappers";
import { setQuoteBook, setQuoteChapter } from "reducers/quotes/quoteActions";

export const ACTIONS = {
  LOADING: "LOADING",
  FAILURE: "FAILURE",
  FETCH_BOOKS_SUCCESS: "FETCH_BOOKS_SUCCESS",
  SET_BOOK: "SET_BOOK",
  CREATE_BOOK_SUCCESS: "CREATE_BOOK_SUCCESS",
  UPDATE_BOOK_SUCCESS: "UPDATE_BOOK_SUCCESS",
  UPDATE_BOOK_FAILURE: "UPDATE_BOOK_FAILURE",
  CREATE_CHAPTER_SUCCESS: "CREATE_CHAPTER_SUCCESS",
  RESET_CHAPTER: "RESET_CHAPTER",
  SET_CHAPTER: "SET_CHAPTER",
  RESET_BOOK: "RESET_BOOK",
  MOVE_BOOK_TO_FRONT: "MOVE_BOOK_TO_FRONT",
};

const FETCH_QUOTED_BOOKS_URL = "/books";
const CREATE_BOOK_URL = "/books/create";
const UPDATE_BOOK_URL = "/books/update";

export const fetchBooks = () => {
  return async dispatch => {
    // console.group("fetchbooks");
    dispatch({ type: ACTIONS.LOADING });

    await axiosInstance
      .get(FETCH_QUOTED_BOOKS_URL)
      .then(async res => {
        // console.log("got book data", res.data);

        dispatch({
          type: ACTIONS.FETCH_BOOKS_SUCCESS,
          payload: { books: booksMapper(res.data.books) },
        });
      })
      .catch(err => {
        console.log("failure", err);
        dispatch({ type: ACTIONS.FAILURE });
      });

    console.groupEnd();
  };
};

export const setBook = book => {
  return { type: ACTIONS.SET_BOOK, payload: { book } };
};

export const resetBook = () => {
  return {
    type: ACTIONS.RESET_BOOK,
  };
};

export const createBook = book => {
  return async dispatch => {
    console.group("createBook", book);
    dispatch({ type: ACTIONS.LOADING });
    console.log("ready to create");

    await axiosInstance
      .post(CREATE_BOOK_URL, book, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log("got data", res.data);
        const newBook = processItem(res.data, "title");
        console.groupEnd();
        dispatch({
          type: ACTIONS.CREATE_BOOK_SUCCESS,
          payload: { book: newBook },
        });
        dispatch(setQuoteBook(newBook));
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.FAILURE });
      });
  };
};

export const updateBook = book => {
  return async dispatch => {
    console.group("createBook", book);
    dispatch({ type: ACTIONS.LOADING });
    console.log("ready to create");

    await axiosInstance
      .post(UPDATE_BOOK_URL, book, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log("got data", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.UPDATE_BOOK_SUCCESS,
          payload: { newBook: processItem(res.data, "title") },
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.UPDATE_BOOK_FAILURE });
      });
  };
};

/* Chapters */
export const setChapter = chapter => ({
  type: ACTIONS.SET_CHAPTER,
  payload: { chapter },
});

export const resetChapter = () => ({
  type: ACTIONS.RESET_CHAPTER,
});

export const createChapter = (chapter, book, quoteId) => {
  return async dispatch => {
    console.group("createChapter", chapter);
    chapter = processItem(chapter, "title");

    dispatch({
      type: ACTIONS.SET_CHAPTER,
      payload: { chapter },
    });

    // append chapter to book.chapters
    book.chapters = book.chapters ? [...book.chapters, chapter] : [chapter];

    // update book
    await axiosInstance
      .post(UPDATE_BOOK_URL, book, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log("got data", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.CREATE_CHAPTER_SUCCESS,
          payload: { book },
        });
        dispatch(setQuoteChapter(chapter, quoteId));
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.UPDATE_BOOK_FAILURE });
      });
  };
};

export const moveBookToFront = book => ({
  type: ACTIONS.MOVE_BOOK_TO_FRONT,
  payload: { book },
});
