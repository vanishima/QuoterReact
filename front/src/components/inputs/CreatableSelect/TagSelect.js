import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { isoDateWithoutTimezone } from "api/utilsAPI";

import { fetchTags, addTag, removeTag, createTag } from "reducers/tags/actions";

const TagSelect = ({
  className,
  submitting,
  isFetching,
  tags,
  currentTags,
}) => {
  const dispatch = useDispatch();
  //   console.group("TagSelect");
  //   console.log("default", submitting, isFetching, tags);
  //   console.log("tags", tags);
  console.groupEnd();

  useEffect(() => {
    // console.log("fetching tags");
    dispatch(fetchTags());
  }, [dispatch]);

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
    dispatch(addTag(tag));
  };

  const handleRemove = tag => {
    dispatch(removeTag(tag));
  };

  return (
    <CreatableSelect
      isClearable={true}
      isMulti={true}
      className={`tag-select ${className}`}
      options={tags}
      value={currentTags}
      createOption={handleCreate}
      changeOption={handleChange}
      removeOption={handleRemove}
      //   isLoading={isFetching}
      isDisabled={submitting}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.tags.loading,
  tags: state.tags.tags,
  currentTags: state.tags.currentTags,
  ...ownProps,
});

export default connect(mapStateToProps)(TagSelect);
