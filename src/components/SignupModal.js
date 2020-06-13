import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import '../style/login.css'
import {Link} from 'react-router-dom';

 class LoginModal extends Component {

    handleClose=()=>
    {
      
        this.props.toggleModalSignup()
    }
    handleLogin=()=>{
      this.props.toggleModalLogin();
      this.props.toggleModalSignup()
    }

    render() {
        return (
            <div>
                 <Modal show={this.props.showSignupModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="compDets_loginHeader">Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text  className="compDets_nameIcon"><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control className="compDets_nameInput" type="text" placeholder="Name"  />
  </InputGroup>
  <hr/>
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text  id="basic-addon1" className="compDets_emailIcon"><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="email" placeholder="Enter email" className="compDets_emailInput"  aria-label="email"
      aria-describedby="basic-addon1"/>
  </InputGroup>
    <hr/>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text  className="compDets_passwordIcon"><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control className="compDets_passwordInput" type="password" placeholder="Password" />
  </InputGroup>
  <hr/>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text  className="compDets_passwordIcon"><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control className="compDets_passwordInput" type="password" placeholder="Confirm Password" />
  </InputGroup>
  <hr/>
  <Button variant="primary" className="compDets_loginSubmit" onClick={this.handleClose}>
    Signup
  </Button>
  <p className="compDets_SignupQues">Already have an account ? Login<Link to="/" onClick={this.handleLogin}> here </Link> </p>
</Form>
           </Modal.Body>

      </Modal>
            </div>
        )
    }
}

export default LoginModal
