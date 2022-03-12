import React from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";

import { createTag } from "reducers/tags/actions";
import { selectTags } from "reducers/tags/selectors";
import {
  selectActiveQuoteId,
  selectLoading,
  selectTagsSelected,
} from "reducers/quotes/selectors";
import {
  addTagToQuote,
  removeTagFromQuote,
  setQuoteInput,
} from "reducers/quotes/quoteActions";
import {
  tagsStringToObjectMapper,
  tagStringToObjectMapper,
} from "reducers/tags/mappers";

const TagSelect = ({ submitting, tags, selectedTags, quoteId }) => {
  const dispatch = useDispatch();
  //   console.group("TagSelect");
  //   console.log("default", submitting, isFetching, tags);
  //   console.log("tags", tags);
  // console.groupEnd();
  // console.log("selectedTags", quote?.tags, quoteId, selectedTags);
  console.log("selectedTags", selectedTags);

  const handleCreate = tag => {
    // console.log("handleCreate", tag);
    const newTag = tagStringToObjectMapper(tag);
    dispatch(createTag(newTag));
    handleChange(newTag);
  };

  const handleChange = tagOption => {
    console.log("handleChange", tagOption);
    dispatch(addTagToQuote(tagOption, quoteId));
  };

  const handleRemove = tagOption => {
    console.log("remove tag", tagOption);
    dispatch(removeTagFromQuote(tagOption, quoteId));
  };

  const handleClear = () => {
    console.log("TagSelect handleClear");
    dispatch(setQuoteInput("tags", [], quoteId));
  };

  return (
    <CreatableSelect
      className="tag-select"
      placeholder="Select Tags..."
      isClearable={true}
      isMulti={true}
      autoFocus={true}
      options={tags}
      value={quoteId ? tagsStringToObjectMapper(selectedTags) : selectedTags}
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
  submitting: selectLoading(state),
  tags: selectTags(state),
  selectedTags: selectTagsSelected(state),
  quoteId: selectActiveQuoteId(state),
  ...ownProps,
});

export default connect(mapStateToProps)(TagSelect);
