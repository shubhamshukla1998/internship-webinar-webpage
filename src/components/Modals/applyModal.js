import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./modal.css";
import Form from "react-bootstrap/Form";

const ApplyModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Human Resource(Live Project)
          <p>
            <small id="timing">
              10 Jun'20, 12:00 AM IST - 21 Jun'20, 12:00 AM IST
            </small>
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h3>Job Description</h3>
              <h5>Responsibilities of the Candidate:</h5>
              <ol>
                <li>
                  {" "}
                  Calling and sourcing the candidates as per requirement{" "}
                </li>
                <li> Screening resumes and shortlisting candidates </li>
                <li> Scheduling and taking interviews </li>
                <li>
                  Regular check with team leaders working on different projects
                </li>
                <li> Reporting the work details to the head of departments </li>
                <li>
                  {" "}
                  Organizing fun and engagement activities in the company{" "}
                </li>
                <li> Handling documentation </li>
              </ol>
              <p>
                <strong>Number of Internships:</strong> 4
              </p>
              <p>
                <strong>Skills Required: </strong> Good Communication Skills,
                Multi-Tasking Skills, and Ability to Manage Teams
              </p>
              <p>
                <strong>Perks:</strong> Live Project Certificate, Letter of
                Recommendation, Flexible Working Hours
              </p>
            </Col>
            <Col xs={12} md={6}>
              <h4>Assessment questions</h4>
              <Form className="questions-form">
                <Form.Group>
                  <Form.Label>
                    Q1. Why should you be hired for this role?
                  </Form.Label>
                  <Form.Control as="textarea" rows="4" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Q2. Are you available for 3 months, starting immediately,
                    for a work from home internship? If not, what is the time
                    period you are available for and the earliest date you can
                    start this internship on?
                  </Form.Label>
                  <Form.Control as="textarea" rows="4" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Q3. Share any of your previous projects or works
                  </Form.Label>
                  <Form.Control as="textarea" rows="4" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyModal;
