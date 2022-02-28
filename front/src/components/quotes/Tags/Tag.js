import React from "react";
import "./styles/Tag.css";

const Tag = ({ tag }) => {
  const tagText = typeof tag === "string" ? tag : tag.label;
  return <div className="tag">{tagText}</div>;
};

export default Tag;
