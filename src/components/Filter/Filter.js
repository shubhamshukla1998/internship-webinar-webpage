import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./filter.css";
import { categories } from "../../data/categories";

const Filter = (props) => {
  return (
    <>
      <Accordion defaultActiveKey="0" className="filter-accord">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Filters
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
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
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default Filter;
