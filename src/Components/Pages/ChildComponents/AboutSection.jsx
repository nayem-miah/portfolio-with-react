import React from "react";
// import { Link } from "react-router-dom";
import AboutImg from "../../Img/about1.png";

const AboutSection = () => {
  return (
    <div>
      <section id="About">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <figure>
                <div class="image">
                  <img class="img-fluid" src={AboutImg} alt="" />
                </div>
                <div class="overlay"></div>
                <div class="contact-btn">
                  {/* <!-- <a class="btn btn-contact" href="#">Contact Us</a> --> */}
                  <div class="contact-btn-main">
                    {/* <Link to={"/contact"}>
                      <p class="btn-contact">Contact Us</p>
                    </Link> */}
                  </div>
                </div>
                
              </figure>
            </div>
            <div class="col-lg-7">
              <div class="main">
                <div class="warp">
                  <h2>
                    FAILURE IS THE CONDIMENT THAT GIVES{" "}
                    <span class="t-color">SUCCESS</span>
                  </h2>
                  <p>
                  I am a Front End developer with industry experience building websites. My role is to write and style the front-end components that meet the requirements of our mocks and fulfill l our user stories. I also monitor and process pull requests for production deployments. Technologies used: HTML5, CSS3, JavaScript, Bootstrap, MUI, React, MongoDB, Git, JQuery, Photoshop, Illustrator, Figma, Adobe xd.
                  </p>
                  <div class="dowwnload-cv-btn">
                    <a class="btn btn-cv" target='blank' href="https://flowcv.com/resume/ipifsve5ev" download>
                      DOWNLOAD CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
