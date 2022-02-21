import React from "react";

const DatePicker = ({ defaultDate, onChange }) => {
  return (
    <div>
      <input
        value={defaultDate}
        type="datetime-local"
        name="date"
        onChange={onChange}
      />
    </div>
  );
};

export default DatePicker;
