import React from 'react';
import { Button } from 'react-bootstrap';

const AllBlogDataChild = (props) => {
    const {BlogTitle, ImgUrl, Description, date}=props.data;
    const DescriptionSlice = Description.slice(0,170);
    return (
        <div className="wrap">
        <div className="img-box ">
          <img src={ImgUrl} alt="" />
         
        </div>
        <div className="text-box pl-5">
          <p className='font-weight-bold'>{BlogTitle}</p>
          <p>{date}</p>
          <p>{DescriptionSlice}....</p>
          <div className='mt-2'>
          <Button variant="danger">Remove Post</Button>
          <Button className="ml-2">Edit Post</Button>
          </div>
        </div>
        
      </div>
    );
};

export default AllBlogDataChild;