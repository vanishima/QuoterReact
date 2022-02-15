import { useState } from "react";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";

// Element
import QuoteCard from "../QuoteCard/QuoteCard";
import QuotesListToolbar from "components/quotes/QuotesListToolbar/QuotesListToolbar";

// API
import { getTimeDistance } from "../../../api/utilsAPI";
import QuoteEditCard from "../QuoteCard/QuoteEditCard";
import QuoteEditCardUseReducer from "../QuoteCard/QuoteEditCardUseReducer";

import quotesAPI from "../../../api/quotesAPI";

import "styles/quotesGrid.css";

const QuotesList = props => {
  const { quotes, setQuotes, author, book, lastElementRef, showTiles } = props;

  const [activeQuote, setActiveQuote] = useState(null);
  const [reset, setReset] = useState(true);

  const handleDelete = async quote => {
    const quoteId = quote._id;
    console.log("deleting quoteId", quoteId);
    if (
      window.confirm(
        "Are you sure that you want to delete quote?\n" +
          quote.text.substring(0, 50)
      )
    ) {
      quotesAPI.deleteQuoteById(quote._id).then(() => {
        const updatedQuotes = quotes.filter(quote => quote._id !== quoteId);
        setQuotes(updatedQuotes);
        setActiveQuote(null);
      });
    }
  };

  const handleCreate = async newQuote => {
    console.groupEnd("trying to submit", newQuote);

    const result = await quotesAPI.updateQuote(newQuote);

    if (result.ok) {
      setReset(true);
      console.log("add new quote");
      newQuote._id = result._id;
      setQuotes([newQuote, ...quotes]);
    }
  };

  const handleUpdate = async newQuote => {
    console.log("trying to submit", newQuote);

    const result = await quotesAPI.updateQuote(newQuote);

    if (result.ok) {
      console.log("update quote");
      setActiveQuote(null);
      setReset(true);
      const updatedQuotes = quotes.map(quote => {
        if (quote._id === newQuote._id) {
          console.log("found new quote");
          console.log("target newQuote", newQuote);
          const updatedQuote = {
            ...quote,
            text: newQuote.text,
            title: newQuote.title,
            memo: newQuote.memo,
            date: newQuote.date,
            tags: newQuote.tags,
            author: newQuote.author,
            book: newQuote.book,
          };
          console.log("updatedQuote", updatedQuote);
          return updatedQuote;
        }
        return quote;
      });
      setQuotes(updatedQuotes);
    }
  };

  const renderQuotesStatus = () => {
    if (quotes && quotes[0]) {
      return (
        <div>
          <div className="greyText">
            Last quoted {getTimeDistance(quotes[0].date)}
          </div>
          <h4>{quotes.length} quotes</h4>
          <hr />
        </div>
      );
    }
  };

  const renderQuoteCard = quote => {
    return (
      <QuoteCard
        quote={quote}
        author={author}
        book={book}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        activeQuote={activeQuote}
        setActiveQuote={setActiveQuote}
      />
    );
  };

  const renderQuotes = () => {
    if (quotes) {
      if (showTiles) {
        return (
          <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {quotes.map((quote, i) => (
              <div
                ref={quotes.length === i + 1 ? lastElementRef : null}
                key={quote._id}
                className="quote"
              >
                {renderQuoteCard(quote)}
              </div>
            ))}
          </Masonry>
        );
      } else {
        return (
          <div className="quotes row">
            {quotes &&
              quotes.map((quote, i) => {
                return (
                  <div
                    ref={quotes.length === i + 1 ? lastElementRef : null}
                    key={quote._id}
                    className="quote"
                  >
                    {renderQuoteCard(quote)}
                  </div>
                );
              })}
          </div>
        );
      }
    } else {
      return <p>Loading quotes</p>;
    }
  };

  return (
    <div>
      {/* <QuoteEditCardUseReducer
        handleUpdate={handleUpdate}
        handleCreate={handleCreate}
        reset={reset}
        setReset={setReset}
        defaultAuthor={author}
        defaultBook={book}
        isAuthorFixed={author}
        isBookFixed={book}
      /> */}
      {/* <QuoteEditCard
        handleUpdate={handleUpdate}
        handleCreate={handleCreate}
        reset={reset}
        setReset={setReset}
        defaultAuthor={author}
        defaultBook={book}
        isAuthorFixed={author}
        isBookFixed={book}
      />*/}
      {renderQuotesStatus()}
      <QuotesListToolbar />
      {renderQuotes()}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  showTiles: state.display.showTiles,
  ...ownProps,
});

export default connect(mapStateToProps)(QuotesList);
// export default QuotesList;
