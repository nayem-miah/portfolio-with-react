import React, { useEffect, useState } from "react";
import Header from "../Header";
import BlogImg from "../Img/signature.png";
import HeroImg from "../Img/Design.png";
import AboutImg from "../Img/about1.png";
import HomePageExperinece from "./ChildComponents/HomePageExperinece";
import SliderImg from "./ChildComponents/SliderImg";

const Home = () => {

  // For experince -----
  const [experince, setExperince] = useState([]);
  useEffect(() => {
    fetch("./DataBase/experinece.JSON")
      .then((res) => res.json())
      .then((data) => setExperince(data));
  }, []);


  


  return (
    <>
      {/* Header Bar */}

      <Header></Header>

      {/* Header Bar End */}

      {/* <!-- Layout --> */}

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

            <img class="img-fluid" src="./img/logo-2.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              ratione reprehenderit, error qui enim sit ex provident iure,
              dolor, nulla eaque delectus, repudiandae commodi. Velit assumenda
              odit quisquam at, error suscipit unde, necessitatibus ipsum
              ratione excepturi ducimus labore, totam dolorem.
            </p>

            <div class="img-sin d-flex">
              <img class="img-fluid sing" src={BlogImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Hero Bar --> */}
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

      {/* About Us Start */}

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
                    <p class="btn-contact">Contact Us</p>
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

      {/* <!-- EXPERIENCE --> */}

      <section id="experinece">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 part-1">
              <div class="wrap">
                <h1>MY EXPERIENCE</h1>
                <h2>
                  EXPERIENCE AND <span class="t-color">SKILL</span>{" "}
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
          <div class="row box">
            {/* Experince Section Start Here... */}

            {experince.map((experince) => (
              <HomePageExperinece
                key={experince._id}
                experince={experince}
              ></HomePageExperinece>
            ))}

            {/* Experince section End Here.... */}

            {/* <!-- percent_work Start --> */}

            <section id="percent_work">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <div class="percent_work">
                      <div class="card-1">
                        <div class="box">
                          <div class="percent">
                            <svg>
                              <circle cx="70" cy="70" r="70"></circle>
                              <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                              <h2>
                                90<span>%</span>
                              </h2>
                            </div>
                            <h2 class="text-pro">
                              Html <br /> Css
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="percent_work">
                      <div class="card-2">
                        <div class="box">
                          <div class="percent">
                            <svg>
                              <circle cx="70" cy="70" r="70"></circle>
                              <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                              <h2>
                                95<span>%</span>
                              </h2>
                            </div>
                            <h2 class="text-pro">Bootstrap</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="percent_work">
                      <div class="card-3">
                        <div class="box">
                          <div class="percent">
                            <svg>
                              <circle cx="70" cy="70" r="70"></circle>
                              <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                              <h2>
                                80<span>%</span>
                              </h2>
                            </div>
                            <h2 class="text-pro">JavaScript</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="percent_work">
                      <div class="card-4">
                        <div class="box">
                          <div class="percent">
                            <svg>
                              <circle cx="70" cy="70" r="70"></circle>
                              <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                              <h2>
                                90<span>%</span>
                              </h2>
                            </div>
                            <h2 class="text-pro">React Js</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* <!-- percent_work End --> */}

            {/* <!-- Service --> */}

        <section id="SERVICES">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 part-1">
                        <div class="wrap">
                            <h1>WHAT WE DO</h1>
                            <h2>SERVICES AND <span class="t-color">SOLUTIONS</span> </h2>
                        </div>
                    </div>
                    <div class="col-lg-7 part-2">
                        <div class="wrap">
                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit,
                                Error Qui Enim Sit Ex Provident!</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card text-center">
                            <div>
                                <i class="fas fa-ruler-combined"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">DESIGN PRINCIPALES</h4>
                                <p class="card-text">
                                    Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant
                                    To Answer Questions
                                </p>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card text-center">
                            <div>
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">UNIQUE VALUES</h4>
                                <p class="card-text">
                                    Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant
                                    To Answer Questions
                                </p>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card text-center">
                            <div>
                                <i class="fas fa-paste"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">STYLE COMPONENTS</h4>
                                <p class="card-text">
                                    Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant
                                    To Answer Questions
                                </p>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*  */}

        {/* portfolio Start */}

        <section id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 part-1">
                        <div class="wrap">
                            <h1> WORKING PROCESS</h1>
                            <h2>LASTET WORKING <span class="t-color">PROJECT</span> </h2>
                        </div>
                    </div>
                    <div class="col-lg-6 part-2">
                        <div class="wrap">
                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit,
                                Error Qui Enim Sit Ex Provident!</p>
                        </div>

                    </div>
                    <div class="col-lg-2 part-3">


                    </div>
                </div>
                <div class="row">
                    <div class="col">


                     <SliderImg></SliderImg>
                    </div>
                </div>
            </div>
        </section>


          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
