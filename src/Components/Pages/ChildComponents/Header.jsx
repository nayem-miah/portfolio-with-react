import React, { useState } from "react";
import { StickyNav } from "react-js-stickynav";
import AutohorImg from "../../Img/nayem.png";
import SignatureImg from "../../Img/signature.png";
import logo from "../../Img/2.png";
import {Link, NavLink} from 'react-router-dom'



const Header = () => {
  // For layout section
  const [active, setActive] = useState("false");

  const clickFunction = () => {
    setActive(!active);
  };
  

  return (
    <>

      <StickyNav length="40">
        <header class="">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <Link class="navbar-brand logo" to="/">
                <img className="logo" src={logo} alt="" />
              </Link>
  

              <div class="login-btn-img d-none">
                <img class="btnClass-1 d-none" src="" alt="" />
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item current ">
                    <Link className="nav-link" to={"/"}>
                      Home
                    </Link>
                 
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to={"/service"}>
                      Service
                    </Link>
                  
                   
                  </li>
             
                  <li class="nav-item">
                    <Link className="nav-link" to={"/blog"}>
                      Blog
                    </Link> 
             
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to={"/contact"}>
                      Contact
                    </Link>
                   
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to={"/dashbord"}>
                      Dashbord
                    </Link>
                   
                  </li>
                  <li class="login-btn animate__animated animate__rubberBand">
                    <p onClick={clickFunction} class="btnClass">
                      It's Me
                    </p>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </StickyNav>

 

      <section id="layout">
        <div
          id="myBtn"
          className={`overlay ${active == false ? "active" : null}`}
        >
          <div class="wrap">
           <div>
           <div class="icon">
              <span onClick={clickFunction} className="remove_btn">
                <i class="fas fa-times"></i>
              </span>
              <span class="arrow_btn">
                <i class="fas fa-arrow-left"></i>
              </span>
              <img class="img-fluid logo layoutImg" src={logo} alt="" />
            </div>

            
            <p>
              I am a Front End developer with industry experience building
              websites. My role is to write and style the front-end components
              that meet the requirements of our mocks and fulfill l our user
              stories. I have 5+ years of experience in web
              development and completed 200+ online & offline courses.
            </p>
            <div class="Social">
                  <span class="text">Follow Me : </span>
                  <a target='blank' href="https://web.facebook.com/nayemmiahcu">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a target='blank' href="https://www.linkedin.com/in/nayem-miah/">
                  <i class="fab fa-linkedin"></i>
                  </a>
                  <a target='blank' href="https://twitter.com/NaeemIslamNeha1">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                  <a target='blank' href="https://www.instagram.com/nayemmiah.cu/">
                    <i class="fab fa-instagram"></i>
                  </a>
                  
                </div>
           </div>

            

            <div class="img-sin d-flex">
              <img class="img-fluid amit" src={AutohorImg} alt="" />
              <img class="img-fluid sing" src={SignatureImg} alt="" />
            </div>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
