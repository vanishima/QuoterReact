import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import TagSelect from "components/inputs/CreatableSelect/TagSelect";
import { Popover } from "react-bootstrap";
import { BsTags } from "react-icons/bs";
import "./styles/TagButton.css";

const TagButton = () => {
  const addTagPopover = (
    <Popover className="choose-label-popover">
      <div>Tag quote</div>
      <TagSelect />
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom-start"
      overlay={addTagPopover}
    >
      <button className="btn add-label-button">
        <BsTags size="1.5rem" />
        <span className="button-name">Tags</span>
      </button>
    </OverlayTrigger>
  );
};

export default TagButton;
