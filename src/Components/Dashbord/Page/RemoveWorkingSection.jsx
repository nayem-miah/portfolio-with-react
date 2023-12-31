import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";

const RemoveWorkingSection = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState("");
  const UnSuccessfulMassage = "Slider Delete Successful!";

  // Load Blog Post from Server ....

  React.useEffect(() => {
    axios.get("https://amitjs.herokuapp.com/work").then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteData = (id) => {
    const URL = `https://amitjs.herokuapp.com/work/${id}`;

    axios.delete(URL).then((res) => {
      if (res.data.deletedCount == 1) {
        const remainingID = data.filter((data) => data._id !== id);
        setData(remainingID);
        setUpdate(UnSuccessfulMassage);
      }
    });
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
              <div className="child-content ">
                {data.map((data) => (
                  <div className="wrap">
                    <div className="text-box pl-5">
                      <p className="font-weight-bold">{data.title}</p>
                      <p>{data.date}</p>
                      <p>{data.description}....</p>
                      <div className="mt-2">
                        {/* ===== */}
                        <Button
                          className="btn-sm"
                          onClick={() => deleteData(data._id)}
                          variant="danger"
                        >
                          Remove Post
                        </Button>
                        <Button className="ml-2 btn-sm">Edit Post</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RemoveWorkingSection;
