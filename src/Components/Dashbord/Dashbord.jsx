import React, { useState } from "react";
import "../Dashbord/Dashbord.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import DashBordMenu from "./ChildComponent/DashBordMenu";
import { Link } from "react-router-dom";

const Dashbord = () => {
  const [update, setUpdate] = useState("");
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
              <p className="text-success lead font-weight-bold">{update}</p>
              </Col>
              <Col className="">
                <Link to={"/"} target={'blank'}>
                  <Button>Visit Site</Button>
                </Link>
              </Col>
            </Row>
          </div>
          <div className="main-content">
          <div className="child-content"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashbord;
