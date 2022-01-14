import React from 'react';
import { Link } from 'react-router-dom';

const BlogSectionSlider = (props) => {
    const {img,date,des}=props.blogSlider;
    return (
        <div class="testimonial">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={img}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h3 class="date">jun 28, 2021</h3>
                    <h4 class="card-title">Addiction When Gambling</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab sunt officia earum temporibus suscipit.
                    </p>

                    <Link className='btn' to={'/single-blog'}>Read More</Link>
                    
                  </div>
                </div>
              </div>
    );
};

export default BlogSectionSlider;