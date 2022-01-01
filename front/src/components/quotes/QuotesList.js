import { useState } from "react";

// Element
import QuoteCard from "./QuoteCard";

// API
import { getTimeDistance, getTagsArray } from "../../api/utilsAPI";
import QuoteEditCard from "./QuoteEditCard";

import quotesAPI from "../../api/quotesAPI";

const QuotesList = (props) => {
  const { quotes, setQuotes, author, book, lastElementRef } = props;

  const [showDate, setShowDate] = useState(true);
  const [showTag, setShowTag] = useState(true);
  const [showMemo, setShowMemo] = useState(true);
  const [activeQuote, setActiveQuote] = useState(null);
  const [reset, setReset] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleDelete = async (quote) => {
    const quoteId = quote._id;
    console.log("deleting quoteId", quoteId);
    if (
      window.confirm(
        "Are you sure that you want to delete quote?\n" +
          quote.text.substring(0, 50)
      )
    ) {
      quotesAPI.deleteQuoteById(quote._id).then(() => {
        const updatedQuotes = quotes.filter((quote) => quote._id !== quoteId);
        setQuotes(updatedQuotes);
        setActiveQuote(null);
      });
    }
  };

  const handleCreate = async (newQuote, setNewQuote) => {
    console.group("handleCreate");
    // process output
    if (newQuote.tags) {
      newQuote.tags = getTagsArray(newQuote.tags);
    }
    newQuote.user = { _id: user._id, name: user.name };

    // console.log("memo before", newQuote.memo);

    if (newQuote.memo) {
      // filter memo that has text
      newQuote.memo = newQuote.memo
        .filter((memo) => memo.text.length > 0)
        .map((memo) => {
          if (!memo.user) {
            return { ...memo, user: { _id: user._id, name: user.name } };
          }
          return memo;
        });
    }

    // console.log("memo after", newQuote.memo);
    console.groupEnd("trying to submit", newQuote);

    const result = await quotesAPI.updateQuote(newQuote);

    if (result.ok) {
      setReset(true);
      console.log("add new quote");
      newQuote._id = result._id;
      setQuotes([newQuote, ...quotes]);
    }
  };

  const handleUpdate = async (newQuote, setNewQuote) => {
    // process output
    if (newQuote.tags) {
      newQuote.tags = getTagsArray(newQuote.tags);
    }
    newQuote.user = { _id: user._id, name: user.name };

    if (newQuote.memo) {
      // filter memo that has text
      newQuote.memo = newQuote.memo
        .filter((memo) => memo.text.length > 0)
        .map((memo) => {
          if (!memo.user) {
            return { ...memo, user: { _id: user._id, name: user.name } };
          }
          return memo;
        });
    }

    console.log("trying to submit", newQuote);

    const result = await quotesAPI.updateQuote(newQuote);

    if (result.ok) {
      console.log("update quote");
      setActiveQuote(null);
      setReset(true);
      const updatedQuotes = quotes.map((quote) => {
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
      // setReset(false);
    }
  };

  return (
    <div>
      <QuoteEditCard
        handleUpdate={handleUpdate}
        handleCreate={handleCreate}
        reset={reset}
        setReset={setReset}
        defaultAuthor={author}
        defaultBook={book}
        isAuthorFixed={author}
        isBookFixed={book}
      />
      {quotes && quotes[0] && (
        <div>
          <div className="greyText">
            Last quoted {getTimeDistance(quotes[0].date)}
          </div>
          <h4>{quotes.length} quotes</h4>
          <hr />
        </div>
      )}
      <div className="button-group mb-2">
        <button
          className={`btn btn-outline-secondary me-2${
            showDate ? " active" : ""
          }`}
          onClick={() => {
            setShowDate(!showDate);
          }}
        >
          {showDate ? "Hide Date" : "Show Date"}
        </button>
        <button
          className={`btn btn-outline-secondary me-2${
            showTag ? " active" : ""
          }`}
          onClick={() => {
            setShowTag(!showTag);
          }}
        >
          {showTag ? "Hide Tag" : "Show Tag"}
        </button>
        <button
          className={`btn btn-outline-secondary me-2${
            showMemo ? " active" : ""
          }`}
          onClick={() => {
            setShowMemo(!showMemo);
          }}
        >
          {showMemo ? "Hide Memo" : "Show Memo"}
        </button>
      </div>
      <div className="quotes">
        {quotes &&
          quotes.map((quote, i) => {
            return (
              <div
                ref={quotes.length === i + 1 ? lastElementRef : null}
                key={quote._id}
              >
                <QuoteCard
                  quote={quote}
                  author={author}
                  book={book}
                  showDate={showDate}
                  showTag={showTag}
                  showMemo={showMemo}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  activeQuote={activeQuote}
                  setActiveQuote={setActiveQuote}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default QuotesList;
