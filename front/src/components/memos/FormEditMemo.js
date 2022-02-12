import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Element
import {
  InlineLabelEditTextarea,
  InlineLabelEditDate,
} from "../utils/InlineEdit";

// API
import { isoDateWithoutTimezone } from "../../api/utilsAPI";

const FormEditMemo = ({ memo, deleteMemo, handleChange }) => {
  const [id, setId] = useState(0);
  const [text, setText] = useState("");
  const [date, setDate] = useState(isoDateWithoutTimezone(memo.date));
  const [isNotSaved, setIsNotSaved] = useState(false);

  useEffect(() => {
    if (memo) drawMemo(memo);
  }, [memo]);

  const drawMemo = (memo) => {
    setId(memo._id);
    setText(memo.text);
    setDate(isoDateWithoutTimezone(memo.date));
  };

  const packageMemo = () => {
    return { ...memo, text: text, date: date };
  };

  return (
    <div className="memo-edit">
      <InlineLabelEditTextarea
        className=" memo-text"
        showBorder={true}
        label={`Memo${memo._id}`}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setIsNotSaved(true);
        }}
      />
      <div className="row">
        <InlineLabelEditDate
          className=" col-6 memo-date"
          label="Date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
            setIsNotSaved(true);
          }}
        />
        <button
          className="btn btn-outline-danger col-1 memo-action-btn me-2"
          onClick={(e) => {
            console.log("delete memo", id);
            deleteMemo(id);
          }}
        >
          X
        </button>
        {isNotSaved && (
          <button
            className="btn btn-outline-primary col-1 memo-action-btn me-2"
            onClick={(e) => {
              console.log("save memo", id);
              handleChange(packageMemo());
              setIsNotSaved(false);
            }}
          >
            √
          </button>
        )}
      </div>

      <hr />
    </div>
  );
};

FormEditMemo.propTypes = {
  props: PropTypes.shape({
    memo: PropTypes.object.isRequired,
    deleteMemo: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  }),
};

export default FormEditMemo;
