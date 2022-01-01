import React, { useState } from "react";
import { Link } from "react-router-dom";

// Element
import BookCard from "../books/BookCard";

const AuthorsList = (props) => {
  const { authors } = props;

  const [showImage, setShowImage] = useState(false);

  const handleDisplay = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="authors">
      <div className="authors-options">
        <button className="btn btn-outline-secondary" onClick={handleDisplay}>
          {showImage ? "Image" : "Text"}
        </button>
      </div>
      <div className="authors-container">
        {authors.map((a, i) => (
          <div key={i}>
            <div className="author-row row">
              <Link
                to={{ pathname: "/author", search: "id=" + a._id }}
                className="col-2 non-link bold author-link"
              >
                {a.name}
              </Link>

              <div className="col-2 row author-categories">
                {a.category &&
                  a.category.map((c, i) => (
                    <a
                      key={i}
                      href="/"
                      className="col-auto author-category-link non-link me-1"
                    >
                      {c}
                    </a>
                  ))}
              </div>
              <div className="col-8 row author-books">
                {showImage
                  ? a.books.map((b, i) => (
                      <div key={i} className="col-3">
                        <BookCard showImage={true} book={b} />
                      </div>
                    ))
                  : a.books.map((b, i) => (
                      <div key={i} className="col-6">
                        <BookCard showImage={false} book={b} />
                      </div>
                    ))}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorsList;
