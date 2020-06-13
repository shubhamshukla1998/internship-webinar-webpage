import React from "react";
import details from "../../data/data";
import "./webdetail.css";

const Webidetail = (props) => {
  const wid = 0;
  const data = details[wid];

  return (
    <div className="web-main">
      <div class="card ">
        <div class="card-body">
          <h1 class="titi">{data.name}</h1>
          <div class="row">
            <div class="col-sm-7">
              <p className="ini">
                <span>
                  <i class="fa fa-user" aria-hidden="true"></i>{" "}
                  {data.registered}
                </span>
                <span>
                  <i class="fa fa-calendar" aria-hidden="true"></i> {data.date}
                </span>
                <span>
                  <i class="fa fa-clock" aria-hidden="true">
                    {" "}
                  </i>{" "}
                  {data.time}
                </span>
              </p>
            </div>
            <div class="col-sm-5">
              <p className="share">
                <button type="button" class="btn btn-outline-dark btn-sm">
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i> Like
                </button>
                <button type="button" class="btn btn-outline-dark btn-sm">
                  <i class="fa fa-share-alt" aria-hidden="true"></i> Share
                </button>
              </p>
            </div>
          </div>
          <a href="#" type="button" class="btn btn-primary">
            <i class="fa fa-bookmark" aria-hidden="true"></i> Book Your Seat
          </a>
          <div className="main-body">
            <div className="fol">
              <button type="button" class="btn btn-outline-primary">
                Follow
              </button>
            </div>

            <div>
              <div className="inner">
                <img className="img" src={data.image} />
                <div className="info">
                  <h5 className="int">{data.interactor}</h5>
                  <article className="desig">{data.desig}</article>
                  <span className="company">{data.Company}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="matter">
            {data.Summary}
            <h6 className="about">About {data.Company}</h6>
            <p>{data.desc}</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5>Description</h5>
          <p>{data.description}</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <p>
            Become a part of this webinar. Ask questions and interact with{" "}
            <strong>{data.interactor}</strong> Live
          </p>
          <a href="#" type="button" class="btn btn-primary">
            <i class="fa fa-bookmark" aria-hidden="true"></i> Book Your Seat
          </a>
        </div>
      </div>
    </div>
  );
};

export default Webidetail;
