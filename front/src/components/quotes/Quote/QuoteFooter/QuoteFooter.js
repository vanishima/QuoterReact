import React from "react";

import "./styles/QuoteFooter.css";

const QuoteFooter = ({ author, book }) => {
  return (
    <footer className="blockquote-footer">
      <span className="author">
        <a className="non-link" href={`/author?id=${author._id}`}>
          {author.name}
        </a>
      </span>
      <span>, </span>
      <cite title="Source Title">
        <a className="non-link" href={`/book?id=${book._id}`}>
          {book.title}
        </a>
      </cite>
    </footer>
  );
};

export default QuoteFooter;
