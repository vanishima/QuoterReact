import React from "react";
import PropTypes from "prop-types";

const TextIndentation = ({ rawText }) => {
  const lines = rawText.split("\n");

  return (
    <div className="indented-text">
      {lines.map((l, i) => (
        <p key={i} style={{ textIndent: "40px" }}>
          {l}
        </p>
      ))}
    </div>
  );
};

TextIndentation.propTypes = {
  rawText: PropTypes.string,
};

export default TextIndentation;
