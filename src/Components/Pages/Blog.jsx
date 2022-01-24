import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./ChildComponents/Header";
import AuthorImg from "../../Components/Img/single-blog/author1.png";
import NewsLetter from "./ChildComponents/NewsLatter";
import Footer from "./ChildComponents/Footer";
import IntroSection from "./ChildComponents/IntroSection";
import SingleBlog from "./SingleBlog";
import SingleBlogPost from "./ChildComponents/BlogPostData";
import BlogPostData from "./ChildComponents/BlogPostData";
import axios from "axios";
import SideBar from "./ChildComponents/SideBar";

const Blog = () => {
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
      {/* Header Section */}
      <Header></Header>

      {/* <!-- Intro Section--> */}
      <IntroSection homeLink='Home' siteLink='Blog'></IntroSection>

      {/* <!-- Blog Item --> */}

      <section class="blog_item blog-page">
        <div class="container">
          <div class="row section-1">
            <div class="col-lg-8 part-1">




              {data.map((data) => (
                <BlogPostData key={data._id} data={data}></BlogPostData>
              ))
              
              
              }

              <div class="pagination ">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                          <i class="fal fa-arrow-left"></i>
                        </span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">
                          <i class="fal fa-arrow-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <SideBar></SideBar>
            <div class="shape">
              <img src="./img/single-blog/inner-bg1.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

   

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Blog;
