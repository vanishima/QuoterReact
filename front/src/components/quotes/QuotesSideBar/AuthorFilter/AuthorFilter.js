import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames/bind";
import Select from "react-select";
import { setSearchAuthor } from "reducers/quotes/actions";
import { selectAuthors } from "reducers/authors/selectors";

import styles from "./styles/AuthorFilter.scss";

const cx = classnames.bind(styles);

const AuthorFilter = () => {
  const dispatch = useDispatch();

  const authors = useSelector(selectAuthors);

  useEffect(() => {}, [authors]);

  const handleChange = author => {
    console.log("selected", author);
    dispatch(setSearchAuthor(author));
  };

  return (
    <Select
      options={authors}
      isClearable
      name="author"
      className="author-filter"
      onChange={handleChange}
      placeholder="Select Author"
    />
  );
};

export default AuthorFilter;
