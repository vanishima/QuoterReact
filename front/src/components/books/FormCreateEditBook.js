import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Elements
import { InlineEditText, InlineEditTextarea } from "../utils/InlineEdit";
import UploadImageForm from "../utils/UploadImageForm";

// API
import booksAPI from "../../api/booksAPI";

const FormCreateEditBook = (props) => {
  const { book, author } = props;

  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [keywords, setKeywords] = useState("");
  const [edited, setEdited] = useState(false);
  const [url, setUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  useEffect(() => {
    // set values according to book
    if (book) {
      setTitle(book.title);
      if (book.introduction) setIntroduction(book.introduction);
      if (book.keywords) setKeywords(book.keywords.join(" "));
      if (book.url) setUrl(book.url);
      if (book.cover) setUrl(book.cover);
      if (book.coverUrl) setCoverUrl(book.coverUrl);
    }
  }, [book, author]);

  const navigate = useNavigate();

  const handleUpdate = async (evt) => {
    evt.preventDefault();

    const newBook = {
      _id: book._id,
      title: title,
      author: book ? book.author : { name: author.name, _id: author._id },
      url: url,
      keywords: keywords,
      introduction: introduction,
      coverUrl: coverUrl,
    };

    const result = await booksAPI.updateBook(newBook);
    console.log("FormCreateEditBook", result);

    if (!result.ok) {
      navigate(0);
    } else {
      const url = new URL(document.location);
      if (url.pathname === "/book") {
        navigate(0);
      } else {
        navigate("/book?id=" + result._id);
      }
    }
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();

    await booksAPI.deleteBook(book);
    navigate("/author?id=" + book.author._id);
  };

  return (
    <div>
      {book && (
        <div>

          <div className="row">
            <div className="col-6">
              <h2>{title}</h2>
            </div>
            <div className="col-auto row right">
              {(!book || edited) && (
                <button
                  className="col-auto mb-2 me-2 btn btn-outline-primary"
                  onClick={handleUpdate}
                >
                  Save changes
                </button>
              )}
              {book && edited && (
                <button
                  className="col-auto mb-2 me-2 btn btn-outline-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
            </div>
          </div>

          <div className="bookStaticInfo">
            <div>
              <div className="row">
                <div className="col-2">Title</div>
                <div className="col-10">
                  <InlineEditText
                    setEdited={setEdited}
                    value={title}
                    setValue={setTitle}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2">Author</div>
                <div className="col-10">
                  <a
                    className="non-link bold"
                    href={`/author?id=${book.author._id}`}
                  >
                    {book.author.name}
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <a
                    className="non-link"
                    href={book.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    URL
                  </a>
                </div>
                <div className="col-10">
                  <InlineEditText
                    setEdited={setEdited}
                    value={url}
                    setValue={setUrl}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-2">Keywords</div>
                <div className="col-10">
                  <InlineEditText
                    setEdited={setEdited}
                    value={keywords}
                    setValue={setKeywords}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-2">Introduction</div>
                <div className="col-10">
                  <InlineEditTextarea
                    setEdited={setEdited}
                    value={introduction}
                    setValue={setIntroduction}
                  />
                </div>
              </div>

              <div className="row">
                {coverUrl ? (
                <div>
                  <img src={coverUrl} alt="book" className="img-book-cover" />
                  <UploadImageForm
                    setEdited={setEdited}
                    url={coverUrl}
                    setUrl={setCoverUrl}
                  />
                </div>
              ) : (
                <div>
                  <UploadImageForm
                    setEdited={setEdited}
                    url={coverUrl}
                    setUrl={setCoverUrl}
                  />
                </div>
              )}
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

FormCreateEditBook.propTypes = {
  props: PropTypes.shape({
    book: PropTypes.object,
    author: PropTypes.object,
  }),
};

export default FormCreateEditBook;
