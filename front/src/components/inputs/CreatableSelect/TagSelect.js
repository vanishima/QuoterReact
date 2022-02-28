import React from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { isoDateWithoutTimezone } from "api/utilsAPI";

import { addTag, removeTag, createTag, resetTags } from "reducers/tags/actions";
import { selectTags, selectCurrentTags } from "reducers/tags/selectors";
import {
  selectActiveQuoteId,
  selectTagsSelected,
} from "reducers/quotes/selectors";
import {
  updateQuoteInputById,
  updateQuoteInputListById,
} from "reducers/quotes/quoteActions";

const TagSelect = ({
  className,
  submitting,
  tags,
  selectedTags,
  currentTags,
  activeQuoteId,
}) => {
  const dispatch = useDispatch();
  //   console.group("TagSelect");
  //   console.log("default", submitting, isFetching, tags);
  //   console.log("tags", tags);
  // console.groupEnd();

  // console.log("currentTags", currentTags);

  const handleCreate = tag => {
    // console.log("handleCreate", tag);
    const newTag = {
      label: tag,
      order: 0,
      lastUsedAt: isoDateWithoutTimezone(new Date()),
    };
    dispatch(createTag(newTag));
  };

  const handleChange = tag => {
    // console.log("handleChange", tag);
    if (activeQuoteId) {
      dispatch(updateQuoteInputListById(activeQuoteId, "tags", tag));
    } else {
      dispatch(addTag(tag));
    }
  };

  const handleRemove = tag => {
    console.log("remove tag", tag);
    dispatch(removeTag(tag));
  };

  const handleClear = () => {
    console.log("TagSelect handleClear");
    if (activeQuoteId) {
      dispatch(updateQuoteInputById(activeQuoteId, "tags", []));
    } else {
      dispatch(resetTags);
    }
  };

  return (
    <CreatableSelect
      className={`tag-select ${className}`}
      placeholder="Select Tags..."
      isClearable={true}
      isMulti={true}
      autoFocus={true}
      options={tags}
      value={selectedTags}
      createOption={handleCreate}
      changeOption={handleChange}
      removeOption={handleRemove}
      clearOption={handleClear}
      isDisabled={submitting}
      menuIsOpen={true}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  tags: selectTags(state),
  currentTags: selectCurrentTags(state),
  selectedTags: selectTagsSelected(state),
  activeQuoteId: selectActiveQuoteId(state),
  ...ownProps,
});

export default connect(mapStateToProps)(TagSelect);
