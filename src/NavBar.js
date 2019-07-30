import React from 'react';
import './App.css';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button, Image} from 'react-bootstrap';
import RTLogo from './images/rtlogo.png';
import PinkTri from './images/pinktri.png'
import Combo from './images/combologo.png';

function NavBar() {
  return (
    <Navbar id="nav" bg="dark" variant="dark">
      <Navbar.Brand href="/" id="icon">
      <Image
          src={Combo}
          className="d-inline-block align-top"
          alt="RT Logo"
          width="50em"
        />
      </Navbar.Brand>
      <Navbar.Brand href="/"id="icon">
        RT Artistry
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" id="navvy">
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
