import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Element
// import { InlineEditText } from "../utils/InlineEdit";

import { getTagsArray, isoDateWithoutTimezone } from "../../api/utilsAPI";
import quotesAPI from "../../api/quotesAPI";


const FormCreateQuoteInBook = (props) => {
  const { quote } = props;
  const navigate = useNavigate();

  const [title, setTitle] = useState(quote.title);
  const [text, setText] = useState(quote.text);
  const [tags, setTags] = useState(
    typeof quote.tags !== "string" ? quote.tags.join(" ") : quote.tags
  );
  const [date, setDate] = useState(isoDateWithoutTimezone(quote.date));
  const [memo, setMemo] = useState(
    quote.memo && quote.memo[0].text ? quote.memo[0].text : ""
  );
  const [privacy, setPrivacy] = useState(quote.privacy_level);

  const user = JSON.parse(localStorage.getItem("user"));

  console.log("date", date);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const newQuote = {
      // author: { _id: author._id, name: author.name },
      // book: { _id: book._id, title: book.title },
      // user: { _id: user.id, name: user.name },
      title: title,
      _id: quote._id,
      text: text,
      date: date,
      tags: getTagsArray(tags),
      privacy_level: privacy,
    };

    if (memo !== "") {
      newQuote.memo = [
        {
          userID: user.id,
          username: user.name,
          text: memo,
          date: isoDateWithoutTimezone(new Date()).slice(0, -8),
        },
      ];
    } else {
      newQuote.memo = null;
    }

    console.log("trying to submit", newQuote);

    await quotesAPI.updateQuote(newQuote);
    navigate(0);
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();
    console.log("delete clicked");
    await quotesAPI.deleteQuote(quote);
    navigate(-1);
  };

  return (
    <div>
      <h3 className="center">Edit Quote</h3>

      <form>
        <div className="form-floating mb-2">
          <input
            readOnly
            disabled
            type="text"
            className="form-control"
            id="author-input"
            value={quote.author.name}
          />
          <label htmlFor="author-input">Author</label>
        </div>

        <div className="form-floating mb-2">
          <input
            readOnly
            disabled
            type="text"
            className="form-control"
            id="book-input"
            value={quote.book.title}
          />
          <label htmlFor="book-input">Source</label>
        </div>

        <div className="form-floating mb-2">
          <input
            id="title-input"
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="title-input">Title</label>
        </div>

        <div className="form-floating mb-2">
          <textarea
            id="text-input"
            className="form-control"
            rows="5"
            required
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
          <label htmlFor="text-input">Quote Text</label>
        </div>

        <div className="form-floating mb-2">
          <input
            className="form-control"
            type="datetime-local"
            id="date-input"
            name="date"
            value={date}
            min="1990-01-01T00:00"
            max="2099-12-31T23:55"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
          <label htmlFor="date-input">Date</label>
        </div>

        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            id="tags-input"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
          <label htmlFor="tags-input">Tags</label>
        </div>

        <div className="form-floating mb-2">
          <select
            name="privacy_level"
            className="form-control"
            id="privacySelect"
            value={privacy}
            onChange={(e) => {
              setPrivacy(e.target.value);
            }}
          >
            <option value="1">Private</option>
            <option value="0">Public</option>
          </select>
          <label htmlFor="privacy-input">Privacy Level</label>
        </div>

        <div className="form-floating mb-2">
          <textarea
            id="memo-input"
            type="text"
            className="form-control"
            name="memo"
            value={memo}
            onChange={(e) => {
              setMemo(e.target.value);
            }}
          ></textarea>
          <label htmlFor="memo-input">Memo</label>
        </div>

        <br />
        <div className="form-group row mb-2">
          <button
            id="btnCreateQuote"
            type="submit"
            className="col-auto me-2 btn btn-info"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.204.456.456.456.114 0 .229-.042.317-.128l.749-.729-.633-.654-.75.728zm6.33-8.425l-2.564 2.485c-1.378 1.336-2.081 2.63-2.73 4.437l1.132 1.169c1.825-.593 3.14-1.255 4.518-2.591l2.563-2.486-2.919-3.014zm7.477-7.659l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.469.728-1.093.728-1.718 0-2.088-2.53-3.196-4.054-1.718zm-1.946 11.333v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z" />
            </svg>
            Update Quote
          </button>
          <button className="col-auto btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

FormCreateQuoteInBook.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object.isRequired,
  }),
};

export default FormCreateQuoteInBook;
