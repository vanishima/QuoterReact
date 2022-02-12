import React from "react";

import arrowIcon from "icons/Arrow.png";

const TagList = () => {
  const tags = ["dev", "web", "javascript", "css"];

  const changeTag = tag => {
    console.log("changeTag", tag);
  };

  const addTag = () => {
    console.log("adding tag");
  };

  return (
    <div className="item">
      <input className="dropdown" type="checkbox" id="sidebar-tag" />
      <img src={arrowIcon} className="arrow" alt="arrow icon" />
      <label className="filter-title" htmlFor="sidebar-tag">
        Tags
      </label>
      <ul>
        {tags.map((tag, i) => (
          <li key={i} className="dropdown-option">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                onClick={() => changeTag(tag)}
              />
              {tag}
            </label>
          </li>
        ))}
        <li>
          <div className="inputWithButton">
            <input
              className="form-control"
              type="text"
              placeholder="new tags"
            />
            <button type="button" onClick={addTag}>
              Add
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TagList;
