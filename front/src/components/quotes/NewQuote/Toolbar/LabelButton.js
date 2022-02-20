import React from "react";
import { MdOutlineLabel } from "react-icons/md";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import LabelSelect from "components/inputs/CreatableSelect/LabelSelect";

const LabelButton = () => {
  const LabelPopover = (
    <Popover id="popover-label">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>
        <LabelSelect />
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={LabelPopover}>
      <button className="btn option-button">
        <MdOutlineLabel size="1.5rem" />
        <span className="button-name">Label</span>
      </button>
    </OverlayTrigger>
  );
};

export default LabelButton;
