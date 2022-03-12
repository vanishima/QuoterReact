import React from "react";
import _ from "lodash";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { processItem } from "./util";

import { createBook } from "reducers/books/actions";
import { setQuoteBookAuthor, setQuoteBook } from "reducers/quotes/quoteActions";

import "./styles/BookSelect.css";

const BookSelect = ({ submitting, quoteId, book, books, author, authors }) => {
  const dispatch = useDispatch();
  // console.group("BookSelect");
  // console.log("currentBook", currentBook);
  // console.log("books", books);
  // console.groupEnd();

  const handleCreate = bookTitle => {
    if (_.isEmpty(author)) {
      alert("Please select an author first");
    } else {
      const newBook = { title: bookTitle, author: author };
      dispatch(createBook(newBook));
      dispatch(setQuoteBook(processItem(newBook, "title"), quoteId));
    }
  };

  // set book to selected and choose author based on _id
  const handleChange = book => {
    console.log("handleChange", book);
    const selectedAuthor = authors.filter(
      author => author._id === book.author._id
    )[0];
    dispatch(setQuoteBookAuthor(book, selectedAuthor, quoteId));
  };

  const handleClear = () => {
    // dispatch(resetBook);
    dispatch(setQuoteBook(undefined, quoteId));
  };

  return (
    <CreatableSelect
      className="book-select"
      placeholder="Select Book..."
      options={books}
      value={processItem(book, "title")}
      createOption={handleCreate}
      changeOption={handleChange}
      clearOption={handleClear}
      isDisabled={submitting}
      isClearable
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.books.loading,
  books: state.books.books,
  authors: state.authors.authors,
  ...ownProps,
});

export default connect(mapStateToProps)(BookSelect);
