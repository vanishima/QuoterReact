import React from "react";
import Tag from "./Tag";
import { useSelector, useDispatch } from "react-redux";
import { selectShowTag } from "reducers/theme/selectors";

import "./styles/Tags.css";
import { removeTagFromQuote } from "reducers/quotes/quoteActions";

const Tags = ({ tags = [], quoteId, handleChange }) => {
  const dispatch = useDispatch();
  const showTag = useSelector(selectShowTag);
  if (!showTag || tags.length === 0) return null;

  const handleRemove = tag => {
    console.log("remove tag", tag);
    dispatch(removeTagFromQuote(tag, quoteId));
    handleChange();
  };

  return (
    <div className="tags mb-2">
      {tags
        .filter(tag => tag && tag !== "")
        .map((tag, i) => (
          <div key={i}>
            <Tag tag={tag} handleRemove={handleRemove} />
          </div>
        ))}
    </div>
  );
};

export default Tags;
