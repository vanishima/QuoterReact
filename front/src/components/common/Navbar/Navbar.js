import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import DisplayControl from "components/common/DisplayControl/DisplayControl";
import UserStatus from "./UserStatus/UserStatus";

import "./styles/Navbar.css";

const NavigationBar = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <h1 className="nav-title">Quoter</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/quotes">Quotes</Nav.Link>
              <Nav.Link href="/authors">Authors</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/comments">Comments</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <UserStatus />
            <DisplayControl />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
