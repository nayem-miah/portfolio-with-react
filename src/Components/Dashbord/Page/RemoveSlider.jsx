import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";

const RemoveSlider = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState("");
  const UnSuccessfulMassage = "Slider Delete Successful!";


  useEffect(() => {
    const url = "http://localhost:5000/slider";
    axios.get(url).then((res) => {
      setData(res.data);
     
    });
  }, []);

  const deleteHendel = (id) => {

    const url = `http://localhost:5000/slider/${id}`;

    axios.delete(url).then((res) => {
      if (res.data.deletedCount == 1) {
        const reminingData = data.filter((data) => data._id !== id);
        setData(reminingData);
        setUpdate(UnSuccessfulMassage);
      }
    });
  };
  return (
    <>
      <div className=" dashBord ">
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
              <div className="child-content ClassBody ">
                {data.map((data) => (
                  <div className="wrap sliderClass">
                    <div className="img-box text-center overlay">
                      <img src={data.ImageUrl} alt="" />
                      <Button
                        className="btn btn-danger btn-sm mt-4"
                        onClick={() => deleteHendel(data._id)}
                      >
                        Remove Slider
                      </Button>
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

export default RemoveSlider;
