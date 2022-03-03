import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import TagSelect from "components/inputs/CreatableSelect/TagSelect";
import { Popover } from "react-bootstrap";
import { BsTags } from "react-icons/bs";
import "./styles/TagButton.css";

const TagButton = ({ showText = true, quoteId }) => {
  const addTagPopover = (
    <Popover className="choose-label-popover">
      <div>Tag quote</div>
      <TagSelect quoteId={quoteId} />
    </Popover>
  );

  const onToggle = () => {
    console.log("TagButton clicked", quoteId);
  };

  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom-start"
      overlay={addTagPopover}
      onToggle={onToggle}
    >
      <button className="btn add-label-button">
        <BsTags size="1.2rem" />
        {showText && <span className="button-name">Tags</span>}
      </button>
    </OverlayTrigger>
  );
};

export default TagButton;
