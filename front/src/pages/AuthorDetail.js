import React, { useState, useEffect } from "react";
// import {useNavigate} from "react-router-dom";

// Element
import Layout from "../components/Layout";
import FormCreateBookInAuthor from "../components/books/FormCreateBookInAuthor";
import FormCreateAuthor from "../components/authors/FormCreateAuthor";
import BooksList from "../components/books/BooksList";
import QuotesList from "../components/quotes/QuotesList";

// API
import authorsAPI from "../api/authorsAPI";
import booksAPI from "../api/booksAPI";

import "../styles/authorDetail.css";

async function drawAuthor(setAuthor, setBooks, setQuotes) {
  const url = new URL(window.location);
  const author_id = url.searchParams.get("id");
  console.log("AuthorDetail: ", author_id);
  const result = await authorsAPI.getAuthorById(author_id);
  console.log("drawAuthor result", result);
  if (result.ok) {
    setAuthor(result.author);
    if (result.author.quotes) setQuotes(result.author.quotes);
    if (result.author.books) setBooks(result.author.books);
  } else {
    alert(result.msg);
  }
}

const AuthorDetail = (props) => {
  const [author, setAuthor] = useState();
  const [books, setBooks] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    drawAuthor(setAuthor, setBooks, setQuotes);
  }, []);

  const createBook = async (title, url, keywords, introduction) => {
    if (title === "") {
      alert("Please enter book information");
      return;
    }
    console.log("ready to create book", title, url, keywords, introduction);

    const book = {
      author: { name: author.name, _id: author._id },
      title: title,
      url: url,
      keywords: keywords,
      introduction: introduction,
    };
    console.log("ready to create book", book);

    const result = await booksAPI.updateBook(book);

    if (!result.ok) {
      // navigate(0);
    } else {
      book._id = result._id;
      setBooks([...books, book]);
      // navigate("/book?id=" + result._id);
    }
  };

  return (
    <Layout currPage={"/authors"}>
      <div className="content-page">
        <div className="row">
          <div className="col-8">
            {author && <FormCreateAuthor author={author} />}

            <hr />

            <div>
              <div className="row">
                <h3 className="col-auto">Books by author</h3>
                <div className="btn-group col-auto">
                  <button
                    type="button"
                    className="btn btn-outline-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                  >
                    Add
                  </button>
                  <div className="dropdown-menu dropdown-book-create">
                    <FormCreateBookInAuthor
                      author={author}
                      handleSubmit={createBook}
                    />
                  </div>
                </div>
              </div>

              {books && <BooksList books={books} />}
            </div>

            <hr />

            <div>
              <h3>Quotes by author</h3>
              {quotes && (
                <QuotesList
                  quotes={quotes}
                  author={author}
                  setQuotes={setQuotes}
                />
              )}
            </div>
          </div>
          <div className="col-4">
            <FormCreateBookInAuthor author={author} handleSubmit={createBook}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorDetail;
