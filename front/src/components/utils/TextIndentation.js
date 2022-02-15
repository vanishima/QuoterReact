import React from "react";
import PropTypes from "prop-types";

const TextIndentation = ({ rawText, className = "" }) => {
  const lines = rawText.split("\n");

  return (
    <div className={`${className}`}>
      {lines.map((l, i) => (
        <p key={i} style={{ textIndent: "2rem" }}>
          {l}
        </p>
      ))}
    </div>
  );
};

TextIndentation.propTypes = {
  rawText: PropTypes.string,
  className: PropTypes.string,
};

export default TextIndentation;
