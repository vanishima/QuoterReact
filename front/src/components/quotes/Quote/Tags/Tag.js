import React from "react";
import "./styles/Tag.css";

const Tag = ({ tag, handleRemove }) => {
  const tagText = typeof tag === "string" ? tag : tag.label;
  return (
    <div className="tag">
      {tagText}
      <span className="remove-tag-button" onClick={() => handleRemove(tag)}>
        &#x2715;
      </span>
    </div>
  );
};

export default Tag;
