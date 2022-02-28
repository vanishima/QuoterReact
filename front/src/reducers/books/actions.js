import axiosInstance from "axiosconfig";
import { processItem } from "components/inputs/CreatableSelect/util";
import { booksMapper } from "./mappers";

export const ACTIONS = {
  LOADING: "LOADING",
  FAILURE: "FAILURE",
  FETCH_BOOKS_SUCCESS: "FETCH_BOOKS_SUCCESS",
  SET_BOOK: "SET_BOOK",
  CREATE_BOOK_SUCCESS: "CREATE_BOOK_SUCCESS",
  UPDATE_BOOK_SUCCESS: "UPDATE_BOOK_SUCCESS",
  CREATE_CHAPTER_SUCCESS: "CREATE_CHAPTER_SUCCESS",
  CREATE_CHAPTER_FAILURE: "CREATE_CHAPTER_FAILURE",
  ADD_CHAPTER: "ADD_CHAPTER",
  RESET_CHAPTER: "RESET_CHAPTER",
  SET_CHAPTER: "SET_CHAPTER",
  RESET_BOOK: "RESET_BOOK",
};

const FETCH_QUOTED_BOOKS_URL = "/books";
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

export const resetBook = {
  type: ACTIONS.RESET_BOOK,
};

export const createBook = book => {
  return async dispatch => {
    console.group("createBook", book);
    dispatch({ type: ACTIONS.LOADING });
    console.log("ready to create");

    await axiosInstance
      .post(UPDATE_BOOK_URL, {
        data: book,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log("got data", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.CREATE_BOOK_SUCCESS,
          payload: { book: processItem(res.data, "title") },
        });
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
        dispatch({ type: ACTIONS.FAILURE });
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

export const createChapter = (chapter, book) => {
  return async dispatch => {
    console.group("createChapter", chapter);
    chapter = processItem(chapter, "title");

    dispatch({
      type: ACTIONS.SET_CHAPTER,
      payload: { chapter },
    });
    book.chapters = book.chapters ? [...book.chapters, chapter] : [chapter];

    console.log("book", book);
    console.log("ready to update book");

    await axiosInstance
      .post(UPDATE_BOOK_URL, {
        data: book,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log("got data", res.data);
        console.groupEnd();
        dispatch({
          type: ACTIONS.CREATE_CHAPTER_SUCCESS,
        });
      })
      .catch(err => {
        console.log("failure", err);
        console.groupEnd();
        dispatch({ type: ACTIONS.CREATE_CHAPTER_FAILURE });
      });
  };
};
