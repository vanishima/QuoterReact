import React from "react";
import Tag from "./Tag";
import { useSelector } from "react-redux";
import { selectShowTag } from "reducers/theme/selectors";

import "./styles/Tags.css";

const Tags = ({ tags = [], quoteId }) => {
  const showTag = useSelector(selectShowTag);
  if (!showTag && quoteId) return null;

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
