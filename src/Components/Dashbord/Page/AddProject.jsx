import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";

const AddProject = () => {

  const [update, setUpdate] = useState("");
  const SucccessMassage = "Data Update Successful!";
  const UnSuccessfulMassage = "Data Update Error!";

  const todayDate = new Date().toISOString().slice(0, 10);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/project", data).then((res) => {
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
                  <Form className="justify-content-center"
                  onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Create Project Title</Form.Label>
                      <Form.Control type="text" placeholder="Enter Title" required   {...register("title", { required: true })}/>
                      <Form.Text className="text-muted">
                        Add here post title for your new post!
                      </Form.Text>
                      <Form.Label>Image Upload</Form.Label>
                      <Form.Control type="text" placeholder="Enter Image URL"  required   {...register("imgUrl", { required: true })} />
                      <Form.Text className="text-muted">
                        Input the url of Image!
                      </Form.Text>{" "}
                      <br></br>
                    </Form.Group>

                    <Button
                    variant="primary"
                    type="submit"
                    onClick={() =>
                      setValue('date',todayDate, {
                        shouldValidate: true,
                        shouldDirty: true,
                      })
                    }
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

export default AddProject;
