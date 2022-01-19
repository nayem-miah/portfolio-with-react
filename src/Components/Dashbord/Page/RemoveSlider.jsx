import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";

const RemoveSlider = () => {
  return (
    <>
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
                  <Link to={"/"} target={"blank"}>
                    <Button>Visit Site</Button>
                  </Link>
                </Col>
              </Row>
            </div>
            <div className="child-content">
              <div className="wrap ">
                <div className="img-box">
                  <img src="" alt="" />
                  <Button variant="danger">Remove Slider</Button>
                </div>
              </div>
              <div className="wrap ">
                <div className="img-box">
                  <img src="" alt="" />
                  <Button variant="danger">Remove Slider</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RemoveSlider;
