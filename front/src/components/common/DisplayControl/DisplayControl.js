import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowDate,
  toggleShowMemo,
  toggleShowTag,
} from "reducers/theme/actions";
import {
  selectShowDate,
  selectShowTag,
  selectShowMemo,
  selectShowTitle,
} from "reducers/theme/selectors";

import "./styles/DisplayControl.css";

const DisplayControl = () => {
  const dispatch = useDispatch();
  const showDate = useSelector(selectShowDate);
  const showTag = useSelector(selectShowTag);
  const showMemo = useSelector(selectShowMemo);
  const showTitle = useSelector(selectShowTitle);

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle display-control"
        type="button"
        id="displayControlDropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Display
      </button>
      <ul
        className="dropdown-menu display-control-dropdown"
        aria-labelledby="displayControlDropdownMenuButton"
      >
        <li>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="ShowDateCheckbox"
              checked={showDate}
              onChange={() => {
                dispatch(toggleShowDate());
              }}
            />
            <label className="form-check-label" for="ShowDateCheckbox">
              Show Date
            </label>
          </div>
        </li>
        <li>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="ShowMemoCheckbox"
              checked={showMemo}
              onChange={() => {
                dispatch(toggleShowMemo());
              }}
            />
            <label className="form-check-label" for="ShowMemoCheckbox">
              Show Memo
            </label>
          </div>
        </li>
        <li>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="ShowTagCheckbox"
              checked={showTag}
              onChange={() => {
                dispatch(toggleShowTag());
              }}
            />
            <label className="form-check-label" for="ShowTagCheckbox">
              Show Tag
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DisplayControl;
