import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./modal.css";

import { categories } from "../../data/categories";

const filterModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="example-modal-sizes-title-sm"
      centered
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          <h5>Filters</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <p className="tag">Categories</p>
            {categories.map((item, index) => (
              <div key={`${index}`} className="mb-3 categ-list">
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox${index}`}
                  label={`${item}`}
                />
              </div>
            ))}
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default filterModal;
