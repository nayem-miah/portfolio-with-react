import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StickyNav } from "react-js-stickynav";
import "react-js-stickynav/dist/index.css";
import AutohorImg from "../../Img/amit.jpg";
import SignatureImg from "../../Img/signature.png";
import logo from "../../Img/logo-2.png";

const Header = () => {
  // For layout section
  const [active, setActive] = useState("false");

  const clickFunction = () => {
    setActive(!active);
  };
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.6s;
          z-index: 99;
          height: 120px;
          background: #0b032d;
        }
        .scrollNav {
          height: 100px;
          background: #05001a;
          border-bottom: 3px solid #00fff0;
          box-shadow: 2px 4px 32px #00ffee83;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    );
  };

  return (
    <>
      {style()}
      <StickyNav length="40">
        <header class="">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <Link class="navbar-brand" to="/">
                <img src={logo} alt="" />
              </Link>
              <Link to="/"></Link>

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
                    <Link className="nav-link" to={"/project"}>
                      Project
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

      {/* Layout */}

      <section id="layout">
        <div
          id="myBtn"
          className={`overlay ${active == false ? "active" : null}`}
        >
          <div class="wrap">
            <div class="icon">
              <span
                onClick={clickFunction}
                className={`remove_btn ${active == false ? null : active}`}
              >
                <i class="fas fa-times"></i>
              </span>
              <span class="arrow_btn">
                <i class="fas fa-arrow-left"></i>
              </span>
            </div>

            <img class="img-fluid" src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              ratione reprehenderit, error qui enim sit ex provident iure,
              dolor, nulla eaque delectus, repudiandae commodi. Velit assumenda
              odit quisquam at, error suscipit unde, necessitatibus ipsum
              ratione excepturi ducimus labore, totam dolorem.
            </p>

            <div class="img-sin d-flex">
              <img class="img-fluid amit" src={AutohorImg} alt="" />
              <img class="img-fluid sing" src={SignatureImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;