import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";

import {
  fetchLabels,
  addLabel,
  removeLabel,
  createLabel,
  resetLabels,
} from "reducers/labels/actions";

const LabelSelect = ({
  className,
  submitting,
  isFetching,
  labels,
  currentLabels,
}) => {
  const dispatch = useDispatch();
  // console.group("LabelSelect");
  // console.log("default", submitting, isFetching, currentLabels);
  // console.log("labels", labels);
  console.groupEnd();

  useEffect(() => {
    // console.log("fetching labels");
    dispatch(fetchLabels());
  }, [dispatch]);

  const handleCreate = label => {
    const newLabel = { label: label, order: 0 };
    dispatch(createLabel(newLabel));
  };

  const handleChange = label => {
    // console.log("handleChange", label);
    dispatch(addLabel(label));
  };

  const handleRemove = label => {
    dispatch(removeLabel(label));
  };

  const handleClear = () => {
    dispatch(resetLabels);
  };

  return (
    <CreatableSelect
      className={`label-select ${className}`}
      placeholder="Select Labels..."
      isClearable={true}
      isMulti={true}
      autoFocus={true}
      options={labels}
      value={currentLabels}
      createOption={handleCreate}
      changeOption={handleChange}
      removeOption={handleRemove}
      clearOption={handleClear}
      // isLoading={isFetching}
      isDisabled={submitting}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.labels.loading,
  labels: state.labels.labels,
  currentLabels: state.labels.currentLabels,
  ...ownProps,
});

export default connect(mapStateToProps)(LabelSelect);
