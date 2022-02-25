import React from "react";
import "./styles/Tag.css";

const Tag = ({ tag }) => {
  return <div className="tag">{tag.label}</div>;
};

export default Tag;
