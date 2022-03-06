import React from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { isoDateWithoutTimezone } from "api/utilsAPI";

import { addTag, removeTag, createTag, resetTags } from "reducers/tags/actions";
import { selectTags, selectCurrentTags } from "reducers/tags/selectors";
import { selectLoading, selectQuoteById } from "reducers/quotes/selectors";
import { updateQuote } from "reducers/quotes/quoteActions";
import {
  tagsStringToObjectMapper,
  tagStringToObjectMapper,
} from "reducers/tags/mappers";

const TagSelect = ({
  className,
  submitting,
  tags,
  currentTags,
  quote,
  quoteId,
}) => {
  const dispatch = useDispatch();
  const selectedTags = quote
    ? tagsStringToObjectMapper(quote.tags)
    : currentTags;
  //   console.group("TagSelect");
  //   console.log("default", submitting, isFetching, tags);
  //   console.log("tags", tags);
  // console.groupEnd();
  // console.log("selectedTags", quote?.tags, quoteId, selectedTags);

  const handleCreate = tag => {
    // console.log("handleCreate", tag);
    const newTag = tagStringToObjectMapper(tag);
    dispatch(createTag(newTag));
    handleChange(newTag);
  };

  const handleChange = tagOption => {
    console.log("handleChange", tagOption);
    if (quoteId) {
      dispatch(
        updateQuote({
          ...quote,
          tags: quote.tags
            ? [...quote.tags, tagOption.label]
            : [tagOption.label],
        })
      );
      // dispatch(updateQuoteInputListById(quoteId, "tags", tag));
    } else {
      dispatch(addTag(tagOption));
    }
  };

  const handleRemove = tagOption => {
    console.log("remove tag", tagOption);
    if (quoteId) {
      dispatch(
        updateQuote({
          ...quote,
          tags: quote.tags.filter(t => t !== tagOption.label),
        })
      );
      // dispatch(removeTagFromQuote(quoteId, tag));
    } else {
      dispatch(removeTag(tagOption));
    }
  };

  const handleClear = () => {
    console.log("TagSelect handleClear");
    if (quoteId) {
      dispatch(updateQuote({ ...quote, tags: [] }));
      // dispatch(updateQuoteInputById(quoteId, "tags", []));
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
  submitting: selectLoading(state),
  tags: selectTags(state),
  currentTags: selectCurrentTags(state),
  quote: selectQuoteById(state, ownProps?.quoteId),
  ...ownProps,
});

export default connect(mapStateToProps)(TagSelect);
