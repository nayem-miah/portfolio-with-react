import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";

const AllProject = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState("");
  const UnSuccessfulMassage = "Slider Delete Successful!";

  React.useEffect(() => {
    axios.get("http://localhost:5000/all-blog-post").then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteData = (id) => {
    const URL = `http://localhost:5000/all-blog-post/${id}`;

    axios.delete(URL).then((res) => {
      console.log(res);
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
            <div className="main-content text-center">
              <h4 className="pt-3">Total data found : {data.length}</h4>


              {
                data.map((data)=>(
                   <div className="child-content ClassBody">
                <div className="wrap mt-3">
                  <div className="img-box ">
                    <img src={data.imgUrl} alt="" />
                    <Button
                        className="btn btn-danger btn-sm mt-4"
                        onClick={() => deleteData(data._id)}
                      >
                        Remove Slider
                      </Button>
                  </div>
                 
                </div>
              </div>
                ))
              }
             
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AllProject;
