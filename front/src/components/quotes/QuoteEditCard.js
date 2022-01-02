import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Element
import {
  InlineEditText,
  InlineLabelEditText,
  InlineLabelEditTextarea,
  InlineLabelEditDate,
} from "../utils/InlineEdit";
import CreatableSelectModel from "../utils/CreatableSelectModel";
import FormEditMemoList from "../memos/FormEditMemoList";
// import ModalDeleteConfirmation from "../utils/ModalDeleteConfirmation";

// API
import { isoDateWithoutTimezone, getPinyin } from "../../api/utilsAPI";
import authorsAPI from "../../api/authorsAPI";
import booksAPI from "../../api/booksAPI";

function getEmptyQuote(quote) {
  return {
    _id: quote ? quote._id : "",
    title: quote ? quote.title : "",
    text: quote ? quote.text : "",
    tags: quote && quote.tags ? quote.tags.join(" ") : "",
    date: isoDateWithoutTimezone(quote ? quote.date : new Date()),
    memo: quote && quote.memo ? quote.memo : [],
    privacy_level: 1,
    user: quote ? quote.user : {},
  };
}

function createSelectItem(item, key) {
  return Object.assign(item, { label: item[key], value: getPinyin(item[key]) });
}

function createSelectItemWithVal(item, val) {
  if (val) {
    return Object.assign(item, { label: val, value: getPinyin(val) });
  } else {
    return Object.assign(item, {
      label: "unknown",
      value: getPinyin("unknown"),
    });
  }
}

function getEmptyMemo() {
  return {
    _id: +new Date(),
    text: "",
    date: isoDateWithoutTimezone(new Date()),
  };
}

function getMemoList(quote) {
  if (quote && Array.isArray(quote.memo)) return quote.memo;
  return [];
}

async function drawAuthors(setAuthors) {
  const result = await authorsAPI.getAuthors();
  if (result.ok) {
    setAuthors(
      result.authors.map((author) => {
        return createSelectItem(author, "name");
      })
    );
  } else {
    alert(result.msg);
  }
}

async function drawBooks(setBooks, author_id = "undefined") {
  const result = await booksAPI.getBooks(author_id);
  if (result.ok) {
    setBooks(
      result.books.map((book) => {
        return createSelectItem(book, "title");
      })
    );
  } else {
    alert(result.msg);
  }
}

