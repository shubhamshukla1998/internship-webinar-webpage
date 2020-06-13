import React from "react";
import details from "../../data/data";

import "./related.css";

const Related = (props) => {
  let data = details[0];
  return (
    <div class="rela">
      <h4 class="widget-heading">Related Webinar</h4>
      <div class="card">
        <div class="card-body cardb">
          <div class="ro">
            <figure>
              <img
                class="imgr"
                src="https://static.techgig.com/Themes/Release/images/tg_images/webinar-9.jpg"
              />
            </figure>
            <div class="inf clearfix">
              <h5 class="tit">{data.titr}</h5>
              <h8>{data.namer}</h8>
            </div>
          </div>
          <div class="row but">
            <span>
              <i class="fa fa-eye" aria-hidden="true">
                <text>200 Views</text>
              </i>
            </span>
            <span>
              <i class="fa fa-clock" aria-hidden="true">
                {" "}
                <text>2 years ago</text>{" "}
              </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Related;
