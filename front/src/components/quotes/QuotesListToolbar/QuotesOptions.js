import React from "react";
import { connect, useDispatch } from "react-redux";

import { ACTIONS } from "actions/quoteDisplayActions";

const QuotesOptions = ({
  showDate,
  showTag,
  showMemo,
  showTitle,
  showTiles,
}) => {
  const dispatch = useDispatch();

  const renderOptions = () => {
    return (
      <div className="button-group mb-2">
        {renderOptionButton(
          showDate,
          ACTIONS.SHOW_DATE,
          "Hide Date",
          "Show Date"
        )}
        {renderOptionButton(showTag, ACTIONS.SHOW_TAG, "Hide Tag", "Show Tag")}
        {renderOptionButton(
          showMemo,
          ACTIONS.SHOW_MEMO,
          "Hide Memo",
          "Show Memo"
        )}
        {renderOptionButton(
          showTitle,
          ACTIONS.SHOW_TITLE,
          "Hide Title",
          "Show Tilte"
        )}
        {renderOptionButton(showTiles, ACTIONS.SHOW_TILES, "Linear", "Tiles")}
      </div>
    );
  };

  const renderOptionButton = (show, action, showText, hideText) => {
    return (
      <button
        className={`btn btn-outline-secondary me-2${show ? " active" : ""}`}
        onClick={() => {
          console.log("ready to dispatch", action);
          dispatch({ type: action });
        }}
      >
        {show ? showText : hideText}
      </button>
    );
  };

  return renderOptions();
};

const mapStateToProps = (state) => ({
  showDate: state.display.showDate,
  showTag: state.display.showTag,
  showMemo: state.display.showMemo,
  showTitle: state.display.showTitle,
});

export default connect(mapStateToProps)(QuotesOptions);
