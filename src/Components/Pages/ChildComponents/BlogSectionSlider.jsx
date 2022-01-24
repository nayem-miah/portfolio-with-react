import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
const DescriptionPart= 1200;

const BlogSectionSlider = (props) => {

    const {_id,BlogTitle,ImgUrl,date,DescriptionPart1}=props.data;
    
    return (
        <div class="testimonial">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={ImgUrl}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h3 class="date">{date}</h3>
                    <h4 class="card-title">{BlogTitle}</h4>
                    <p class="card-text">
                      {DescriptionPart1.slice(0,150)} .....
                    </p>

                    <Link className='btn' to={`/single-blog/${_id}`}>Read More</Link>
                    
                  </div>
                </div>
              </div>
    );
};

export default BlogSectionSlider;