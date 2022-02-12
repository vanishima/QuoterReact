import { useEffect, useReducer, useState, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Element
import {
  InlineEditText,
  InlineLabelEditText,
  InlineLabelEditTextarea,
  InlineLabelEditDate,
} from "../../utils/InlineEdit";
import CreatableSelectV2 from "../../utils/CreatableSelectV2";
import FormEditMemoList from "../../memos/FormEditMemoList";

// API
import {
  isoDateWithoutTimezone,
  getPinyin,
  getTagsArray,
} from "../../../api/utilsAPI";

const user = JSON.parse(localStorage.getItem("user"));
const OPTIONS_SIMPLE = {
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
  mode: "cors",
};

function getMemoList(quote) {
  if (quote && Array.isArray(quote.memo)) return quote.memo;
  return [];
}

function getEmptyQuote(quote = null, defaultAuthor = null, defaultBook = null) {
  const author = quote ? quote.author : defaultAuthor;
  const book = quote ? quote.book : defaultBook;
  const theUser = quote
    ? quote.user
    : user
    ? { _id: user._id, name: user.name }
    : {};
  return {
    _id: quote ? quote._id : "",
    book: createSelectItem(book, "title"),
    author: createSelectItem(author, "name"),
    title: quote ? quote.title : "",
    text: quote ? quote.text : "",
    tags: quote && quote.tags ? quote.tags.join(" ") : "",
    date: isoDateWithoutTimezone(quote ? quote.date : new Date()),
    memo: quote && quote.memo && Array.isArray(quote.memo) ? quote.memo : [],
    privacy_level: 1,
    user: theUser,
  };
}

function createSelectItem(item, key) {
  if (!item) return {};
  return Object.assign(item, { label: item[key], value: getPinyin(item[key]) });
}

function processItems(items, key) {
  return items
    .filter(item => typeof item[key] === "string")
    .map(item => {
      return createSelectItem(item, key);
    });
}

function getNewAuthor(author_name) {
  return {
    name: author_name,
    value: getPinyin(author_name),
    label: author_name,
    _id: "",
    url: "",
    category: "",
  };
}

function getNewBook(book_title, author) {
  return {
    _id: "",
    author: { _id: author._id, name: author.name },
    value: getPinyin(book_title),
    label: book_title,
    title: book_title,
    coverUrl: "",
    url: "",
    keywords: "",
    introduction: "",
  };
}

function getEmptyMemo() {
  return {
    _id: +new Date(),
    user: { _id: user._id, name: user.name },
    text: "",
    date: isoDateWithoutTimezone(new Date()),
  };
}

// useReducer
const initialState = {
  ...getEmptyQuote(),
  books: [],
  authors: [],
  initialized: false,
};

const ACTIONS = {
  START: "start",
  UPDATE_INPUT: "update_input",
  UPDATE_BOOL_INPUT: "update_book_input",
  UPDATE_AUTHOR: "update_author",
  UPDATE_BOOK: "update_book",
  CREATE_BOOK: "create_book",
  CREATE_AUTHOR: "create_author",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START:
      const newQuote = getEmptyQuote(
        action.payload.defaultQuote,
        action.payload.defaultAuthor,
        action.payload.defaultBook
      );
      console.log("newQuote", newQuote);
      return {
        ...state,
        ...newQuote,
        initialized: true,
      };

    case ACTIONS.UPDATE_INPUT:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case ACTIONS.UPDATE_BOOL_INPUT:
      return {
        ...state,
        [action.payload.key]: !state[action.payload.key],
      };
    case ACTIONS.UPDATE_AUTHOR:
      return {
        ...state,
        books: action.payload.books,
        author: action.payload.author,
      };
    case ACTIONS.UPDATE_BOOK:
      return {
        ...state,
        book: action.payload.book,
        author: action.payload.author,
      };
    case ACTIONS.CREATE_BOOK:
      console.log("CREATE_BOOK", action.payload.book);
      return {
        ...state,
        book: action.payload.book,
        books: [...state.books, action.payload.book],
      };
    case ACTIONS.CREATE_AUTHOR:
      console.log("CREATE_AUTHOR", action.payload.author);

      return {
        ...state,
        author: action.payload.author,
        authors: [...state.authors, action.payload.author],
      };
    default:
      return state;
  }
}

