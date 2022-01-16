import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to={"/contact"}>
                      <p class="btn-contact">Contact Us</p>
                    </Link>
                  </div>
                </div>
                <div id="contact_file_popUp" class="contact_file d-flex">
                  <div class="main ">
                    <div class="icon">
                      <span class="remove_btn_2">
                        <i class="fas fa-times"></i>
                      </span>
                      <span class="arrow_btn">
                        <i class="fas fa-arrow-left"></i>
                      </span>
                    </div>
                    <div class="text_group text-center">
                      <h2 class="head_text">Contact Form</h2>
                      <p class="text_1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis, vitae!
                      </p>
                    </div>
                    <div class="address d-flex">
                      <div class="part-1 w-50">
                        <h2>Local Address:</h2>
                        <p>
                          {" "}
                          Name : Amit Biswas <br />
                          Blog :{" "}
                          <a href="https://getmore7.com/">getmore7.com/</a>{" "}
                          <br />
                          Email : admin@goclick.us <br />
                          Mobile No: +8801814331350 <br />
                          Country Name : Bangladesh <br />
                        </p>
                      </div>
                      <div class="part-2 w-50">
                        <h2>Social Media:</h2>
                        <div class="icon-all">
                          <a
                            href="https://www.linkedin.com/in/amitbiswas-tm/"
                            target="blank"
                          >
                            <i class="fab fa-linkedin"></i>
                          </a>
                          <a
                            href="https://web.facebook.com/alvida120/"
                            target="blank"
                          >
                            <i class="fab fa-facebook-square"></i>
                          </a>
                          <a
                            href="https://www.instagram.com/alvida_amit/"
                            target="blank"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a
                            href="https://twitter.com/amitgoclick"
                            target="blank"
                          >
                            <i class="fab fa-twitter-square"></i>
                          </a>
                        </div>
                      </div>
                    </div>
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
                    Spend more time focusing on the important aspects of your
                    business. Turn to McCartney HR LLC in Brooklyn, NY for HR
                    solutions. As an advanced virtual HR company, we are
                    offering online HR systems that can be customized depending
                    on your business needs.
                  </p>
                  <div class="dowwnload-cv-btn">
                    <a class="btn btn-cv" href="./pdf/Profile.pdf" download>
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
