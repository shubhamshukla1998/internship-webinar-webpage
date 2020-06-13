import React from "react";

import Search from "../components/Search/Search";
import InternshipList from "../components/InternshipList/InternshipList";
import Filter from "../components/Filter/Filter";
import { internshipData } from "../data/internshipData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Content = () => {
  const data = internshipData;
  return (
    <Row>
      <Col xs={2} md={2} lg={2}>
        <Filter />
      </Col>
      <Col xs={10} md={10} lg={10}>
        <Search />
        <InternshipList data={data} />
      </Col>
    </Row>
  );
};

export default Content;
