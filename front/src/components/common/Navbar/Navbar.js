import React from "react";
import { connect } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";

import { selectIsDarkMode } from "reducers/theme/selectors";
import DisplayControl from "components/common/DisplayControl/DisplayControl";
import UserStatus from "./UserStatus/UserStatus";

import "./styles/Navbar.css";
// import QuotesFilter from "./QuotesFilter/QuotesFilter";

const NavigationBar = ({ isDarkMode }) => {
  const background = isDarkMode ? "dark" : "light";
  const variant = isDarkMode ? "dark" : "light";

  return (
    <header>
      <Navbar bg={background} variant={variant} expand="lg" fixed="top">
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

          {/* <QuotesFilter /> */}

          <Navbar.Collapse className="justify-content-end">
            <UserStatus />
            <DisplayControl />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const mapStateToProps = state => ({
  isDarkMode: selectIsDarkMode(state),
});

export default connect(mapStateToProps)(NavigationBar);
