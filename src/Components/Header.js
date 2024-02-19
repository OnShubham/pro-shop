import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar expand="lg" variant="dark" bg="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Pro-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Cart"> Cart</Nav.Link>
              <Nav.Link href="/Login"> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
