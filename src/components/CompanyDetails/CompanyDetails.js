import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "../../style/CompanyDetails.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DefaultImg from "../../images/empty.jpg";
import Button from "react-bootstrap/Button";
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";

import Alert from "react-bootstrap/Alert";

class CompanyDetails extends Component {
  state = {
    name: "Netomi",
    position: "Human Resources (HR)",
    region: "India",
    profileImg: DefaultImg,
    eligibility: "MBA Students",
    date: "25 Jun 2020",
    internshipDeadline: "25 Aug 2020",
    applicationDeadline: "15 Jun 2020",
    applicants: 20,
    daysLeft: "9",
    views: 60,
    salaryPM: 2000,
    message: "Added to your watchlist",
    applied: false,
    watchlist: false,
    showAlert: false,
    showLoginModal: true,
    showSignupModal: false,
    color: "greenAlert",
    btnColor: "bookmarkNoColor",
    jobDescription: [
      {
        brief:
          "This is an MBA Internship where you will work closely with Netomi's team of people ops to drive HR strategies and processes. You will take the lead in researching the best practices followed in the IT industry to build the future of Netomi. You will be responsible for planning research, design, and execution of HR policies.",
        responsibilities: [
          "Modify normal hiring to remote hiring and adapt it as the new norm",
          "Set up a process for performance appraisal of employees",
          "Make employee engagement and reward strategies for remote staff",
          "Work on the effectiveness of induction and orientation process in an AI Startup",
        ],
        qualifications: [
          "Pursuing an MBA from a tier-1 college",
          "Excellent analysis and problem-solving skills",
          " Ability to gain insights and provide recommendations accordingly",
          "Excellent research skills",
          "Strong communication and interpersonal skills",
          "Innovative thinking process and not afraid to question",
          "Initiating multiple initiatives at a time working vigorously to show progress",
          "Entrepreneurial spirit and ability to take initiative and ownership",
          "Excellent team player",
          "Flexible and comfortable working in a fast-paced environment",
        ],
      },
    ],
  };
  handleAlertClick = () => {
    this.setState({
      watchlist: !this.state.watchlist,
      showAlert: true,
    });
    if (this.state.watchlist !== true) {
      this.setState({
        message: "Added to WatchList",
        color: "greenAlert",
        btnColor: "bookmarkRedColor",
      });
    } else {
      this.setState({
        message: "Removed from WatchList",
        color: "redAlert",
        btnColor: "bookmarkNoColor",
      });
    }
    console.log(this.state);
  };
  handleClose = () => {
    this.setState({
      showAlert: false,
    });
  };

  toggleModalLogin = () => {
    this.setState({
      showLoginModal: !this.state.showLoginModal,
    });
    console.log(this.state);
  };
  toggleModalSignup = () => {
    this.setState({
      showSignupModal: !this.state.showSignupModal,
    });
    console.log(this.state);
  };
  render() {
    let companyData = this.state;
    let alertComp =
      companyData.showAlert === true ? (
        <Alert
          onClose={this.handleClose}
          className={companyData.color}
          dismissible
        >
          <Alert.Heading>
            <FontAwesomeIcon icon={faInfoCircle} />
            &nbsp;&nbsp;
            {companyData.message}
          </Alert.Heading>
        </Alert>
      ) : null;
    let jobDescription = companyData.jobDescription.map((des, i) => {
      return (
        <Container className="compDets_desContainer" key={i}>
          <h4 className="compDets_jobHeader">Job Description</h4>
          <p className="compDets_textGray">{des.brief}</p>
          <p className="compDets_textGray" style={{ fontWeight: 600 }}>
            Responsibilities of the Intern :
          </p>
          <ul className="compDets_desList">
            {des.responsibilities.map((responsibility, i) => {
              return (
                <li className="compDets_desList" key={i}>
                  {responsibility}
                </li>
              );
            })}
          </ul>
          <p className="compDets_textGray" style={{ fontWeight: 600 }}>
            Skills and Qualifications Required :
          </p>
          <ul className="compDets_desList">
            {des.qualifications.map((qualification, i) => {
              return (
                <li className="compDets_desList" key={i}>
                  {qualification}
                </li>
              );
            })}
          </ul>
        </Container>
      );
    });
    return (
      <div className="compDets_mainContainer">
        {alertComp}
        <div className="compDets_infoContainer">
          <LoginModal
            showLoginModal={this.state.showLoginModal}
            toggleModalLogin={this.toggleModalLogin}
            toggleModalSignup={this.toggleModalSignup}
          />
          <SignupModal
            showSignupModal={this.state.showSignupModal}
            toggleModalLogin={this.toggleModalLogin}
            toggleModalSignup={this.toggleModalSignup}
          />

          <Container>
            <Row>
              <Col sm={12} md={8} lg={9} className="compDets_colinfo">
                <Row>
                  <Col xs={4} lg={3} className="compDets_compImgCol">
                    <img
                      src={companyData.profileImg}
                      className="compDets_compImg"
                      alt="compImg"
                    />
                  </Col>
                  <Col xs={8} lg={9}>
                    <h4 className="compDets_posHeader">
                      {companyData.position}
                    </h4>
                    <p className="compDets_nameHeader">#{companyData.name}</p>
                    <p className="compDets_textGray" style={{ fontSize: 18 }}>
                      <span style={{ paddingRight: 10, fontSize: 18 }}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </span>
                      {companyData.date} - {companyData.internshipDeadline}
                    </p>
                  </Col>

                  <Col md={6} lg={8} className="compDets_eligible">
                    <p>
                      {" "}
                      Eligibility :{" "}
                      <span className="compDets_extraBorder">
                        {companyData.eligibility}
                      </span>
                    </p>
                  </Col>
                  <Col md={6} lg={4} className="compDets_region">
                    <p>
                      Region :{" "}
                      <span className="compDets_extraBorder">
                        {companyData.region}{" "}
                      </span>{" "}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={4} lg={3} className="compDets_colapply">
                <Row className="compDets_applyDiv ">
                  <Col xs={10} md={9}>
                    <Button className="compDets_applyBtn">Apply</Button>
                  </Col>
                  <Col className="compDets_col-btn" xs={2} md={3}>
                    <Button
                      className={companyData.btnColor}
                      onClick={this.handleAlertClick}
                    >
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className="compDets_bookmark"
                      />
                    </Button>
                  </Col>
                </Row>
                <div className="compDets_viewDiv">
                  <div className="compDets_daysLeft">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="compDets_veiwDivIcons"
                    />
                    <br />

                    {companyData.daysLeft}
                    <br />
                    <p className="compDets_veiwDivPara">Days Left</p>
                  </div>
                  <div className="compDets_applicants">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="compDets_veiwDivIcons"
                    />
                    <br />

                    {companyData.applicants}

                    <br />
                    <p className="compDets_veiwDivPara">Applied</p>
                  </div>
                  <div className="compDets_views">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="compDets_veiwDivIcons"
                    />
                    <br />

                    {companyData.views}
                    <br />
                    <p className="compDets_veiwDivPara">Views</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="compDets_jobContainer">{jobDescription}</div>
        <div className="compDets_dateContainer">
          <Container style={{ paddingLeft: 0 }}>
            <h4 className="compDets_dateHeader">
              What are the important dates and deadlines ?
            </h4>

            <p className="compDets_textGray">
              <span style={{ paddingRight: 10, fontSize: 18 }}>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
              {companyData.applicationDeadline}
            </p>
            <p className="compDets_dateBlue">Application Deadline</p>
          </Container>
        </div>
      </div>
    );
  }
}

export default CompanyDetails;
