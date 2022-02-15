import PropTypes from "prop-types";
import { connect } from "react-redux";

// Elements
import TextIndentation from "components/utils/TextIndentation";
import QuoteImageModal from "components/quotes/Quoteimage/QuoteImageModal";

// API
import { getRelativeTime } from "api/utilsAPI";
import "./styles/Quote.css";

const Quote = props => {
  const { quote, book, author, showDate, showTag, showMemo, showTitle } = props;

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
          {(showDate || showTag) && (
            <div className="quoteFooter">
              {showTag && (
                <div className="quote-tags">
                  {typeof quote.tags !== "string" ? (
                    quote.tags.map((t, i) => (
                      <a
                        className="col-auto non-link greyText smallText tag"
                        href="/"
                        key={i}
                      >
                        {t}
                      </a>
                    ))
                  ) : (
                    <div className="col-auto non-link greyText smallText tag">
                      {quote.tags}
                    </div>
                  )}
                </div>
              )}

              {showDate && (
                <small className="text-muted right quote-date">
                  {getRelativeTime(quote.date)}
                </small>
              )}
            </div>
          )}

          {showMemo && Array.isArray(quote.memo) && (
            <div className="memos">
              {quote.memo.map(m => (
                <div key={m._id}>
                  - {m.text} ({getRelativeTime(m.date)})
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <QuoteImageModal quote={quote} />
    </div>
  );
};

Quote.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object.isRequired,
    book: PropTypes.object,
    author: PropTypes.object,
    showDate: PropTypes.bool,
    showTag: PropTypes.bool,
    showMemo: PropTypes.bool,
    activeQuote: PropTypes.object,
    setActiveQuote: PropTypes.func,
    // handleDelete: PropTypes.func.isRequired,
    // handleUpdate: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  showDate: state.display.showDate,
  showTag: state.display.showTag,
  showMemo: state.display.showMemo,
  showTitle: state.display.showTitle,
  ...ownProps,
  // quote: ownProps.quote,
  // book: ownProps.book,
  // author: ownProps.author,
  // handleDelete: ownProps.handleDelete,
  // handleUpdate: ownProps.handleUpdate,
  // activeQuote: ownProps.activeQuote,
  // setActiveQuote: ownProps.setActiveQuote,
});

export default connect(mapStateToProps)(Quote);
