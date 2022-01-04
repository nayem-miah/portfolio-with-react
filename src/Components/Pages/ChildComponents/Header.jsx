import React from "react";
import { Link } from "react-router-dom";

import logo from '../../Img/logo-2.png';

const Header = () => {
  return (
      <header class="">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <Link class="navbar-brand" to='/'>
              <img src={logo} alt="" />
            </Link>
            <Link to='/'></Link>
           
            <div class="login-btn-img d-none">
              <img
                class="btnClass-1 d-none"
                src=''
                alt=""
              />
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
                  <a class="nav-link " href="">
                    {" "}
                    About Us{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#experinece">
                    Experinece{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#SERVICES">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#portfolio">
                    Project
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#blog">
                    Work
                  </a>
                </li>
                <li class="login-btn animate__animated animate__rubberBand">
                  <p class="btnClass">It's Me</p>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
  );
};

export default Header;
