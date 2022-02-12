import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

// Elements
import TextIndentation from "../../utils/TextIndentation";
import QuoteEditCard from "./QuoteEditCard";
// import QuoteEditCardUseReducer from "./QuoteEditCardUseReducer";
import QuoteImageModal from "../Quoteimage/QuoteImageModal";

// API
import { getRelativeTime } from "../../../api/utilsAPI";

const QuoteCard = props => {
  const {
    quote,
    book,
    author,
    showDate,
    showTag,
    showMemo,
    showTitle,
    handleDelete,
    handleUpdate,
    activeQuote,
    setActiveQuote,
  } = props;

  const isEditing =
    activeQuote &&
    activeQuote.type === "editing" &&
    activeQuote.id === quote._id;

  if (isEditing)
    return (
      <QuoteEditCard
        defaultQuote={quote}
        defaultBook={book || quote.book}
        defaultAuthor={author || quote.author}
        handleDelete={handleDelete}
        handleCancel={() => setActiveQuote(null)}
        handleUpdate={handleUpdate}
        setActiveQuote={setActiveQuote}
      />
    );

  return (
    <div className="quote-card card mb-3">
      {showTitle && quote.title && (
        <div className="card-header">{quote.title}</div>
      )}
      <div className="quote-card-body card-body row">
        <div className="col-11 quoteDetails">
          <blockquote className="blockquote">
            <TextIndentation rawText={quote.text} />

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
          </blockquote>

          {(showDate || showTag) && (
            <div className="quoteFooter">
              {showTag && (
                <div>
                  {typeof quote.tags !== "string" ? (
                    quote.tags.map((t, i) => (
                      <a
                        className="col-auto non-link greyText smallText tags"
                        href="/"
                        key={i}
                      >
                        {t}
                      </a>
                    ))
                  ) : (
                    <div className="col-auto non-link greyText smallText tags">
                      {quote.tags}
                    </div>
                  )}
                </div>
              )}

              {showDate && (
                <small className="text-muted right">
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

        <div className="col-1">
          <Dropdown className="quote-dropdown">
            <Dropdown.Toggle
              className="dropdown-toggle"
              variant="outline-secondary"
            ></Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item
                as="button"
                onClick={() =>
                  setActiveQuote({ id: quote._id, type: "editing" })
                }
              >
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                data-bs-toggle="modal"
                data-bs-target={`#quoteImageModal-${quote._id}`}
              >
                Image
              </Dropdown.Item>
              <Dropdown.Item
                className="danger"
                as="button"
                onClick={() => handleDelete(quote)}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <QuoteImageModal quote={quote} />
    </div>
  );
};

QuoteCard.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object.isRequired,
    book: PropTypes.object,
    author: PropTypes.object,
    showDate: PropTypes.bool,
    showTag: PropTypes.bool,
    showMemo: PropTypes.bool,
    activeQuote: PropTypes.object,
    setActiveQuote: PropTypes.func,
    handleDelete: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
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

export default connect(mapStateToProps)(QuoteCard);

// export default QuoteCard;
