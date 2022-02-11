import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import DashBordMenu from "../ChildComponent/DashBordMenu";
import axios from "axios";

const AddSlider = () => {
  const [update, setUpdate] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const SucccessMassage = "Data Update Successful!";
  const UnSuccessfulMassage = "Data Update Error!";

  const onSubmit = (data) => {
    axios.post("https://amitjs.herokuapp.com/slider", data).then((res) => {});
    reset();
    if (data) {
      setUpdate(SucccessMassage);
    } else {
      setUpdate(UnSuccessfulMassage);
    }
  };
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
                  <p className="text-success lead font-weight-bold">{update}</p>
                </Col>
                <Col className="">
                  <Link to={"/"} target={"blank"}>
                    <Button>Visit Site</Button>
                  </Link>
                </Col>
              </Row>
            </div>
            <div className="main-content">
              <div className="child-content d-flex justify-content-center">
                <div className="w-50 ">
                  <Form
                    className="justify-content-center"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Image Upload For Slider!</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Image URL"
                        required
                        {...register("ImageUrl")}
                      />
                      <Form.Text className="text-muted">
                        Input the url of Image!
                      </Form.Text>{" "}
                      <br></br>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddSlider;
