import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";
const AddWorkingSection = () => {
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
            <div className="child-content d-flex justify-content-center">
              <div className="w-50 ">
                <Form className="justify-content-center">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Create Position Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                    <Form.Text className="text-muted">
                      Add here post title for your new post!
                    </Form.Text>
                    <Form.Label>Date of Join</Form.Label>
                    <Form.Control type="text" placeholder="Join Date" />
                    <Form.Text className="text-muted">
                      Input the join date!
                    </Form.Text>{" "}
                    <br></br>
                    <textarea
                      class="w-100 massage p-2"
                      name=""
                      id=""
                      placeholder="Write your Description!"
                      cols="20"
                      rows="5"
                      spellcheck="false"
                    ></textarea>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddWorkingSection;
