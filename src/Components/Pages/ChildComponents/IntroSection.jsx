import React from "react";
// import { Link } from "react-router-dom";

const IntroSection = (props) => {
  return (
    <section id="portfolio_header">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="wrap">
              <h2>{props.siteLink}</h2>
              <h3>
                {/* <Link to={"/"}> {props.homeLink}</Link> /{" "}
                <Link className="active" to={"/"}> */}
                  {" "}
                  {props.siteLink}
                {/* </Link>{" "} */}
              </h3>
            </div>
          </div>
          <div class="col-md-6">
            <div class="wrap">
              <h2 class="inner-text">{props.siteLink}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
