import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";

import { fetchLabels, setLabel, createLabel } from "reducers/labels/actions";

const LabelSelect = ({
  className,
  submitting,
  isFetching,
  labels,
  currentLabel,
}) => {
  const dispatch = useDispatch();
  console.group("LabelSelect");
  console.log("default", submitting, isFetching, currentLabel);
  console.log("labels", labels);
  console.groupEnd();

  useEffect(() => {
    console.log("fetching labels");
    dispatch(fetchLabels());
  }, [dispatch]);

  const isDisabled = submitting || isFetching;

  const handleCreate = label => {
    const newLabel = { label: label, order: 0 };
    dispatch(createLabel(newLabel));
  };

  const changeLabel = label => {
    console.log("changeLabel", label);
    dispatch(setLabel(label));
  };

  return (
    <CreatableSelect
      className={`${className}`}
      options={labels}
      value={currentLabel}
      createOption={handleCreate}
      changeOption={changeLabel}
      isDisabled={isDisabled}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.labels.loading,
  labels: state.labels.labels,
  currentLabel: state.labels.currentLabel,
  ...ownProps,
});

export default connect(mapStateToProps)(LabelSelect);
