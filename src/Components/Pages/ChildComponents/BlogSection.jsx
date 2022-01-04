import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import BlogSectionSlider from "./BlogSectionSlider";
import bannerSectionImg from '../../Img/Banner_section.png';

const BlogSection = () => {
  const [blogSlider, setBlogSlider] = useState([]);
  useEffect(()=>{
    fetch("./DataBase/blogSlider.JSON")
    .then(res=>res.json())
    .then(data=>setBlogSlider(data))
  },[])

  var breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <section id="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 part-1">
            <div class="wrap">
              <h1> WORKING PROCESS</h1>
              <h2>
                LASTET WORKING <span class="t-color">PROJECT</span>{" "}
              </h2>
            </div>
          </div>
          <div class="col-lg-6 part-2">
            <div class="wrap">
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint
                Ratione Reprehenderit, Error Qui Enim Sit Ex Provident!
              </p>
            </div>
          </div>
          <div class="col-lg-2 part-3"></div>
        </div>
        <div class="row ">
          <div class="col d-flex justify-content-center">
            <div class="menu-bar d-flex">
              <h2>ALL BLOGS</h2>
              <a href="./blog.html">
                {" "}
                <img class="img-fluid" src={bannerSectionImg} alt="" />
              </a>
              <span>
                <i class="fas fa-arrow-left"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="blog owl-carousel">
              <Carousel breakPoints={breakPoints} className="slider">
                  {
                      blogSlider.map((blogSlider)=>(
                          <BlogSectionSlider
                          key={blogSlider._id}
                          blogSlider={blogSlider}
                          ></BlogSectionSlider>
                      ))
                  }
              </Carousel>

              
             
             
              
             
            </div>
            <div class="owl-nav">
              <div class="owl-prev">
                <i class="fas fa-arrow-left"></i>
              </div>
              <div class="owl-next">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
