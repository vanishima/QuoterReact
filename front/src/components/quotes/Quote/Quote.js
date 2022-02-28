import PropTypes from "prop-types";
import { connect } from "react-redux";

// Elements
import TextIndentation from "components/utils/TextIndentation";
import QuoteImageModal from "components/quotes/Quoteimage/QuoteImageModal";
import Toolbar from "../NewQuote/Toolbar/Toolbar";

// API
import { getRelativeTime } from "api/utilsAPI";
import "./styles/Quote.css";
import Memos from "../Memos/Memos";
import Tags from "../Tags/Tags";
import QuoteEditing from "./QuoteEditing";
import { selectActiveQuoteId } from "reducers/quotes/selectors";

const Quote = props => {
  const { quote, book, author, display, activeQuoteId } = props;
  const { showDate, showTag, showMemo, showTitle } = display;
  const isEditing = activeQuoteId === quote?._id;
  // console.log("activeQuote", quote?._id, isEditing);

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  if (isEditing) {
    return <QuoteEditing />;
  }

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
          {showMemo && <Memos memos={quote.memos} />}
        </div>
      </div>
      <Toolbar
        handleSumbit={handleSubmit}
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
    // handleDelete: PropTypes.func.isRequired,
    // handleUpdate: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  display: state.display,
  activeQuoteId: selectActiveQuoteId(state),
  ...ownProps,
});

export default connect(mapStateToProps)(Quote);
