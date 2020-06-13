import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Internship from "../Internship/Internship";

const InternshipList = ({ data }) => {
  return (
    <Container>
      <h4>Featured Internships</h4>
      <Row>
        {data.map((item) => {
          if (item.featured) {
            return (
              <Col md={6} key={item.id}>
                <Internship item={item} key={item.id} />
              </Col>
            );
          } else return null;
        })}
      </Row>
      <h4>All Internships</h4>
      <Row>
        {data.map((item) => (
          <Col md={6} key={item.id}>
            <Internship item={item} key={item.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InternshipList;
