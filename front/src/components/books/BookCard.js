import React from "react";
import PropTypes from "prop-types";

// import TextPreview from "../utils/TextPreview";


const BookCard = (props) => {
  const { showImage, book } = props;

  if (showImage) {
    return (
      <a className="non-link" href={`/book?id=${book._id}`}>
        <div className="book-image-card card mb-2 me-2 text-center">
          {book.coverUrl && (
            <img className="card-img img-fluid rounded-start" src={book.coverUrl} alt="book cover" />
          )}
          <div className="book-image-card-title">{book.title}</div>
        </div>
      </a>
    );
  }

  return (
    <a className="non-link" href={`/book?id=${book._id}`}>
      <div className="book-card card mb-3 me-2">
        <div className="card-body">
          <h3 className="book-card-title">{book.title}</h3>
          <div className="text-truncate">{book.introduction}</div>
{/*          <TextPreview
            className="book-card-intro"
            rawText={book.introduction}
          />*/}
        </div>
      </div>
    </a>
  );
};


BookCard.propTypes = {
  props: PropTypes.shape({
    showImage: PropTypes.bool,
    book: PropTypes.object.isRequired,
  }),
};

export default BookCard;
