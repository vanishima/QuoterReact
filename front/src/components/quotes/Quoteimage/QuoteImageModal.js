import { useState } from "react";
import PropTypes from "prop-types";

import TextIndentation from "../../utils/TextIndentation";
import { getRelativeTime } from "../../../api/utilsAPI";

const THEMES = {
  DARK: "theme-dark",
  LIGHT: "theme-light",
};

const QuoteImageModal = ({ quote }) => {
  const [mode, setMode] = useState(THEMES.LIGHT);
  const toggleMode = () => {
    if (mode === THEMES.DARK) {
      setMode(THEMES.LIGHT);
    } else {
      setMode(THEMES.DARK);
    }
  };
  return (
    <div
      className="modal fade"
      id={`quoteImageModal-${quote._id}`}
      tabIndex="-1"
      aria-labelledby={`quoteImageModalLabel-${quote._id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ padding: "1rem" }}>
          <div className="modal-header">
            <h3
              className="modal-title"
              id={`quoteImageModalLabel-${quote._id}`}
            >
              Image
            </h3>
          </div>
          <div
            className={`modal-body ${mode}`}
            style={{
              padding: "3rem 2rem",
              backgroundColor: "var(--background)",
              borderRadius: "20px",
            }}
          >
            <blockquote
              style={{ fontSize: "20px", color: "var(--text-primary)" }}
            >
              <TextIndentation rawText={quote.text} />
              <hr />
              <footer
                className="text-center"
                style={{ fontSize: "18px", color: "var(--text-secondary)" }}
              >
                <p>
                  <b>{quote.author.name}</b>, <cite>{quote.book.title}</cite>
                </p>
                <div
                  className="text-end"
                  style={{ color: "var(--text-footer)", fontSize: "14px" }}
                >
                  摘于{getRelativeTime(quote.date)} @Quoter
                </div>
              </footer>
            </blockquote>
            {/*  <div
              style={{
                fontSize: "20px",
                textAlign: "end",
                color: "var(--text-footer)",
              }}
            >
              Quoter
            </div>*/}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" onClick={toggleMode}>
              Color
            </button>
            <button type="button" className="btn btn-success">
              Save Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuoteImageModal.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object.isRequired,
  }),
};

export default QuoteImageModal;
