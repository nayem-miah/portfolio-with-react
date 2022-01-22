import React from "react";
import SignatureImg from "../../Img/signature.png";

const Layout = () => {
  return (
    <div>
      <section id="layout">
        <div id="myBtn" class="overlay">
          <div class="wrap">
            <div class="icon">
              <span class="remove_btn">
                <i class="fas fa-times"></i>
              </span>
              <span class="arrow_btn">
                <i class="fas fa-arrow-left"></i>
              </span>
            </div>

            <img class="img-fluid" src="" alt="" />
            <p>
              I am a Front End developer with industry experience building
              websites. My role is to write and style the front-end components
              that meet the requirements of our mocks and fulfill l our user
              stories. I also monitor and process pull requests for production
              deployments. Technologies used: HTML5, CSS3, JavaScript,
              Bootstrap, MUI, React, MongoDB, Git, JQuery, Photoshop,
              Illustrator, Figma, Adobe xd. I have 5+ years of experience in web
              development and completed 200+ online & offline courses. Expert at
              converting PSD to responsive HTML design or WordPress theme,
              Customize any kind of WordPress theme & fixing any kind of
              WordPress bugs.
            </p>

            <div class="img-sin d-flex">
              <img class="img-fluid sing" src={SignatureImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
