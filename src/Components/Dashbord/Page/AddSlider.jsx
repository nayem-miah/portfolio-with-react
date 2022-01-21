import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import DashBordMenu from "../ChildComponent/DashBordMenu";
import axios from "axios";

const AddSlider = () => {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data)=>{
      console.log(data);
      axios.post('http://localhost:5000/slider',data)
      .then(res=>{
        
      })
  }
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
          <div className="main-content">
          <div className="child-content d-flex justify-content-center">
              <div className="w-50 ">
                <Form className="justify-content-center"  onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Upload For Slider!</Form.Label>
                    <Form.Control type="text" placeholder="Enter Image URL" {...register("ImageUrl")}/>
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
