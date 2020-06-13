import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

import "../style/header.css";

const JumbotronComp = () => {
  return (
    <>
      <Jumbotron fluid className="compDets_jumbotron"></Jumbotron>
      <div className="compDets_pentablue">
        <p>Internships</p>
      </div>
    </>
  );
};

export default JumbotronComp;
