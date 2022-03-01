import React from "react";
import Tag from "./Tag";

const Tags = ({ tags = [] }) => {
  return (
    <div className="tags mb-2">
      {tags
        .filter(tag => tag && tag !== "")
        .map((tag, i) => (
          <div key={i}>
            <Tag tag={tag} />
          </div>
        ))}
    </div>
  );
};

export default Tags;
