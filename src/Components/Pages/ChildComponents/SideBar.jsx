import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import amitImg from "../../Img/single-blog/nayem.png";

const SideBar = () => {
  const [data, setdata] = useState([]);

  const dataSlice = data.slice(0, 5);
  const url = "https://amitjs.herokuapp.com/all-blog-post";
  useEffect(() => {
    axios.get(url).then((res) => {
      setdata(res.data.BlogData);
    });
  }, [data]);
  return (
    <div class="col-lg-4 part-2">
      <div class="wrap-1">
        <div class="text">
          <h2>ABOUT US.</h2>
        </div>
        <div class="img-tag">
          <img class="img-1 img-fluid" src={amitImg} alt="" />
          <h2>CREATIVE LEAD</h2>
          <img class="img-2 img-fluid" src="./img/signature.png" alt="" />
          <p className="text-justify">
            I am full stack developer with multiple skills, The area of my
            experience includes but is not limited to website development,
            maintenance, and e-commerce development. I have been working with
            the following skills for over 3 years.
          </p>
          <div class="social-icon">
            <a href="https://www.facebook.com/amitbiswas1994" target="blank">
              <i class="fab fa-facebook-square"></i>
            </a>

            <a href="https://www.linkedin.com/in/amitbiswas-tm" target="blank">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/alvida_amit/" target="blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/amitgoclick" target="blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="wrap-2">
        <div class="text">
          <h2>RECENT POSTS .</h2>
        </div>

        {dataSlice.map((dataSlice) => (
          <div class="items">
            <div class="item d-flex justify-content-center align-content-center ">
              <img
                class="img-fluid"
                src="./img/single-blog/recent-post1.jpg"
                alt=""
              />
              {/* <a href="#">{dataSlice.BlogTitle}</a> */}
              <Link className="" to={`/single-blog/${dataSlice._id}`}>
                {dataSlice.BlogTitle}
              </Link>
            </div>
          </div>
        ))}
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
  );
};

export default SideBar;
