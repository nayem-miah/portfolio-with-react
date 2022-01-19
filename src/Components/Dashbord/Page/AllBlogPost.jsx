
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllBlogDataChild from "../ChildComponent/AllBlogDataChild";
import DashBordMenu from "../ChildComponent/DashBordMenu";
import axios from "axios";
const AllBlogPost = () => {
  const [data, setData] = useState([]);

  // Load Blog Post from Server ....

const URL = 'http://localhost:5000/all-blog-post';

React.useEffect(()=>{
  axios.get(URL).then((res)=>{
    setData(res.data)
  })
},[])
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
            <div className="child-content">
              {/* Dynamic content here... */}


              {
                data.map((data)=><AllBlogDataChild data={data} key={data._id}></AllBlogDataChild>)
                
              }
              
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AllBlogPost;
