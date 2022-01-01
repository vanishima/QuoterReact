import React, { useState } from "react";
import PropTypes from "prop-types";

const FormCreateBookInAuthor = (props) => {
  const { author, handleSubmit } = props;
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [keywords, setKeywords] = useState("");
  const [introduction, setIntroduction] = useState("");

  if (author) {
    return (
      <form className="form-create-book">
        <div className="form-floating mb-2">
          <input
            readOnly
            disabled
            type="text"
            className="form-control"
            id="author-input"
            value={author.name}
          />
          <label htmlFor="author-input">Author</label>
        </div>

        <div className="form-floating mb-2">
          <input
            required
            type="text"
            className="form-control"
            id="title-input"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="url-input">Title</label>
        </div>

        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            id="url-input"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <label htmlFor="url-input">URL</label>
        </div>

        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            id="keywords-input"
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
          />
          <label htmlFor="keywords-input">Keywords</label>
        </div>

        <div className="form-floating mb-2">
          <textarea
            type="text"
            className="form-control"
            id="intro-input"
            value={introduction}
            onChange={(e) => {
              setIntroduction(e.target.value);
            }}
          />
          <label htmlFor="intro-input">Introduction</label>
        </div>

        <button
          className="btn btn-primary"
          onClick={(evt) => {
            evt.preventDefault();
            console.log("ready to submit");
            handleSubmit(title, url, keywords, introduction);
          }}
        >
          Create Book
        </button>
      </form>
    );
  }
  return <div>Loading books</div>;
};

FormCreateBookInAuthor.propTypes = {
  props: PropTypes.shape({
    author: PropTypes.object,
  }),
};

export default FormCreateBookInAuthor;
