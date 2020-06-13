import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "../style/login.css";
import { Link } from "react-router-dom";

class LoginModal extends Component {
  handleClose = (e) => {
    this.props.toggleModalLogin();
  };
  handleSignup = () => {
    this.props.toggleModalLogin();
    this.props.toggleModalSignup();
  };

  render() {
    return (
      <div>
        <Modal show={this.props.showLoginModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="compDets_loginHeader">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text
                    id="basic-addon1"
                    className="compDets_emailIcon"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="compDets_emailInput"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <hr />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text className="compDets_passwordIcon">
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="compDets_passwordInput"
                  type="password"
                  placeholder="Password"
                />
              </InputGroup>
              <hr />
              <Button
                variant="primary"
                className="compDets_loginSubmit"
                onClick={this.handleClose}
              >
                Login
              </Button>
              <br />
              <p className="compDets_SignupQues">
                Dont have an account ? Signup{" "}
                <Link to="/" onClick={this.handleSignup}>
                  {" "}
                  here{" "}
                </Link>{" "}
              </p>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