const QuoteEditCard = (props) => {
  const {
    quote,
    defaultAuthor,
    isAuthorFixed,
    defaultBook,
    isBookFixed,
    handleDelete,
    handleUpdate,
    handleCreate,
    handleCancel,
    reset,
    setReset,
  } = props;

  const [newQuote, setNewQuote] = useState(getEmptyQuote(quote));
  const [memoList, setMemoList] = useState(getMemoList(quote));

  const [author, setAuthor] = useState(
    defaultAuthor ? createSelectItem(defaultAuthor, "name") : {}
  );
  const [authors, setAuthors] = useState([]);
  const [book, setBook] = useState(
    defaultBook ? createSelectItem(defaultBook, "title") : {}
  );
  const [books, setBooks] = useState([]);

  const [isAuthorChanged, setIsAuthorChanged] = useState(false);
  const [isBookChanged, setIsBookChanged] = useState(false);

  const reloadAuthors = async () => {
    if (isAuthorFixed) {
      return;
    }

    const result = await authorsAPI.getAuthors();
    if (result.ok) {
      // set Authors list
      setAuthors(
        result.authors.map((author) => {
          return createSelectItem(author, "name");
        })
      );
    } else {
      alert(result.msg);
    }
  };

  const reloadBooks = async () => {
    if (isBookFixed) {
      return;
    }
    const curr_author = author ? author : defaultAuthor;
    console.log("curr_author", curr_author);
    const result = await booksAPI.getBooks(
      curr_author ? curr_author._id : "undefined"
    );
    console.log(result);
    if (result.ok) {
      console.log("ready to set books to new");
      setBooks(
        result.books
          .filter((book) => typeof book.title === "string")
          .map((book) => {
            return createSelectItem(book, "title");
          })
      );
    } else {
      alert(result.msg);
    }
    console.groupEnd();
  };

  const chooseAuthor = () => {
    // find the correct author
    const temp_author = authors.filter(
      (author) => author._id === book.author._id
    )[0];
    console.log("correct author is", temp_author);
    setAuthor(temp_author);
  };

  const loadQuoteCard = async () => {
    if (isAuthorChanged) {
      console.log("author changed", author);
      reloadBooks();
      setIsAuthorChanged(false);
    } else if (isBookChanged) {
      chooseAuthor();
      setIsBookChanged(false);
    } else {
      setNewQuote(getEmptyQuote(quote));
      setMemoList(getMemoList(quote));
      reloadAuthors();
      reloadBooks();
    }

    // new empty quote
    if (reset) {
      setReset(false);
    }
  };

  useEffect(() => {
    console.log("##### QuoteEditCard EFFECT");
    loadQuoteCard();
  }, [
    quote,
    reset,
    defaultAuthor,
    defaultBook,
    isAuthorChanged,
    isBookChanged,
  ]);

  const createBookOption = async (book_title) => {
    console.log("ready to create book", book_title, "with", author);
    return await booksAPI.quickCreateBook(book_title, author);
  };

  const packageQuote = () => {
    newQuote.memo = memoList;
    if (!newQuote.author) {
      newQuote.author = { _id: author._id, name: author.name };
    }
    const curr_book = book || defaultBook;
    if (!newQuote.book) {
      newQuote.book = { _id: curr_book._id, title: curr_book.title };
    }
    return newQuote;
  };

  return (
    <div className="quote-card card mb-3">
      <div className="card-header">
        <InlineEditText
          value={newQuote.title}
          onChange={(event) => {
            setNewQuote({ ...newQuote, title: event.target.value });
          }}
        />
      </div>
      <div className="quote-card-body edit card-body">
        <div className="quoteDetails">
          <InlineLabelEditTextarea
            label="Quote Text"
            fontSize={18}
            value={newQuote.text}
            onChange={(event) => {
              setNewQuote({ ...newQuote, text: event.target.value });
            }}
          />

          <div className="row">
            <div className="mb-2 col-6" style={{ border: "none" }}>
              <label htmlFor="book-select-author" className="text-muted">
                Author name
              </label>
              <CreatableSelectModel
                id="book-select-author"
                createOption={authorsAPI.quickCreateBook}
                options={authors}
                setOptions={setAuthors}
                setValue={setAuthor}
                defaultValue={author}
                isFixed={isAuthorFixed}
                setIsChanged={setIsAuthorChanged}
              />
            </div>
            <div className="mb-2 col-6" style={{ border: "none" }}>
              <label htmlFor="quote-select-author" className="text-muted">
                Book title
              </label>
              <CreatableSelectModel
                id="quote-select-book"
                createOption={createBookOption}
                options={books}
                setOptions={setBooks}
                setValue={setBook}
                defaultValue={book}
                isFixed={isBookFixed}
                setIsChanged={setIsBookChanged}
              />
            </div>
          </div>

          <div className="row">
            <InlineLabelEditText
              className=" col-6"
              label="Tags"
              value={newQuote.tags}
              onChange={(event) => {
                setNewQuote({ ...newQuote, tags: event.target.value });
              }}
            />

            <InlineLabelEditDate
              className=" col-6"
              label="Date"
              value={newQuote.date}
              onChange={(event) => {
                setNewQuote({ ...newQuote, date: event.target.value });
              }}
            />
          </div>

          {memoList && (
            <FormEditMemoList memoList={memoList} setMemoList={setMemoList} />
          )}
        </div>
        <div className="button-group right">
          <button
            className="me-2 btn btn-outline-primary"
            onClick={() => {
              if (quote) {
                handleUpdate(packageQuote(), setNewQuote);
              } else {
                handleCreate(packageQuote(), setNewQuote);
              }
            }}
          >
            Save
          </button>
          <button
            className="me-2 btn btn-outline-success"
            onClick={() => {
              setMemoList([...memoList, getEmptyMemo()]);
            }}
          >
            Add Memo
          </button>
          {quote && (
            <button
              className="me-2 col-auto btn btn-outline-danger"
              onClick={() => handleDelete(quote)}
              // data-bs-toggle="modal"
              // data-bs-target={`#deleteModal-${quote._id}`}
            >
              Delete
            </button>
          )}
          {/*<ModalDeleteConfirmation
            id={quote._id}
            handleDelete={handleDelete}
            message={"Are you sure you want to delete this quote?"}
            previewText={text}
          />*/}
          {quote && (
            <button
              id="btnCreateQuote"
              className="me-2 btn btn-outline-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

QuoteEditCard.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object,
    defaultAuthor: PropTypes.object,
    defaultBook: PropTypes.object,
    isAuthorFixed: PropTypes.bool,
    isBookFixed: PropTypes.bool,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func.isRequired,
    handleCreate: PropTypes.func.isRequired,
    reset: PropTypes.bool,
    setReset: PropTypes.func,
  }),
};

export default QuoteEditCard;
