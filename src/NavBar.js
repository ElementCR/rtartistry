import React from 'react';
import './App.css';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar id="nav" bg="dark" variant="dark">
      <Navbar.Brand href="/"id="icon">RT Artistry</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" id="navvy">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown id="nav-item-end" title="Begin Your Quest" id="basic-nav-dropdown">
          <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
          <NavDropdown.Item href="/commission">Commission a Piece</NavDropdown.Item>
          <NavDropdown.Item href="/about">About the Artist</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/contact">Contact Me</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
