import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";

import { fetchBooks, setBook, createBook } from "reducers/books/actions";
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
  // console.log("default", submitting, isFetching, currentBook, currentAuthor);
  // console.log("books", books);
  // console.groupEnd();

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

  // set book to selected and choose author based on _id
  const changeBook = book => {
    const newAuthor = authors.filter(author => author._id === book.author._id);
    dispatch(setBook(book));
    dispatch(setAuthor(newAuthor));
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
  authors: state.authors.authors,
  currentBook: state.books.currentBook,
  currentAuthor: state.authors.currentAuthor,
  ...ownProps,
});

export default connect(mapStateToProps)(BookSelect);
