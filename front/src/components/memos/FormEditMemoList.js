import React, { useEffect } from "react";
import PropTypes from "prop-types";

import FormEditMemo from "./FormEditMemo";

function removeItem(list, id) {
  return list.filter((el) => el._id !== id);
}

const FormEditMemoList = ({ memoList, setMemoList }) => {
  useEffect(() => {}, [memoList]);

  const deleteMemo = (id) => {
    return setMemoList(removeItem(memoList, id));
  };

  const handleChange = (memo) => {
    // replace memo based on _id
    let newMemoList = memoList.map((el) => {
      if (el._id === memo._id) {
        return memo;
      }
      return el;
    });
    setMemoList(newMemoList);
  };

  return (
    <div className="memos-container">
      <hr />
      Memos
      {memoList &&
        memoList.map((memo, i) => (
          <FormEditMemo
            key={memo._id}
            memo={memo}
            deleteMemo={deleteMemo}
            handleChange={handleChange}
          />
        ))}
    </div>
  );
};

FormEditMemoList.propTypes = {
  props: PropTypes.shape({
    memoList: PropTypes.array.isRequired,
    setMemoList: PropTypes.func.isRequired,
  }),
};

export default FormEditMemoList;
