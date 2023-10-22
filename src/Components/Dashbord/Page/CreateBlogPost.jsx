import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";
import { useForm } from "react-hook-form";
import { CKEditor } from "ckeditor4-react";

import axios from "axios";
const CreateBlogPost = () => {
  const [update, setUpdate] = useState("");
  const [data, setData] = useState("");
  console.log(data);

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

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {});
  // }, []);

  const onSubmit = (data) => {
    axios
      .post("https://amitjs.herokuapp.com/all-blog-post", data)
      .then((res) => {});
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
                  {/* <Link to={"/"} target={"blank"}>
                    <Button>Visit Site</Button>
                  </Link> */}
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
                      <Form.Label>Create Blog Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        required
                        {...register("BlogTitle", {
                          Data: "value",
                          required: true,
                        })}
                      />
                      <Form.Text className="text-muted">
                        Add here post title for your new post!
                      </Form.Text>
                      <Form.Label>Image Upload</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Image URL"
                        required
                        {...register("ImgUrl", { required: true })}
                      />
                      <Form.Text className="text-muted">
                        Input the url of Image!
                      </Form.Text>{" "}
                      <br></br>
                      <CKEditor
                        onChange={({ editor }) => {
                          setData(editor.getData());
                        }}
                      />
                      {/* <Form.Label>Intro Section</Form.Label>
                      <textarea
                        class="w-100 massage p-2"
                        name=""
                        id=""
                        placeholder="Write your massage"
                        cols="10"
                        rows="2"
                        spellcheck="false"
                        required
                        {...register("IntroSection", { required: true })}
                      ></textarea> */}
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => {
                        setValue("date", todayDate);
                        setValue("data", data);
                      }}
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

export default CreateBlogPost;
