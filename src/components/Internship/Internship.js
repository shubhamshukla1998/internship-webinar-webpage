import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ApplyModal from "../Modals/applyModal";

import "./internship.css";

const Internship = ({ item }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="card mb-3 mt-3 listing">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img
              src={item.image}
              className="card-img internship-img"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <Link to={`/internships/internship-detail/${item.id}`}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.company_name}</p>
                <p className="card-text">
                  <small className="text-muted">{item.start_date}</small>
                  {" - "}
                  <small className="text-muted">{item.end_date}</small>
                </p>
                <p className="card-text stipend-text">
                  <em>{item.stipend}</em>
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-2 follow-section">
            <button
              className="btn btn-primary apply-btn"
              onClick={() => setModalShow(true)}
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      <ApplyModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Internship;
