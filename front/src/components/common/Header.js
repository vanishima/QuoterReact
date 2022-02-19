import { React } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "reducers/user/actions";

import "components/common/styles/header.css";

const Header = props => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("Header", currentUser);
  console.log("token", localStorage.getItem("token"));

  const logoutClick = () => {
    logout();
    navigate("/login");
  };

  const url = new URL(window.location);
  const currPage = url.pathname;

  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <h1 className="nav-title">Quoter</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Quotes</Nav.Link>
              <Nav.Link href="/authors">Authors</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/comments">Comments</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            {currentUser ? (
              <div>
                <Navbar.Text className="me-2">
                  Welcome,{" "}
                  <a href={`/user/${currentUser.id}`}>{currentUser.name}</a>
                </Navbar.Text>
                <Button
                  className="me-2"
                  variant="primary"
                  onClick={logoutClick}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div>
                <Button className="me-2" variant="primary" href="/">
                  Login / Register
                </Button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
