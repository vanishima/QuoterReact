import React from "react";
import { connect, useDispatch } from "react-redux";
import { BsCalendar2Date } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Popover } from "react-bootstrap";
import { updateQuoteInput } from "reducers/quotes/actions";
import "./styles/DateButton.css";

const DateButton = ({ loading, date, showText = true }) => {
  const dispatch = useDispatch();
  // console.log("date", date);

  const handleChange = e => {
    dispatch(updateQuoteInput(e.target.name, e.target.value));
  };

  const ChooseLabelPopover = (
    <Popover className="choose-label-popover">
      <div>Select Date</div>
      <input
        value={date}
        type="datetime-local"
        name="date"
        onChange={handleChange}
      />
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom-start"
      overlay={ChooseLabelPopover}
    >
      <button className="btn add-label-button">
        <BsCalendar2Date size="1.2rem" />
        {showText && <span className="button-name">Date</span>}
      </button>
    </OverlayTrigger>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.quotes.loading,
  date: state.quotes.newQuote?.date,
  ...ownProps,
});

export default connect(mapStateToProps)(DateButton);
