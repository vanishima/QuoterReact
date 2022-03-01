import React from "react";
import { MdOutlineLabel } from "react-icons/md";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import LabelSelect from "components/inputs/CreatableSelect/LabelSelect";
import "./styles/LabelButton.css";
import { Popover } from "react-bootstrap";

const LabelButton = ({ showText = true }) => {
  const ChooseLabelPopover = (
    <Popover className="choose-label-popover">
      <div>Label quote</div>
      <LabelSelect />
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom-start"
      overlay={ChooseLabelPopover}
    >
      <button className="btn add-label-button">
        <MdOutlineLabel size="1.5rem" />
        {showText && <span className="button-name">Label</span>}
      </button>
    </OverlayTrigger>
  );
};

export default LabelButton;
