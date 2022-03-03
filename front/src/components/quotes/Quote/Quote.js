import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import _ from "lodash";

// Elements
import TextIndentation from "components/utils/TextIndentation";
import QuoteImageModal from "components/quotes/Quoteimage/QuoteImageModal";
import Toolbar from "./Toolbar/Toolbar";

// API
import { getRelativeTime } from "api/utilsAPI";
import "./styles/Quote.css";
import Memos from "./Memos/Memos";
import Tags from "./Tags/Tags";
import QuoteEditing from "./QuoteEditing";

import { updateQuote, deleteQuote } from "reducers/quotes/quoteActions";
import { selectActiveQuoteId } from "reducers/quotes/selectors";
import {
  selectCurrentBook,
  selectCurrentChapter,
} from "reducers/books/selectors";
import { selectCurrentAuthor } from "reducers/authors/selectors";

import { isoDateWithoutTimezone } from "api/utilsAPI";

const Quote = props => {
  const dispatch = useDispatch();

  const {
    quote,
    book,
    author,
    display,
    activeQuoteId,
    currentAuthor,
    currentBook,
    currentChapter,
  } = props;
  const { showDate, showTag, showMemo, showTitle } = display;
  const isEditing = activeQuoteId === quote?._id;
  // console.log("activeQuote", quote?._id, isEditing);

  const handleSubmit = () => {
    console.log("handleSubmit");
    if (
      _.isEmpty(quote.author) ||
      _.isEmpty(quote.book) ||
      quote.text.length === 0
    ) {
      alert("Please fill out all required inputs");
    } else {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      const newQuote = {
        ...quote,
        date: isoDateWithoutTimezone(new Date()),
        tags: quote.tags.map(tag => tag.label),
        author: { _id: currentAuthor._id, name: currentAuthor.name },
        book: { _id: currentBook._id, title: currentBook.title },
        user: { _id: user.id, name: user.name },
        chapter: currentChapter,
      };
      console.log("newQuote", newQuote);
      dispatch(updateQuote(newQuote));
    }
  };

  const handleDelete = () => {
    dispatch(deleteQuote(quote._id));
  };

  return (
    <div className="quote card mb-3">
      {showTitle && quote.title && (
        <div className="card-header">{quote.title}</div>
      )}
      <div className="quote-card-body card-body">
        <div className="quoteDetails">
          <blockquote>
            <TextIndentation className="quote-text" rawText={quote.text} />
          </blockquote>
          <br />
          {(!author || !book) && (
            <footer className="blockquote-footer text-end">
              {!author && (
                <span>
                  <a
                    className="non-link"
                    href={`/author?id=${quote.author._id}`}
                  >
                    {quote.author.name}
                  </a>
                  ,{" "}
                </span>
              )}
              {!book && (
                <cite title="Source Title">
                  <a className="non-link" href={`/book?id=${quote.book._id}`}>
                    {quote.book.title}
                  </a>
                </cite>
              )}
            </footer>
          )}
          {showTag && <Tags tags={quote.tags} />}
          {showDate && (
            <small className="text-muted right quote-date">
              {getRelativeTime(quote.date)}
            </small>
          )}
          {showMemo && <Memos memos={quote.memos} quoteId={quote._id} />}
        </div>
      </div>
      <Toolbar
        handleSumbit={handleSubmit}
        handleDelete={handleDelete}
        showText={false}
        quoteId={quote._id}
        isEditing={isEditing}
      />

      <QuoteImageModal quote={quote} />
    </div>
  );
};

Quote.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object.isRequired,
    book: PropTypes.object,
    author: PropTypes.object,
    activeQuote: PropTypes.object,
    setActiveQuote: PropTypes.func,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  display: state.display,
  activeQuoteId: selectActiveQuoteId(state),
  currentAuthor: selectCurrentAuthor(state),
  currentBook: selectCurrentBook(state),
  currentChapter: selectCurrentChapter(state),
  ...ownProps,
});

export default connect(mapStateToProps)(Quote);
