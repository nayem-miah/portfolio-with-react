import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashBordMenu from "../ChildComponent/DashBordMenu";

const RemoveSlider = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const url = "http://localhost:5000/slider";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteHendel =(id)=>{
      const url = `http://localhost:5000/slider/${id}`;
      axios.delete(url)
      .then(res=>{
        if(res.data.deletedCount==1){
          const reminingData= data.filter((data)=>data._id!==id);
            setData(reminingData)
        }
      })
  }
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
            <div className="child-content sliderClassBody">
              {data.map((data) => (
                <div className="wrap sliderClass">
                  <div className="img-box text-center">
                    <img src={data.ImageUrl} alt="" />
                    {/* ============== Modal ==============*/}
                    <button
                            type="button"
                            class="btn btn-danger btn-sm mt-4"
                            data-toggle="modal"
                            data-target="#exampleModalCentered"
                          >
                            Remove Post
                          </button>

                          {/* <!-- Modal --> */}
                          <div
                            class="modal"
                            id="exampleModalCentered"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalCenteredLabel"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalCenteredLabel"
                                  >
                                   Remove Slider!
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  Be careful! Are you want to remove this
                                  content?
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary btn-sm"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-danger btn-sm"
                                    data-dismiss="modal"
                                    onClick={()=>deleteHendel(data._id)}
                                  >
                                    Remove Post
                                  </button>
                                </div>
                              </div>
                            </div>
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

export default RemoveSlider;
