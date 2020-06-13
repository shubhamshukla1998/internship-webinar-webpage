import React from "react";
import Webidetail from "../../components/webinardetail/WebinarDetail";
import Related from "../../components/related/related";
import "./webinardetails.css";

const WebninarHome = (props) => {
  return (
    <div id="content">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sn-7 left-panel clearfix">
            <Webidetail />
          </div>
          <div class="col-md-4 col-sn-5 right-panel clearfix">
            <Related />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebninarHome;
