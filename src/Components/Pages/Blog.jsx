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
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Blog = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size =5;

  // Load Blog Post from Server ....

  const URL = `http://localhost:5000/all-blog-post?page=${page}&&size=${size}`;

  React.useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data.BlogData);
      const count = res.data.count;
      const pageNumber = Math.ceil(count / size);
      window.scrollTo(0, 0);
      setPageCount(pageNumber);
    });
  }, [page]);


  return (
    <>
      {/* Header Section */}
      <Header></Header>

      {/* <!-- Intro Section--> */}
      <IntroSection homeLink="Home" siteLink="Blog"></IntroSection>

      {/* <!-- Blog Item --> */}

      <section class="blog_item blog-page">
        <div class="container">
          <div class="row section-1">
            <div class="col-lg-8 part-1">
              {data.map((data) => (
                <BlogPostData key={data._id} data={data}></BlogPostData>
              ))}

              <div class="pagination ">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    {[...Array(pageCount).keys()].map((number) => (
                      <li
                        className={
                          number == page ? "page-item active" : "page-item"
                        }
                        key={number}
                      >
                        <a
                          class="page-link"
                          className={
                            number == page ? "page-link active" : "page-link"
                          }
                          onClick={() => setPage(number)}
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">{number+1}</span>
                        </a>
                      </li>
                    ))}
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
