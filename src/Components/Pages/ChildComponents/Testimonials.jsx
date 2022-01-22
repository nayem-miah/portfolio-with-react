import React from "react";
import quoteImg from '../../Img/quote.png'
import testimonialPersonImg_1 from '../../Img/tes-1.jpg';
import testimonialPersonImg_2 from '../../Img/tes-2.jpg';
import testimonialPersonImg_3 from '../../Img/tes-3.jpg';
import testimonialPersonImg_4 from '../../Img/tes-4.jpg';

const Testimonials = () => {
  return (
    <section id="TESTIMONIALS">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 part-1">
            <div class="wrap">
              <h1> WORKING PROCESS</h1>
              <h2>
                HAPPY CLIENTS TO <span class="t-color">SAYS</span>{" "}
              </h2>
            </div>
          </div>
          <div class="col-lg-7 part-2">
            <div class="wrap">
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint
                Ratione Reprehenderit, Error Qui Enim Sit Ex Provident!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bd-example">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="3"
                  ></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="body"></div>
                    <div class="carousel-caption d-none d-md-block">
                      <div class="left">
                        <img
                          class="person img-fluid"
                          src={testimonialPersonImg_1}
                          alt=""
                        />
                      </div>
                      <div class="right">
                        <span>
                          <img src={quoteImg} alt="" />
                        </span>
                        <p>
                        Amit created a website for one one of my clients and was done in a very short period of time and came out professionally done.. Revisions done quickly with detailed feedback and would recommend him
                        </p>
                        <h3>Andy Kowalski MRSC, Loughborough, England, United Kingdom</h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item ">
                    <div class="body"></div>
                    <div class="carousel-caption d-none d-md-block">
                      <div class="left">
                        <img
                          class="person img-fluid"
                          src={testimonialPersonImg_2}
                          alt=""
                        />
                      </div>
                      <div class="right">
                        <span>
                          <img src={quoteImg} alt="" />
                        </span>
                        <p>
                        Amit is an excellent communicator - clear and concise. He answered all of my questions. He did what I wanted but better - giving me suggestions that would make my site faster and a better experience for the user. A true professional! I have already planned two other sites to have him create.
                        </p>
                        <h3>Marjana Djokic, Serbia</h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item ">
                    <div class="body"></div>
                    <div class="carousel-caption d-none d-md-block">
                      <div class="left">
                        <img
                          class="person img-fluid"
                          src={testimonialPersonImg_3}
                          alt=""
                        />
                      </div>
                      <div class="right">
                        <span>
                          <img src={quoteImg} alt="" />
                        </span>
                        <p>
                        Top knowledge of Javascript react coding! The design of the website was also delivered at the highest level! Highly recommended for everyone. The seller is a very responsible and talented developer!
                        </p>
                        <h3>Jack Metiyo Shina, NYC, USA</h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item ">
                    <div class="body"></div>
                    <div class="carousel-caption d-none d-md-block">
                      <div class="left">
                        <img
                          class="person img-fluid"
                          src={testimonialPersonImg_4}
                          alt=""
                        />
                      </div>
                      <div class="right">
                        <span>
                          <img src={quoteImg} alt="" />
                        </span>
                        <p>
                        Went above and beyond to make a great project. Great communication. Can deal with large projects. Amazing pricing as well. Look forward to working with Amit again! Auth0 pro as well!
                        </p>
                        <h3>Blessing Nkechi Ikiseh, Florida, United States</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
