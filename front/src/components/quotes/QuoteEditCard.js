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
  if (quote) {
    return {
      _id: quote._id,
      title: quote.title,
      text: quote.text,
      tags: typeof quote.tags !== "string" ? quote.tags.join(" ") : quote.tags,
      date: isoDateWithoutTimezone(quote.date),
      memo: quote.memo || [],
      privacy_level: 1,
      user: quote.user,
    };
  }
  return {
    _id: "",
    title: "",
    text: "",
    tags: "",
    date: isoDateWithoutTimezone(new Date()),
    memo: [],
    privacy_level: 1,
  };
}

function createSelectItem(item, key) {
  return Object.assign(item, { label: item[key], value: getPinyin(item[key]) });
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

async function drawAuthors(setAuthors, author, setAuthor) {
  const result = await authorsAPI.getAuthors();
  if (result.ok) {
    setAuthors(
      result.authors.map((author) => {
        return createSelectItem(author, "name");
      })
    );
    if (!author) setAuthor(createSelectItem(result.authors[0], "name"));
  } else {
    alert(result.msg);
  }
}

async function drawBooks(setBooks, author_id = "undefined", book, setBook) {
  const result = await booksAPI.getBooks(author_id);
  if (result.ok) {
    setBooks(
      result.books.map((book) => {
        return createSelectItem(book, "title");
      })
    );
    if (!book) setBook(createSelectItem(result.books[0], "title"));
  } else {
    alert(result.msg);
  }
}

const QuoteEditCard = (props) => {
  const {
    quote,
    defaultAuthor = {},
    defaultBook = {},
    handleDelete,
    handleUpdate,
    handleCreate,
    handleCancel,
    reset,
    setReset,
  } = props;

  const [newQuote, setNewQuote] = useState(getEmptyQuote(quote));
  const [memoList, setMemoList] = useState(getMemoList(quote));

  const [author, setAuthor] = useState(defaultAuthor);
  const [authors, setAuthors] = useState([]);
  const [book, setBook] = useState(defaultBook);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (reset) {
      setBooks([]);
      setAuthors([]);
      setBook(defaultBook);
      setAuthor(defaultAuthor);
      setNewQuote(getEmptyQuote(quote));
      setMemoList(getMemoList(quote));
      setReset(false);
    }
    if (authors.length < 1) drawAuthors(setAuthors, author, setAuthor);
    if (!author) {
      drawBooks(setBooks, "undefined", book, setBook);
    } else {
      drawBooks(setBooks, author._id, book, setBook);
    }

    if (quote && newQuote.text === "") {
      setNewQuote(getEmptyQuote(quote));
      setMemoList(getMemoList(quote));
      setAuthor(createSelectItem(quote.author, "name"));
      setAuthor(createSelectItem(quote.book, "title"));
    }
  }, [quote, author, reset]);

  const createBookOption = async (book_title) => {
    console.log("ready to create book", book_title, "with", author);
    return await booksAPI.quickCreateBook(book_title, author);
  };

  const packageQuote = () => {
    // console.group("before packageQuote", newQuote.memo);
    // console.log("memoList",memoList);
    newQuote.memo = memoList;
    newQuote.author = { _id: author._id, name: author.name };
    newQuote.book = {_id: book._id, title: book.title};
    // console.groupEnd("after packageQuote", newQuote.memo);
    // newQuote.memo = memoList;
    return newQuote;
  };

  const updateMemo = (memo) => {
    const updatedMemoList = newQuote.memo.map((el) => {
      if (el._id === memo._id) {
        return memo;
      }
      return el;
    });
    setNewQuote({ ...newQuote, memo: updatedMemoList });
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
            <FormEditMemoList
              memoList={memoList}
              setMemoList={setMemoList}
            />
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
              // console.log("add empty memo to", memoList);
              // const newMemo = getEmptyMemo();
              // const newMemoList = newQuote.memo;
              // newMemoList.push(newMemo);
              // setMemoList((current) => [...current, newMemo]);
              setMemoList([...memoList, getEmptyMemo()]);
              // console.log("newMemoList", newMemoList);
              // setNewQuote({ ...newQuote, memo: newMemoList });
              // console.log(memoList);
              // console.log("newQuote.memo", newQuote.memo);
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

// {<div className="row memo-container" key={memo._id}>
//   <InlineLabelEditTextarea
//     className=" col-6 memo-text"
//     showBorder={true}
//     label={`Memo${i + 1}`}
//     value={memo.text}
//     onChange={(event) => {
//       const updatedMemo = memoList.map((m) => {
//         if (m._id === memo._id) {
//           return { ...m, text: event.target.value };
//         }
//         return m;
//       });
//       setMemoList({ ...memoList, memo: updatedMemo });
//       // setNewQuote({ ...newQuote, memo: event.target.value });
//     }}
//   />
//   <InlineLabelEditDate
//     className=" col-5 memo-date"
//     label="Date"
//     value={isoDateWithoutTimezone(memo.date)}
//     onChange={(event) => {
//       const updatedMemo = memoList.map((m) => {
//         if (m._id === memo._id) {
//           return { ...m, date: event.target.value };
//         }
//         return m;
//       });
//       setMemoList({ ...memoList, memo: updatedMemo });
//     }}
//   />
//   <button
//     className="btn btn-danger col-1 memo-delete-btn"
//     onClick={(e) => {
//       console.log("delete memo", i);
//       setMemoList(removeItem(memoList, i));
//       console.log(memoList);
//     }}
//   >
//     X
//   </button>
// </div>}

QuoteEditCard.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object,
    author: PropTypes.object,
    book: PropTypes.object,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func.isRequired,
    handleCreate: PropTypes.func.isRequired,
    reset: PropTypes.bool,
    setReset: PropTypes.func,
  }),
};

export default QuoteEditCard;
