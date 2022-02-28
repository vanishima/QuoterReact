import React from "react";
import _ from "lodash";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { processItem } from "./util";

import { setBook, createBook, resetBook } from "reducers/books/actions";
import { setAuthor } from "reducers/authors/actions";

const BookSelect = ({
  className,
  submitting,
  isFetching,
  books,
  authors,
  currentBook,
  currentAuthor,
}) => {
  const dispatch = useDispatch();
  // console.group("BookSelect");
  // console.log("currentBook", currentBook);
  // console.log("default", submitting, isFetching, currentBook, currentAuthor);
  // console.log("books", books);
  // console.groupEnd();

  const handleCreate = bookTitle => {
    if (_.isEmpty(currentAuthor)) {
      alert("Please select an author first");
    } else {
      const newBook = { title: bookTitle, author: currentAuthor };
      // console.log("createBook", newBook);
      dispatch(createBook(newBook));
    }
  };

  // set book to selected and choose author based on _id
  const handleChange = book => {
    console.log("handleChange", book);
    const newAuthor = authors.filter(
      author => author._id === book.author._id
    )[0];
    dispatch(setBook(book));
    console.log("newauthor", newAuthor);
    dispatch(setAuthor(newAuthor));
  };

  const handleClear = () => {
    dispatch(resetBook);
  };

  return (
    <CreatableSelect
      className={`${className}`}
      placeholder="Select Book..."
      options={books}
      value={currentBook && processItem(currentBook, "title")}
      createOption={handleCreate}
      changeOption={handleChange}
      clearOption={handleClear}
      isDisabled={submitting}
      isClearable
      // isLoading={isFetching}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.books.loading,
  books: state.books.books,
  authors: state.authors.authors,
  currentBook: state.books.currentBook,
  currentAuthor: state.authors.currentAuthor,
  ...ownProps,
});

export default connect(mapStateToProps)(BookSelect);
