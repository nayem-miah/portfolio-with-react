import React from 'react';
import HeroImg from "../../Img/Design.png";

const HeroBar = () => {
    return (
        <div>
            <section id="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 part-1">
              <div class="wrapper">
                <h2 class="animate__animated animate__bounce">
                  Great Solutions To <br /> Design Your Website
                </h2>
                <p>
                  Here is the opportunity to build-up your website. Graphical
                  components, structural advices, plans and many more. Check out
                  our services and make your company outstanding.
                </p>
                <div class="btnClass">
                  <a class="btn my-btn-1" href="#">
                    {" "}
                    Get Started
                  </a>
                  <a class="btn my-btn-2" href="#">
                    {" "}
                    Watch Demo
                  </a>
                </div>
                <div class="Social">
                  <span class="text">Follow Us : </span>
                  <a href="#">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/amitbiswas-tm/">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 part-2">
              <img class="img-fluid" src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default HeroBar;