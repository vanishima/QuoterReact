import React, { useEffect } from "react";
import AsyncCreatableSelect from "react-select/async-creatable";
import { connect, useDispatch } from "react-redux";
import {
  selectActiveQuoteId,
  selectActiveTags,
  selectLoading,
} from "reducers/quotes/selectors";
import { selectTags } from "reducers/tags/selectors";

const TagSelectv2 = ({ options, value, submitting, activeQuoteId }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, [options, value]);

  const filterOptions = inputValue => {
    if (options?.length > 0) {
      return options.filter(i =>
        i.value.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return [];
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  const handleChange = async (newTags, actionMeta) => {
    const { action } = actionMeta;
  };

  const disableOption = option => {
    if (!value) return false;
    return value.includes(option);
  };

  return (
    <AsyncCreatableSelect
      options={options}
      value={value}
      isDisabled={submitting}
      isClearable
      isMulti
      placeholder="Select Tags..."
      cacheOptions={true}
      loadOptions={promiseOptions}
      autoFocus
      menuIsOpen
      isOptionDisabled={disableOption}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: selectLoading(state),
  options: selectTags(state),
  value: selectActiveTags(state),
  activeQuoteId: selectActiveQuoteId(state),
  ...ownProps,
});

export default connect(mapStateToProps)(TagSelectv2);
