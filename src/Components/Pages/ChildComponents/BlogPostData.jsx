import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogPostData = (props) => {
    const {BlogTitle, ImgUrl, Description, date}=props.data;

    const DescriptionSlice = Description.slice(0,300);
    
    const titleLowerCase1 = BlogTitle.toLowerCase();
    var titleLowerCase = titleLowerCase1.replace(/\s+/g, '-');


   


    return (
        <div class="single-item">
                  <div class="overlay">
                    <img class="img-fluid" src={ImgUrl} alt="" />
                    <h2 class="event">USA EVENT</h2>
                  </div>
                  <div class="hadding-text">
                    <Link to={`/single-blog/${titleLowerCase}`}>
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
                    <Link className="btn btn-read-more" to={`/single-blog/${titleLowerCase}`}>
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