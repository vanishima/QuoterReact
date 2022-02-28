import { createSelector } from "reselect";

export const selectBooks = state => state.books.books;
export const selectCurrentBook = state => state.books.currentBook;
export const selectCurrentChapter = state => state.books.currentChapter;

export const selectBookById = createSelector(
  selectBooks,
  (state, bookId) => bookId,
  (books, bookId) => {
    return books.find(book => book._id === bookId);
  }
);
