import React from "react";
import logo from "../../Img/logo-2.png";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const DashBordMenu = () => {
  return (
    <>
      <Navbar className="d-block" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <Link to={""}>
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <hr />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-block">
            <Link className="nav-link" to={""}>
              Home
            </Link>
            <NavDropdown
              title="Blog"
              id="collasible-nav-dropdown"
              className="dashBord-dropdown"
            >
              <Link className="dropdown-item" to={""}>
                Create Blog Post
              </Link>
              <Link className="dropdown-item" to={""}>
                All Blog Post
              </Link>
              <Link className="dropdown-item" to={""}>
                Remove Blog Post
              </Link>
              <Link className="dropdown-item" to={""}>
                Edit Blog Post
              </Link>
            </NavDropdown>
            <Link className="nav-link" to={""}>
              Catagory
            </Link>
            <NavDropdown
              title="Slider"
              id="collasible-nav-dropdown"
              className="dashBord-dropdown"
            >
              <Link className="dropdown-item" to={""}>
                Add Slider
              </Link>
              <Link className="dropdown-item" to={""}>
                Remove Slider
              </Link>
              <Link className="dropdown-item" to={""}>
                Edit Slider
              </Link>
            </NavDropdown>
            <NavDropdown
              title="Working Section"
              id="collasible-nav-dropdown"
              className="dashBord-dropdown"
            >
              <Link className="dropdown-item" to={""}>
                Add Section
              </Link>
              <Link className="dropdown-item" to={""}>
                Remove Section
              </Link>
            </NavDropdown>
            <NavDropdown
              title="Project"
              id="collasible-nav-dropdown"
              className="dashBord-dropdown"
            >
              <Link className="dropdown-item" to={""}>
                Add Project
              </Link>
              <Link className="dropdown-item" to={""}>
                Remove Project
              </Link>
              <Link className="dropdown-item" to={""}>
                Edit Project
              </Link>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        
        <Button className="mt-4">Log Out</Button>
      
      </Navbar>

      
    </>
  );
};

export default DashBordMenu;
