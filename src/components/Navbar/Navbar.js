import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";

import "./navbar.css";

const NavMain = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" id="link">
            <Nav.Link href="/">Internship</Nav.Link>
            <Nav.Link href="/webinars">Webinar</Nav.Link>
          </Nav>
          <Nav.Link href="#home" className="textGray">
            <FontAwesomeIcon icon={faSearch} />
          </Nav.Link>
          <Nav.Link href="#link" className="textGray">
            <FontAwesomeIcon icon={faBell} />
          </Nav.Link>
          <Nav.Link href="#home" className="textGray">
            <FontAwesomeIcon icon={faUserCircle} />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavMain;
