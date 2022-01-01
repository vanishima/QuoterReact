import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { InlineEditText } from "../utils/InlineEdit";

// API
import authorsAPI from "../../api/authorsAPI";

const FormCreateAuthor = (props) => {
  const { author, createAuthor} = props;
  const navigate = useNavigate();

  const [name, setName] = useState(author ? author.name : "");
  const [category, setCategory] = useState(
    author && author.category ? author.category.join(" ") : ""
  );
  const [url, setUrl] = useState(author ? author.url : "");
  const [edited, setEdited] = useState(author ? false : true);

  const updateAuthor = async (evt) => {
    evt.preventDefault();

    const newAuthor = {
      url: url,
      category: category,
      name: name,
    };

    if (author) {
      newAuthor._id = author._id;
    }

    console.log("newAuthor", newAuthor);

    const result = await authorsAPI.updateAuthor(newAuthor);

    if (!result.ok) {
      navigate(0);
    } else {
      const url = new URL(document.location);
      if (url.pathname === "/author") {
        // already in author's page
        navigate(0);
      } else {
        navigate("/author?id=" + result._id); // creating new author
      }
    }
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();

    await authorsAPI.deleteAuthor(author);
    navigate("/authors");
  };

  return (
    <div className="form-create-author">
      <div className="row">
        <h2 className="col-auto">{author ? name : "Create Author"}</h2>

        {edited && (
          <div className="col-auto right row">
            <button
              className="col-auto mb-2 me-2 btn btn-outline-primary"
              onClick={(evt) => {
                if (createAuthor){
                  createAuthor(name, category, url);
                } else {
                  updateAuthor(evt);
                }
              }}
            >
              {author ? "Save changes" : "Create"}
            </button>
            {author && (
              <button
                className="col-auto mb-2 me-2 btn btn-outline-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>

      <div className="row">
        <div className="col-auto">Name</div>
        <div className="col-auto">
          <InlineEditText
            setEdited={setEdited}
            value={name}
            setValue={setName}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-auto">Category</div>
        <div className="col-auto">
          <InlineEditText
            setEdited={setEdited}
            value={category}
            setValue={setCategory}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-auto">URL</div>
        <div className="col-auto">
          <InlineEditText setEdited={setEdited} value={url} setValue={setUrl} />
        </div>
      </div>
    </div>
  );
};

FormCreateAuthor.propTypes = {
  props: PropTypes.shape({
    author: PropTypes.object.isRequired,
  }),
};

export default FormCreateAuthor;