const QuoteEditCardUseReducer = props => {
  const {
    defaultQuote,
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

  const [state, dispatch] = useReducer(reducer, initialState);

  const { book, author, title, text, tags, date, books, authors, initialized } =
    state;
  const [memo, setMemo] = useState([]);

  const reloadAuthors = async () => {
    if (isAuthorFixed) {
      return;
    }
    await axios
      .get("/authors", OPTIONS_SIMPLE)
      .then(res => {
        dispatch({
          type: ACTIONS.UPDATE_INPUT,
          payload: {
            key: "authors",
            value: processItems(res.data.authors, "name"),
          },
        });
      })
      .catch(err => {
        alert(err.msg);
      });
  };

  const reloadBooks = async () => {
    if (isBookFixed) {
      return;
    }
    const curr_author = author ? author : defaultAuthor;
    const authorId = curr_author ? curr_author._id : "undefined";
    console.log("curr_author", curr_author);

    await axios
      .get("/books?authorId=" + authorId, OPTIONS_SIMPLE)
      .then(res => {
        dispatch({
          type: ACTIONS.UPDATE_INPUT,
          payload: {
            key: "books",
            value: processItems(res.data.books, "title"),
          },
        });
      })
      .catch(e => alert(e.msg));
  };

  const changeAuthor = async author => {
    await axios
      .get("/books?authorId=" + author._id, OPTIONS_SIMPLE)
      .then(res => {
        dispatch({
          type: ACTIONS.UPDATE_AUTHOR,
          payload: {
            author: author,
            books: processItems(res.data.books, "title"),
          },
        });
      })
      .catch(e => alert(e.msg));
  };

  const changeBook = book => {
    const author = authors.filter(author => author._id === book.author._id);
    dispatch({
      type: ACTIONS.UPDATE_BOOK,
      payload: { author: author[0], book: book },
    });
  };

  const createAuthor = async author_name => {
    let newAuthor = getNewAuthor(author_name);
    console.log("ready to create new author", newAuthor);
    await axios
      .post("/authors/update", JSON.stringify(newAuthor), {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
      .then(res => {
        newAuthor._id = res.data._id;
        dispatch({
          type: ACTIONS.CREATE_AUTHOR,
          payload: { author: newAuthor },
        });
      })
      .catch(e => alert(e.msg));
  };

  const createBook = async book_title => {
    let newBook = getNewBook(book_title, author);
    console.log("ready to create new book", newBook);
    await axios
      .post("/books/update", JSON.stringify(newBook), {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
      .then(res => {
        newBook._id = res.data._id;
        dispatch({
          type: ACTIONS.CREATE_BOOK,
          payload: { book: newBook },
        });
      })
      .catch(e => alert(e.msg));
  };

  const loadQuoteCard = useCallback(() => {
    console.log("loadQuoteCard() rendering");
    if (reset || !initialized) {
      dispatch({
        type: ACTIONS.START,
        payload: {
          defaultQuote: defaultQuote,
          defaultAuthor: defaultAuthor,
          defaultBook: defaultBook,
        },
      });

      setMemo(getMemoList(defaultQuote));
      reloadAuthors();
      reloadBooks();
      if (reset) setReset(false);
    }
  }, [
    defaultQuote,
    defaultAuthor,
    defaultBook,
    reset,
    initialized,
    reloadAuthors,
    reloadBooks,
    setReset,
  ]);

  useEffect(() => {
    console.log("##### QuoteEditCard EFFECT");
    loadQuoteCard();
  }, [reset]);

  const packageQuote = () => {
    const newQuote = {
      _id: defaultQuote ? defaultQuote._id : "",
      book: book,
      author: author,
      user: { _id: user._id, name: user.name },
      title: title,
      text: text,
      tags: getTagsArray(tags),
      date: date,
    };

    if (memo) {
      newQuote.memo = memo.filter(memo => memo.text.length > 0);
    }

    return newQuote;
  };

  const handleInputChange = e => {
    dispatch({
      type: ACTIONS.UPDATE_INPUT,
      payload: { key: e.target.name, value: e.target.value },
    });
  };

  return (
    <div className="quote-card edit card mb-3">
      <div className="card-header">
        <InlineEditText
          name="title"
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <div className="quote-card-body edit card-body">
        <div className="quoteDetails">
          <InlineLabelEditTextarea
            name="text"
            label="Quote Text"
            fontSize={18}
            value={text}
            onChange={handleInputChange}
          />

          {!isBookFixed && (
            <div className="row">
              <div className="mb-2 col-6" style={{ border: "none" }}>
                <label htmlFor="book-select-author" className="text-muted">
                  Author name
                </label>
                <CreatableSelectV2
                  id="book-select-author"
                  createOption={createAuthor}
                  options={authors}
                  changeOption={changeAuthor}
                  value={author}
                  isFixed={isAuthorFixed}
                />
              </div>
              <div className="mb-2 col-6" style={{ border: "none" }}>
                <label htmlFor="quote-select-author" className="text-muted">
                  Book title
                </label>
                <CreatableSelectV2
                  id="quote-select-book"
                  createOption={createBook}
                  options={books}
                  changeOption={changeBook}
                  value={book}
                  isFixed={isBookFixed}
                />
              </div>
            </div>
          )}

          <div className="row">
            <InlineLabelEditText
              name="tags"
              className=" col-6"
              label="Tags"
              value={tags}
              onChange={handleInputChange}
            />

            <InlineLabelEditDate
              name="date"
              className=" col-6"
              label="Date"
              value={date}
              onChange={handleInputChange}
            />
          </div>

          <div className="memos">
            <hr />
            <div className="row">
              <div className="col-auto">Memos</div>
              <button
                className="me-2 btn btn-outline-success col-auto p-1"
                onClick={() => {
                  setMemo([...memo, getEmptyMemo()]);
                }}
              >
                Add Memo
              </button>
            </div>

            {memo && <FormEditMemoList memoList={memo} setMemoList={setMemo} />}
          </div>
        </div>

        <div className="button-group right">
          <button
            className="me-2 btn btn-outline-primary"
            onClick={() => {
              if (defaultQuote) {
                handleUpdate(packageQuote());
              } else {
                handleCreate(packageQuote());
              }
            }}
          >
            Save
          </button>

          {defaultQuote && (
            <button
              className="me-2 col-auto btn btn-outline-danger"
              onClick={() => handleDelete(defaultQuote)}
            >
              Delete
            </button>
          )}

          {defaultQuote && (
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

QuoteEditCardUseReducer.propTypes = {
  props: PropTypes.shape({
    defaultQuote: PropTypes.object,
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

export default QuoteEditCardUseReducer;
