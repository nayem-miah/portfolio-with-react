import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./ChildComponents/Header";
import AuthorImg from "../../Components/Img/single-blog/author1.png";
import NewsLetter from "./ChildComponents/NewsLatter";
import Footer from "./ChildComponents/Footer";
import IntroSection from "./ChildComponents/IntroSection";

const Blog = () => {
  const url = "./DataBase/blogPageData.JSON";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
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
                <div class="single-item">
                  <div class="overlay">
                    <img class="img-fluid" src={data.img} alt="" />
                    <h2 class="event">USA EVENT</h2>
                  </div>
                  <div class="hadding-text">
                    <Link to={""}>
                      SUCCESSFUL CAMPAIGNS USUALLY REQUIRE A CAMPAIGN MANAGER TO
                    </Link>
                  </div>
                  <div class="tag-point d-flex align-items-center">
                    <img class="img-fluid" src={data.authorImg} alt="" />
                    <Link to={""}>{data.author}</Link>

                    <span>
                      <i class="far fa-calendar-alt"></i>
                    </span>
                    <Link to={""}> 28 SEPTEMBER</Link>
                  </div>
                  <div class="content">
                    <p>{data.des}</p>
                  </div>
                  <div class="read-more-btn d-flex align-items-center justify-content-between">
                    <Link className="btn btn-read-more" to={"/single-blog"}>
                      Read More
                    </Link>

                    <a class="share" href="#">
                      <i class="fas fa-share-alt"></i>
                    </a>
                  </div>
                </div>
              ))}

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
            <div class="col-lg-4 part-2">
              <div class="wrap-1">
                <div class="text">
                  <h2>ABOUT US.</h2>
                </div>
                <div class="img-tag">
                  <img class="img-1 img-fluid" src={AuthorImg} alt="" />
                  <h2>CREATIVE LEAD</h2>
                  <img
                    class="img-2 img-fluid"
                    src="./img/signature.png"
                    alt=""
                  />
                  <p>
                    Hello I Am Amit Biswas -Powerful Pointing Has No Control
                    About The Blind Texts It Is An Almost Unorthographic Life
                    One Day However A Small Line Of Blind Text By The Name
                  </p>
                  <div class="social-icon">
                    <a href="#">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="wrap-2">
                <div class="text">
                  <h2>RECENT POSTS .</h2>
                </div>
                <div class="items">
                  <div class="item d-flex justify-content-center align-content-center ">
                    <img
                      class="img-fluid"
                      src="./img/single-blog/recent-post1.jpg"
                      alt=""
                    />
                    <a href="#">WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</a>
                  </div>
                </div>
                <div class="items">
                  <div class="item d-flex justify-content-center align-content-center ">
                    <img
                      class="img-fluid"
                      src="./img/single-blog/recent-post2.jpg"
                      alt=""
                    />
                    <a href="#">WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</a>
                  </div>
                </div>
                <div class="items">
                  <div class="item d-flex justify-content-center align-content-center ">
                    <img
                      class="img-fluid"
                      src="./img/single-blog/recent-post3.jpg"
                      alt=""
                    />
                    <a href="#">WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</a>
                  </div>
                </div>
                <div class="items">
                  <div class="item d-flex justify-content-center align-content-center ">
                    <img
                      class="img-fluid"
                      src="./img/single-blog/recent-post4.jpg"
                      alt=""
                    />
                    <a href="#">WAVES FLUNG THEMSELVES AT THE BLUE EVENING.</a>
                  </div>
                </div>
              </div>
              <div class="wrap-3">
                <div class="text">
                  <h2>CATEGORIES .</h2>
                </div>
                <div class="category">
                  <ul>
                    <li>
                      <a href="#">Lifestyle (35)</a>
                    </li>
                    <li>
                      <a href="#">Travel (15)</a>
                    </li>
                    <li>
                      <a href="#">Personal Life (23)</a>
                    </li>
                    <li>
                      <a href="#">Medical (13)</a>
                    </li>
                    <li>
                      <a href="#">Education (05)</a>
                    </li>
                    <li>
                      <a href="#">DESIGN (10)</a>
                    </li>
                  </ul>
                </div>
              </div>
             
            </div>
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
