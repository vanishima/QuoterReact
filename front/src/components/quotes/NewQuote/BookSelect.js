import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";

import { fetchBooks, setBook, createBook } from "reducers/books/actions";

const BookSelect = ({
  className,
  submitting,
  isFetching,
  books,
  currentBook,
  currentAuthor,
}) => {
  const dispatch = useDispatch();
  console.group("BookSelect");
  console.log("default", submitting, isFetching, currentBook, currentAuthor);
  console.log("books", books);
  console.groupEnd();

  useEffect(() => {
    console.log("fetching books");
    dispatch(fetchBooks());
  }, [dispatch]);

  const isDisabled = submitting || isFetching;

  const handleCreate = bookTitle => {
    const newBook = { title: bookTitle, author: currentAuthor };
    console.log("createBook", newBook);

    dispatch(createBook(newBook));
  };

  const changeBook = book => {
    console.log("changeBook", book);
    dispatch(setBook(book));
  };

  return (
    <CreatableSelect
      className={`${className}`}
      options={books}
      value={currentBook}
      createOption={handleCreate}
      changeOption={changeBook}
      isDisabled={isDisabled}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.books.loading,
  books: state.books.books,
  currentBook: state.books.currentBook,
  currentAuthor: state.authors.currentAuthor,
  ...ownProps,
});

export default connect(mapStateToProps)(BookSelect);
