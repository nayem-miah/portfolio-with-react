import React, { useContext } from "react";
import logo from "../../Img/logo-2.png";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import useAuth from "../../../Context/useAuth";
import { Link } from "react-router-dom";

const DashBordMenu = () => {
  const {signOutGoogle, user, signInGoogle}=useAuth()
  return (
    <div>
      <Navbar className="d-block" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <Link to={"/dashbord"}>
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <hr />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-block">
            <Link className="nav-link" to={"/dashbord"}>
              Home
            </Link>
            <NavDropdown
              title="Blog"
              id="collasible-nav-dropdown"
              className="dashBord-dropdown"
            >
              <Link className="dropdown-item" to={'/create-blog-post'}>
                Create Blog Post
              </Link>
              <Link className="dropdown-item" to={"/all-blog-post"}>
                All Blog Post
              </Link>
            </NavDropdown>
            <Link className="nav-link" to={"/catagory"}>
              Catagory
            </Link>
            <NavDropdown
              title="Slider"
              id="collasible-nav-dropdown"
              className="dashBord-dropdown"
            >
              <Link className="dropdown-item" to={"/add-slider"}>
                Add Slider
              </Link>
              <Link className="dropdown-item" to={"/remove-slider"}>
                Remove Slider
              </Link>
            </NavDropdown>
            <NavDropdown
              title="Working Section"
              id="collasible-nav-dropdown"
              className="dashBord-dropdown"
            >
              <Link className="dropdown-item" to={"/add-section"}>
                Add Section
              </Link>
              <Link className="dropdown-item" to={"/remove-section"}>
                Remove Section
              </Link>
            </NavDropdown>
            <NavDropdown
              title="Project"
              id="collasible-nav-dropdown"
              className="dashBord-dropdown"
            >
              <Link className="dropdown-item" to={"/add-project"}>
                Create Project
              </Link>
              <Link className="dropdown-item" to={"/all-project"}>
                All Project
              </Link>
             
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        
       {
         user.email ?  <Button onClick={signOutGoogle} className="mt-4">Log Out</Button> :  <Button onClick={signInGoogle} className="mt-4">Log in</Button>
       }
      
      </Navbar>

      
    </div>
  );
};

export default DashBordMenu;
