import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";
const AddWorkingSection = () => {
  const [update, setUpdate] = useState("");
  const SucccessMassage = "Data Update Successful!";
  const UnSuccessfulMassage = "Data Update Error!";
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/work").then((res) => {});
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/work", data).then((res) => {
      console.log(res);
    });
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
                  <p className="text-success">{update}</p>
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
                  <Form className="justify-content-center"
                  onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Create Position Title</Form.Label>
                      <Form.Control
                        required
                        {...register("title", { required: true })}
                        type="text"
                        placeholder="Enter Title"
                      />
                      <Form.Text className="text-muted">
                        Add here post title for your new post!
                      </Form.Text>
                      <Form.Label>Date of Join</Form.Label>
                      <Form.Control
                        required
                        {...register("date", { required: true })}
                        type="text"
                        placeholder="Join Date"
                      />
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
                        required
                        {...register("description", { required: true })}
                      ></textarea>
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => setValue()}
                    >
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

export default AddWorkingSection;
