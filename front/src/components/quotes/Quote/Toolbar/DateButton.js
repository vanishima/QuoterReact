import React from "react";
import { connect, useDispatch } from "react-redux";
import { BsCalendar2Date } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Popover } from "react-bootstrap";
import { selectLoading } from "reducers/quotes/selectors";
import { isoDateWithoutTimezone } from "api/utilsAPI";
import { setQuoteInput } from "reducers/quotes/quoteActions";

import "./styles/DateButton.css";

const DateButton = ({
  loading,
  date = new Date(),
  showText = true,
  quoteId,
}) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setQuoteInput(e.target.name, e.target.value, quoteId));
  };

  const ChooseLabelPopover = (
    <Popover className="choose-label-popover">
      <div>Select Date</div>
      <input
        value={isoDateWithoutTimezone(date)}
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
  loading: selectLoading(state),
  ...ownProps,
});

export default connect(mapStateToProps)(DateButton);
