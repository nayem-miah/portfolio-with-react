import React from "react";
import quoteImg from '../../Img/quote.png'
import testimonialPersonImg from '../../Img/testimonial1.jpg';

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
                          src={testimonialPersonImg}
                          alt=""
                        />
                      </div>
                      <div class="right">
                        <span>
                          <img src={quoteImg} alt="" />
                        </span>
                        <p>
                          Gilroy is a great and super-professional service
                          provider, which brought new technologes, new
                          methodology, and a fresh perspective to our project
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
                          src={testimonialPersonImg}
                          alt=""
                        />
                      </div>
                      <div class="right">
                        <span>
                          <img src={quoteImg} alt="" />
                        </span>
                        <p>
                          Gilroy is a great and super-professional service
                          provider, which brought new technologes, new
                          methodology, and a fresh perspective to our project
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
                          src={testimonialPersonImg}
                          alt=""
                        />
                      </div>
                      <div class="right">
                        <span>
                          <img src={quoteImg} alt="" />
                        </span>
                        <p>
                          Gilroy is a great and super-professional service
                          provider, which brought new technologes, new
                          methodology, and a fresh perspective to our project
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
                          src={testimonialPersonImg}
                          alt=""
                        />
                      </div>
                      <div class="right">
                        <span>
                          <img src={quoteImg} alt="" />
                        </span>
                        <p>
                          Gilroy is a great and super-professional service
                          provider, which brought new technologes, new
                          methodology, and a fresh perspective to our project
                        </p>
                        <h3>Jack Metiyo Shina, NYC, USA</h3>
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
