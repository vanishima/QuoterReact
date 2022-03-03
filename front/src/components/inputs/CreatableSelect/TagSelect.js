import React from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { isoDateWithoutTimezone } from "api/utilsAPI";

import { addTag, removeTag, createTag, resetTags } from "reducers/tags/actions";
import { selectTags, selectCurrentTags } from "reducers/tags/selectors";
import { selectLoading, selectQuoteById } from "reducers/quotes/selectors";
import { updateQuote } from "reducers/quotes/quoteActions";

const TagSelect = ({
  className,
  submitting,
  tags,
  currentTags,
  quote,
  quoteId,
}) => {
  const dispatch = useDispatch();
  const selectedTags = quote ? quote.tags : currentTags;
  //   console.group("TagSelect");
  //   console.log("default", submitting, isFetching, tags);
  //   console.log("tags", tags);
  // console.groupEnd();
  // console.log("selectedTags", quote, quoteId, selectedTags);

  const handleCreate = tag => {
    // console.log("handleCreate", tag);
    const newTag = {
      label: tag,
      order: 0,
      lastUsedAt: isoDateWithoutTimezone(new Date()),
    };
    dispatch(createTag(newTag));
    handleChange(newTag);
  };

  const handleChange = tag => {
    // console.log("handleChange", tag);
    if (quoteId) {
      dispatch(
        updateQuote({
          ...quote,
          tags: quote.tags ? [...quote.tags, tag] : [tag],
        })
      );
      // dispatch(updateQuoteInputListById(quoteId, "tags", tag));
    } else {
      dispatch(addTag(tag));
    }
  };

  const handleRemove = tag => {
    console.log("remove tag", tag);
    if (quoteId) {
      dispatch(
        updateQuote({
          ...quote,
          tags: quote.tags.filter(t => t.label !== tag.label),
        })
      );
      // dispatch(removeTagFromQuote(quoteId, tag));
    } else {
      dispatch(removeTag(tag));
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
