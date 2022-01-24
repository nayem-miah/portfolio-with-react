import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AllBlogDataChild = (props) => {
    const {_id,BlogTitle, ImgUrl, Description, date}=props.data;
    const [data, setData]=useState([])
    const DescriptionSlice = Description.slice(0,170);

    const deleteData = (id)=>{
      const URL= `http://localhost:5000/all-blog-post/${id}`;
    
      axios.delete(URL)
      .then((res) => {
        alert("Post deleted!");
       
      })
    } 

  
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
          <Button onClick={()=>deleteData(_id)} variant="danger">Remove Post</Button>
          <Button className="ml-2">Edit Post</Button>
          </div>
        </div>
        
      </div>
    );
};

export default AllBlogDataChild;