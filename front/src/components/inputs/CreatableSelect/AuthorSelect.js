import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";

import {
  fetchAuthors,
  setAuthor,
  createAuthor,
} from "reducers/authors/actions";

const AuthorSelect = ({
  className,
  submitting,
  isFetching,
  authors,
  currentAuthor,
}) => {
  const dispatch = useDispatch();
  // console.group("AuthorSelect");
  // console.log("default", submitting, isFetching, currentAuthor);
  // console.log("authors", authors);
  // console.groupEnd();

  useEffect(() => {
    // console.log("fetching authors");
    dispatch(fetchAuthors());
  }, [dispatch]);

  const handleCreate = authorName => {
    console.log("createAuthor", authorName);
    dispatch(createAuthor({ name: authorName }));
  };

  const changeAuthor = author => {
    console.log("changeAuthor", author);
    dispatch(setAuthor(author));
  };

  return (
    <CreatableSelect
      className={`${className}`}
      options={authors}
      value={currentAuthor}
      createOption={handleCreate}
      changeOption={changeAuthor}
      isDisabled={submitting}
      isLoading={isFetching}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.authors.loading,
  authors: state.authors.authors,
  currentAuthor: state.authors.currentAuthor,
  ...ownProps,
});

export default connect(mapStateToProps)(AuthorSelect);
