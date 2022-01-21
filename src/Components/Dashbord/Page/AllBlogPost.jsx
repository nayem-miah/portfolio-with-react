import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllBlogDataChild from "../ChildComponent/AllBlogDataChild";
import DashBordMenu from "../ChildComponent/DashBordMenu";
import axios from "axios";
const AllBlogPost = () => {
  const [data, setData] = useState([]);

  // Load Blog Post from Server ....

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
                  {/* <p className="text-light">Show Error or Success massage</p> */}
                </Col>
                <Col className="">
                  <Link to={"/"} target={"blank"}>
                    <Button>Visit Site</Button>
                  </Link>
                </Col>
              </Row>
            </div>
            <div className="main-content">
              <div className="child-content">
                {
                  data.map((data) => (
                    <div className="wrap">
                      <div className="img-box ">
                        <img src={data.ImgUrl} alt="" />
                      </div>
                      <div className="text-box pl-5">
                        <p className="font-weight-bold">{data.BlogTitle}</p>
                        <p>{data.date}</p>
                        <p>{data.Description}....</p>
                        <div className="mt-2">
                         

                          {/* ===== */}
                          <Button className="btn-sm"
                          onClick={() => deleteData(data._id)}
                          variant="danger"
                        >
                          Remove Post
                        </Button>
                          <Button className="ml-2 btn-sm">Edit Post</Button>
                        </div>
                      </div>
                    </div>
                  ))
                  // data.map((data)=><AllBlogDataChild data={data} key={data._id}></AllBlogDataChild>)
                }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AllBlogPost;
