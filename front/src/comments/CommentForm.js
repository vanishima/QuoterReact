import { useState } from "react";
// import PropTypes from "prop-types";

const CommentForm = (props) => {
  const {
    submitLabel,
    handleSubmit,
    hasCancelButton = false,
    InitialText = "",
    handleCancel,
  } = props;
  const [text, setText] = useState(InitialText);
  const isTextareDisabled = text.length === 0;

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="comment-form-button" disabled={isTextareDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

CommentForm.propTypes = {};

export default CommentForm;
