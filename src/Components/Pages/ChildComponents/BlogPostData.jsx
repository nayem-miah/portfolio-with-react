import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogPostData = (props) => {
    const {_id,img,authorImg,author,des,title}=props.data;
    
    const titleLowerCase1 = title.toLowerCase();
    var titleLowerCase = titleLowerCase1.replace(/\s+/g, '-');


   


    return (
        <div class="single-item">
                  <div class="overlay">
                    <img class="img-fluid" src={img} alt="" />
                    <h2 class="event">USA EVENT</h2>
                  </div>
                  <div class="hadding-text">
                    <Link to={""}>
                     {title}
                    </Link>
                  </div>
                  <div class="tag-point d-flex align-items-center">
                    <img class="img-fluid" src={authorImg} alt="" />
                    <Link to={""}>{author}</Link>

                    <span>
                      <i class="far fa-calendar-alt"></i>
                    </span>
                    <Link to={""}> 28 SEPTEMBER</Link>
                  </div>
                  <div class="content">
                    <p>{des}</p>
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