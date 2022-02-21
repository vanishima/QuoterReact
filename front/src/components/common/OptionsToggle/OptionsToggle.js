import React from "react";
import { Dropdown } from "react-bootstrap";
import "./styles/OptionsToggle.css";

const OptionsToggle = ({ children }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="options-toggle">&#8942;</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default OptionsToggle;
