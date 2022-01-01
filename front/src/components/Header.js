import { React } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authAPI from "../api/authAPI";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutClick = () => {
    authAPI.logout();
    document.location.href = "/";
  };

  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="none-style" to="/">
              Quoter
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/map">My Quotes</Nav.Link>
              <Nav.Link href="/authors">Authors</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            {user ? (
              <div>
                <Navbar.Text className="me-2">
                  Welcome, <a href="./user">{user.name}</a>
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
