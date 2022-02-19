import { useState, useEffect } from "react";

// Element
import Layout from "../components/common/Layout";
import Search from "../components/common/Search";
import BookCardQuotes from "../components/books/BookCardQuotes";
import QuotesList from "../components/quotes/Quotes/QuotesList";

// API
import quotesAPI from "../api/quotesAPI";

// import "../styles/books.css";

async function drawBooks(setBooks, setSelected) {
  const result = await quotesAPI.getBooksDashboard("recent", 0, true);
  if (result.ok) {
    setBooks(result.books);
    setSelected(result.books[0]);
  } else {
    alert(result.msg);
  }
}

const Books = () => {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    console.log("##### Books Effect");
    drawBooks(setBooks, setSelected);
  }, []);

  return (
    <Layout>
      <div className="content-page">
        <div className="row">
          <div className="col-3 book-list-section border-end">
            <div>
              <Search />
              <div>(Most recently quoted shown first)</div>
            </div>
            <div className="book-list">
              {books &&
                books.map(b => (
                  <div key={b._id}>
                    <BookCardQuotes
                      showImage={true}
                      book={b}
                      setSelected={setSelected}
                      selected={selected}
                      setQuotes={setQuotes}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="col-8 quote-list-section">
            {selected && (
              <a
                rel="noreferrer"
                href={`/book?id=${selected._id}`}
                className="non-link"
                target="_blank"
              >
                <h3>{selected.title}</h3>
              </a>
            )}
            {selected && (
              <QuotesList
                quotes={quotes}
                author={selected.author}
                book={selected}
                setQuotes={setQuotes}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Books;
