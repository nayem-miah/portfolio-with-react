import React, { useContext } from "react";
import logo from "../../Img/logo-2.png";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import useAuth from "../../../Context/useAuth";
import { Link } from "react-router-dom";

const DashBordMenu = () => {
  // const { signOutGoogle, user, signInGoogle } = useAuth();
  return (
    <div>
      <Navbar className="d-block" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <hr />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-block">
            <Link className="nav-link" to={"/dashbord"}>
              <i class="fas fa-home"></i> <span> &nbsp; Home</span>
            </Link>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
             <i class="fab fa-blogger"></i> &nbsp; Blog
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={"/create-blog-post"}>
                <i class="fas fa-blog"></i>&nbsp; <span> Create Blog Post</span>
              </Link>
              <Link className="dropdown-item" to={"/all-blog-post"}>
                <i class="fas fa-dumpster"></i>&nbsp; <span>All Blog Post</span>
              </Link>
              </div>
            </li>

            

            <Link className="nav-link" to={"/blog"}>
            <i class="fas fa-cube"></i>&nbsp;  Catagory
            </Link>


            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
             <i class="fas fa-spider"></i>&nbsp;  Slider
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={"/add-slider"}>
                <i class="fas fa-sliders-h"></i>&nbsp; <span>Add Slider</span>
              </Link>
              <Link className="dropdown-item" to={"/remove-slider"}>
                <i class="far fa-trash-alt"></i>&nbsp; <span>Remove Slider</span>
              </Link>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
             <i class="fas fa-network-wired"></i>&nbsp;  Working Section
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={"/Add-Working-Section"}>
                <i class="fas fa-file-word"></i>&nbsp; <span>Add Section</span>
              </Link>
              <Link className="dropdown-item" to={"/remove-working-section"}>
                <i class="far fa-trash-alt"></i>&nbsp; <span> Remove Section</span>
              </Link>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              <i class="fab fa-r-project"></i> &nbsp; Project
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={"/add-project"}>
                <i class="fas fa-project-diagram"></i>{" "}&nbsp;
                <span> Create Project</span>
              </Link>
              <Link className="dropdown-item" to={"/project"}>
                <i class="fab fa-r-project"></i>&nbsp; All Project
              </Link>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              <i class="fas fa-comment"></i> &nbsp; Comment
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={"/blog"}>
              <i class="fas fa-comments"></i>&nbsp; All Comment
              </Link>
              </div>
            </li>

          </Nav>
        </Navbar.Collapse>

        {/* {user.email ? (
          <Button onClick={true} className="mt-4">
            Log Out
          </Button>
        ) : (
          <Button onClick={true} className="mt-4">
            Log in
          </Button>
        )} */}
      </Navbar>
    </div>
  );
};

export default DashBordMenu;
