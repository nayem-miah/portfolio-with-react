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
                Full-Stack Web Developer <br /> With <span className='t-color'>React NodeJS</span>
                </h2>
                <p>
                Full Stack Web and Mobile Developer specializing in front-end and back-end development. Experienced with all stages of the development cycle for dynamic websites. Well versed in numerous programming languages JavaScriptES6 Nodejs, structured language HTML5 CSS3, Libraries REACT-JS With MongoDB Database.
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
                  <span class="text">Follow Me : </span>
                  <a target='blank' href="https://www.facebook.com/amitbiswas1994">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a target='blank' href="https://www.linkedin.com/in/amitbiswas-tm/">
                  <i class="fab fa-linkedin"></i>
                  </a>
                  <a target='blank' href="https://twitter.com/amitgoclick">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                  <a target='blank' href="https://www.instagram.com/alvida_amit/">
                    <i class="fab fa-instagram"></i>
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