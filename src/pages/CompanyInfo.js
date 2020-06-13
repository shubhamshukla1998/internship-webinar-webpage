import React from "react";
import CompanyDetails from "../components/CompanyDetails/CompanyDetails";
import FeedbackMain from "../components/Feedback/FeedbackMain";
import QuestionMain from "../components/Questions/QuestionMain";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumbotronComp from "../components/JumbotronComp";

function CompanyInfo() {
  return (
    <div>
      <JumbotronComp />
      <CompanyDetails />
      <FeedbackMain />
      <QuestionMain />
    </div>
  );
}

export default CompanyInfo;
