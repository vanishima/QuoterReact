import React from "react";
import PropTypes from "prop-types";

import BookCard from "./BookCard";


const BooksList = (props) => {
  const { books } = props;

  return (
    <div className="row books">
      {books.map((b, i) => (
        <div className="col-4" key={i}>
          <BookCard key={i} book={b} />
        </div>
      ))}
    </div>
  );
};

BooksList.propTypes = {
  props: PropTypes.shape({
    books: PropTypes.object.isRequired,
  }),
};

export default BooksList;
