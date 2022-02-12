import React, { useState, useEffect } from "react";

// Element
import FilterBar from "./FilterBar";
import FormCreateBook from "./books/FormCreateBook";

// API
import quotesAPI from "../api/quotesAPI";
import booksAPI from "../api/booksAPI";
import { getTimeDistance } from "../api/utilsAPI";

async function drawBooks(setBooks, sortOrder, limit) {
  const result = await quotesAPI.getBooksDashboard(sortOrder, limit);
  if (result.ok) {
    setBooks(result.books);
  } else {
    alert(result.msg);
  }
}

const DashboardBooks = () => {
  const [books, setBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState("recent");
  const [limit, setLimit] = useState(10);
  const [mode, setMode] = useState("viewing");

  const limit_options = [5, 10, 15];
  const sort_options = [
    { value: "recent", name: "Recent" },
    { value: "latest", name: "Latest" },
    { value: "most", name: "Most" },
  ];

  useEffect(() => {
    console.log("### DashboardBooks EFFECT ###");
    drawBooks(setBooks, sortOrder, limit);
  }, [sortOrder, limit]);

  const createBook = async (book) => {
    console.log("ready to create book", book);
    book.date = new Date();
    const result = await booksAPI.updateBook(book);
    if (result.ok) {
      book._id = result._id;
      setBooks([book, ...books]);
      setMode("viewing");
    }
  };

  return (
    <div className="dashboard-card card mb-3">
      <div className="card-body">
        <div className="row mb-2">
          <h2 className="card-title bold col-auto">Books</h2>
          <button
            type="button"
            className="btn btn-outline-secondary col-auto"
            onClick={() => {
              if (mode === "viewing") {
                console.log("set to editing");
                setMode("editing");
              } else {
                setMode("viewing");
              }
            }}
          >
            Add
          </button>
        </div>

        <FilterBar
          sortOrder={sortOrder}
          sort_options={sort_options}
          setSortOrder={setSortOrder}
          limit={limit}
          limit_options={limit_options}
          setLimit={setLimit}
        />

        {mode === "viewing" && (
          <ul className="list-group">
            {books.map((b, i) => (
              <li key={i} className="list-group-item">
                <a href={`/book?id=${b._id}`} className="non-link">
                  <div className="greyText">{getTimeDistance(b.date)}</div>
                  <div className="bold list-item-title">
                    {b.title}{" "}
                    <span className="badge rounded-pill bg-secondary">
                      {b.count}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
        {mode === "editing" && <FormCreateBook createBook={createBook} />}
      </div>
    </div>
  );
};

export default DashboardBooks;
