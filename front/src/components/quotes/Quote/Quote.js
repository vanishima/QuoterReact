import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import _ from "lodash";

// Elements
import TextIndentation from "components/utils/TextIndentation";
import QuoteImageModal from "components/quotes/Quoteimage/QuoteImageModal";
import Toolbar from "./Toolbar/Toolbar";
import Textarea from "components/inputs/Textarea";

// API
import { getRelativeTime } from "api/utilsAPI";
import Memos from "./Memos/Memos";
import Tags from "./Tags/Tags";

import {
  updateLocalQuoteInput,
  updateQuoteById,
  deleteQuote,
} from "reducers/quotes/quoteActions";
import { selectActiveQuoteId } from "reducers/quotes/selectors";

import "./styles/Quote.css";

const Quote = props => {
  const dispatch = useDispatch();

  const { quote, display, activeQuoteId } = props;
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
      dispatch(updateQuoteById(quote._id));
    }
  };

  const handleDelete = () => {
    dispatch(deleteQuote(quote._id));
  };

  const handleInputChange = e => {
    dispatch(updateLocalQuoteInput(quote._id, e.target.name, e.target.value));
  };

  return (
    <div className="quote card mb-3">
      {showTitle && quote.title && (
        <div className="card-header">{quote.title}</div>
      )}
      <div className="quote-card-body card-body">
        <div className="quoteDetails">
          <blockquote>
            {isEditing ? (
              <Textarea
                name="text"
                className="inline-edit quote-text"
                onChange={handleInputChange}
                required={true}
                dependency={quote}
                value={quote.text}
              />
            ) : (
              <TextIndentation className="quote-text" rawText={quote.text} />
            )}
          </blockquote>
          <br />
          {(!quote.author || !quote.book) && (
            <footer className="blockquote-footer text-end">
              {!quote.author && (
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
              {!quote.book && (
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
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        showText={false}
        isEditing={isEditing}
        quoteId={quote._id}
      />

      <QuoteImageModal quote={quote} />
    </div>
  );
};

Quote.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object.isRequired,
    activeQuoteId: PropTypes.string,
    display: PropTypes.object,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  display: state.display,
  activeQuoteId: selectActiveQuoteId(state),
  ...ownProps,
});

export default connect(mapStateToProps)(Quote);
