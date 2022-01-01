import PropTypes from "prop-types";

// API
import quotesAPI from "../../api/quotesAPI";

async function drawQuotes(book, setQuotes) {
  const result = await quotesAPI.getAll(0, 1, "latest", book._id);
  if (result.ok) {
    setQuotes(result.quotes);
  } else {
    alert(result.msg);
  }
}

const BookCardQuotes = (props) => {
  const { showImage, book, setSelected, selected, setQuotes } = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    setSelected(book);
    drawQuotes(book, setQuotes);
  }

  if (showImage) {
    return (
      <button
        className={`book-quote-button ${selected && selected.title === book.title ? "active" : ""}`}
        onClick={handleClick}
      >
        <div className="mb-2 me-2 text-center">
          {book.book_details && book.book_details.coverUrl && (
            <img
              className="book-quote-img img-fluid rounded-start mb-2"
              src={book.book_details.coverUrl}
              alt="book cover"
            />
          )}
          <div>
            <h3>{book.title}</h3>
            <p className="subtitle">{book.book_details.author.name}</p>{" "}
          </div>
        </div>
      </button>
    );
  }
};

BookCardQuotes.propTypes = {
  props: PropTypes.shape({
    showImage: PropTypes.bool,
    book: PropTypes.object.isRequired,
    setSelected: PropTypes.func.isRequired,
    selected: PropTypes.object.isRequired,
    setQuotes: PropTypes.func.isRequired
  }),
};

export default BookCardQuotes;
