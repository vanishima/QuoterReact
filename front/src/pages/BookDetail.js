import React, { useState, useEffect } from "react";

// Element
import Layout from "../components/common/Layout";
import QuotesList from "../components/quotes/Quotes/QuotesList";
import FormCreateQuoteInBook from "../components/quotes/forms/FormCreateQuoteInBook";
import FormEditBook from "../components/books/FormEditBook";

// API
import booksAPI from "../api/booksAPI";

import "../styles/books.css";

async function drawBook(setBook, setQuotes) {
  const url = new URL(window.location);
  const book_id = url.searchParams.get("id");
  const result = await booksAPI.getBookById(book_id);
  if (result.ok) {
    setBook(result.book);
    if (result.book && result.book.quotes) {
      const sortedQuotes = result.book.quotes.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setQuotes(sortedQuotes);
    }
  } else {
    alert(result.msg);
  }
}

const BookDetail = props => {
  const [book, setBook] = useState("");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    drawBook(setBook, setQuotes);
  }, []);

  return (
    <Layout currPage={"/books"}>
      <div className="content-page">
        <div className="row">
          <FormEditBook book={book} />

          <hr />

          <div>
            <div className="row">
              <h3 className="col-auto">Quotes</h3>
            </div>
            {book && (
              <QuotesList
                quotes={quotes}
                author={book.author}
                book={book}
                setQuotes={setQuotes}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
