import { useReducer, useEffect } from "react";
// import PropTypes from "prop-types";

const initialState = {
  text: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "load_memo":
      return { ...state, text: action.payload.text };
    case "update_input":
      return { ...state, [action.payload.key]: action.payload.value };
    case "clean_memo":
      return { ...state, text: "" };
    default:
      return state;
  }
}

const CommentForm = (props) => {
  const {
    submitLabel,
    handleSubmit,
    hasCancelButton = false,
    InitialText = "",
    handleCancel,
  } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { text } = state;
  const isTextareDisabled = text.length === 0;

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(text);
    dispatch({ type: "clean_memo" });
  };

  useEffect(() => {
    dispatch({ type: "load_memo", payload: { text: InitialText } });
  }, [InitialText]);

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) =>
          dispatch({
            type: "update_input",
            payload: { key: "text", value: e.target.value },
          })
        }
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
