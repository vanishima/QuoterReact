import axios from "axios";
import {
  processItem,
  processItems,
} from "components/inputs/CreatableSelect/util";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";

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
};

const FETCH_BOOK_URL = "/books";
const UPDATE_BOOK_URL = "/books/update";

export const fetchBooks = () => {
  return dispatch => {
    console.group("fetchbooks");
    dispatch({ type: ACTIONS.LOADING });

    axios
      .get(FRONTEND + FETCH_BOOK_URL, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        mode: "cors",
      })
      .then(async res => {
        console.log("got book data", res.data);

        dispatch({
          type: ACTIONS.FETCH_BOOKS_SUCCESS,
          payload: { books: processItems(res.data.books, "title") },
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

export const createBook = book => {
  return async dispatch => {
    console.group("createBook", book);
    dispatch({ type: ACTIONS.LOADING });
    console.log("ready to create");
    await axios
      .post(FRONTEND + UPDATE_BOOK_URL, book, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        mode: "cors",
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
    await axios
      .post(FRONTEND + UPDATE_BOOK_URL, book, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        mode: "cors",
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
    await axios
      .post(FRONTEND + UPDATE_BOOK_URL, book, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        mode: "cors",
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
