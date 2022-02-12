import React, { useState, useEffect } from "react";
import quotesAPI from "api/quotesAPI";

import arrowIcon from "icons/Arrow.png";

const SORT_ORDER = "recent";
const DEFAULT_LIMIT = 5;

async function drawBooks(setBooks, sortOrder, limit) {
  const result = await quotesAPI.getBooksDashboard(sortOrder, limit);
  if (result.ok) {
    setBooks(result.books);
  } else {
    alert(result.msg);
  }
}

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  const allBooksText = limit === 0 ? "Reset" : "All";
  const disableLoadLess = limit === DEFAULT_LIMIT;
  const disableLoadMore = allBooksText === "Reset";

  useEffect(() => {
    console.log("### DashboardBooks EFFECT ###");
    drawBooks(setBooks, SORT_ORDER, limit);
  }, [limit]);

  const loadMoreBooks = () => {
    setLimit(limit + 5);
  };

  const loadLessBooks = () => {
    setLimit(Math.max(0, limit - 5));
  };

  const loadAllBooks = () => {
    console.log("loadAllBooks", limit);
    if (limit === 0) {
      setLimit(5);
    } else {
      setLimit(0);
    }
  };
  //list-group

  return (
    <div className="item">
      <input className="dropdown" type="checkbox" id="sidebar-book-title" />
      <img src={arrowIcon} className="arrow" alt="arrow icon" />
      <label className="filter-title" htmlFor="sidebar-book-title">
        Books
      </label>
      <ul>
        {books.map((b, i) => (
          <li key={i} className="dropdown-option">
            <a href={`/book?id=${b._id}`} className="non-link">
              <div className="list-item-title">
                {b.title}({b.count})
              </div>
            </a>
          </li>
        ))}
        <li>
          <button
            className="btn loadmore"
            onClick={loadLessBooks}
            disabled={disableLoadLess}
          >
            -5
          </button>
          <button
            className="btn loadmore"
            onClick={loadMoreBooks}
            disabled={disableLoadMore}
          >
            +5
          </button>
          <button className="btn loadmore" onClick={loadAllBooks}>
            {allBooksText}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BookList;
