import { useState, useEffect } from "react";

import CreatableSelectModel from "../utils/CreatableSelectModel";
import {
  InlineLabelEditText,
  InlineLabelEditTextarea,
} from "../utils/InlineEdit";

// API
import { getPinyin } from "../../api/utilsAPI";
import authorsAPI from "../../api/authorsAPI";

async function drawAuthors(setAuthors, setAuthor) {
  const result = await authorsAPI.getAuthors();
  if (result.ok) {
    setAuthors(
      result.authors.map((author) => {
        return { ...author, value: getPinyin(author.name), label: author.name };
      })
    );
    // set default author to first one in the list
    setAuthor({
      ...result.authors[0],
      value: getPinyin(result.authors[0].name),
      label: result.authors[0].name,
    });
  } else {
    alert(result.msg);
  }
}

const FormCreateBook = (props) => {
  const { createBook } = props;

  const [author, setAuthor] = useState({ name: "" });
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    drawAuthors(setAuthors, setAuthor);
  }, []);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [keywords, setKeywords] = useState("");
  const [introduction, setIntroduction] = useState("");

  const packageBook = () => {
    return {
      author: { _id: author._id, name: author.name, value: author.value },
      title: title,
      url: url,
      keywords: keywords,
      introduction: introduction,
    };
  };

  return (
    <form className="form-create-book">
      {/*<InlineLabelEditText label="Author Name" value={author.name} />*/}

      <div className="form-control mb-2" style={{ border: "none" }}>
        <label htmlFor="book-select-author" className="text-muted">
          Author name
        </label>
        <CreatableSelectModel
          id="book-select-author"
          createOption={authorsAPI.quickCreateAuthor}
          options={authors}
          setOptions={setAuthors}
          setValue={setAuthor}
          defaultValue={author}
        />
      </div>

      <InlineLabelEditText label="Title" value={title} setValue={setTitle} />

      <InlineLabelEditText label="URL" value={url} setValue={setUrl} />

      <InlineLabelEditText
        label="Keywords"
        value={keywords}
        setValue={setKeywords}
      />

      <InlineLabelEditTextarea
        label="Introduction"
        value={introduction}
        setValue={setIntroduction}
        height="100px"
      />

      <button
        className="btn btn-primary"
        onClick={(evt) => {
          evt.preventDefault();
          console.log("ready to submit");
          createBook(packageBook());
        }}
      >
        Create Book
      </button>
    </form>
  );
};

export default FormCreateBook;
