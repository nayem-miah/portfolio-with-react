import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostData = (props) => {
    const {_id,BlogTitle, ImgUrl, DescriptionPart1, date}=props.data;
    const DescriptionSlice = DescriptionPart1.slice(0,300);
    

    return (
        <div class="single-item">
                  <div class="overlay">
                    <img class="img-fluid" src={ImgUrl} alt="" />
                    <h2 class="event">USA EVENT</h2>
                  </div>
                  <div class="hadding-text">
                    <Link to={`/single-blog/${_id}`}>
                     {BlogTitle}
                    </Link>
                  </div>
                  <div class="tag-point d-flex align-items-center">
                    <img class="img-fluid" src={'authorImg'} alt="" />
                    <p>Amit Biswas</p>

                    <span>
                      <i class="far fa-calendar-alt"></i>
                    </span>
                    <p> {date}</p>
                  </div>
                  <div class="content">
                    <p>{DescriptionSlice} ....</p>
                  </div>
                  <div class="read-more-btn d-flex align-items-center justify-content-between">
                    <Link className="btn btn-read-more" to={`/single-blog/${_id}`}>
                      Read More
                    </Link>

                    <a class="share" href="#">
                      <i class="fas fa-share-alt"></i>
                    </a>
                  </div>
                </div>
    );
};

export default BlogPostData;