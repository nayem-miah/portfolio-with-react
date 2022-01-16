import React from "react";
import "../Dashbord/Dashbord.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import DashBordMenu from "./ChildComponent/DashBordMenu";
import { Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className=" dashBord">
      <Row>
        <Col md={3} sm={12} className="mt-4">
          <DashBordMenu></DashBordMenu>
        </Col>
        <Col md={9} sm={12} className="content">
          <div className="headerSpace text-center">
            <Row className="d-flex align-items-center h-100">
              <Col>
                <p className="text-light">Show Error or Success massage</p>
              </Col>
              <Col className="">
                <Link to={"/"}>
                  <Button>Visit Site</Button>
                </Link>
              </Col>
            </Row>
          </div>
          <div className="child-content"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashbord;
