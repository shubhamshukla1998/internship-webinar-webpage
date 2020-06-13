import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import Nav from "react-bootstrap/Nav";
import "../style/header.css";

const NavMain = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/internship" className="textGray">
              Internships
            </Nav.Link>
            <Nav.Link href="/webinar" className="textGray">
              Webinars
            </Nav.Link>
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

      {/* <Jumbotron fluid className="compDets_jumbotron">
      </Jumbotron>
      <div className="compDets_pentablue">
        <p>Internships</p>
      </div> */}
    </div>
  );
};

export default NavMain;
