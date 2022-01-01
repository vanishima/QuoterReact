import React from "react";
import PropTypes from "prop-types";

const MAX_TEXT = 50;

const TextPreview = ({ rawText, maxText, className }) => {
  maxText = maxText ? maxText : MAX_TEXT;
  let text = "";
  if (rawText) {
    text =
      rawText.length < MAX_TEXT
        ? rawText
        : rawText.substring(0, maxText) + "...";
  }
  return <p className={className}>{text}</p>;
};

TextPreview.propTypes = {
  rawText: PropTypes.string,
  maxText: PropTypes.number,
};

export default TextPreview;
