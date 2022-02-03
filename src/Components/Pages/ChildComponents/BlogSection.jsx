import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import BlogSectionSlider from "./BlogSectionSlider";
import bannerSectionImg from '../../Img/Banner_section.png';
import { Link } from "react-router-dom";
import axios from "axios";

const BlogSection = () => {
  const [data,setData]=useState([]);
    const url = 'http://localhost:5000/all-blog-post';
    useEffect(()=>{
      axios.get(url)
      .then(res=>setData(res.data.BlogData))
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
              I'll always try my best to produce high quality work for my Clients. Baecause Client satisfaction is my very first priority.
              </p>
            </div>
          </div>
          <div class="col-lg-2 part-3"></div>
        </div>
        <div class="row ">
          <div class="col d-flex justify-content-center">
            <div class="menu-bar d-flex">
              <h2>ALL BLOGS</h2>
              <Link to={'./blog'}><img class="img-fluid" src={bannerSectionImg} alt="" /></Link>
              
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
                      data.map((data)=>(
                          <BlogSectionSlider
                          key={data._id}
                          data={data}
                          ></BlogSectionSlider>
                      ))
                  }
              </Carousel>           
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
