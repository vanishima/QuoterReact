import React, { useState, useEffect } from "react";

// Element
import FilterBar from "./FilterBar";
import FormCreateAuthor from "./authors/FormCreateAuthor";

// API
import quotesAPI from "../api/quotesAPI";
import { getTimeDistance } from "../api/utilsAPI";

async function drawAuthors(setAuthors, sortOrder, limit) {
  const result = await quotesAPI.getAuthorsDashboard(sortOrder, limit);
  if (result.ok) {
    setAuthors(result.authors);
  } else {
    alert(result.msg);
  }
}

const DashBoardAuthors = () => {
  const [authors, setAuthors] = useState([]);
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
    console.log("### DashBoardAuthors EFFECT ###");
    drawAuthors(setAuthors, sortOrder, limit);
  }, [sortOrder, limit]);

  return (
    <div className="dashboard-card card mb-3">
      <div className="card-body">
        <div className="row mb-2">
          <h2 className="card-title bold col-auto">Authors</h2>
          <button
            type="button"
            className="btn btn-outline-secondary col-auto"
            onClick={() => {
              if (mode === "viewing") {
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
            {authors.map((a, i) => (
              <li key={i} className="list-group-item">
                <a href={`/author?id=${a._id}`} className="non-link">
                  <div className="greyText">{getTimeDistance(a.date)}</div>
                  <div className="bold list-item-title">
                    {a.name}{" "}
                    <span className="badge rounded-pill bg-secondary">
                      {a.count}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
        {mode === "editing" && <FormCreateAuthor />}
      </div>
    </div>
  );
};

export default DashBoardAuthors;
