import React from "react";

const ExperineceSection_child_1 = (props) => {
 const {title,description,date}=props.experince;
 const SliceTitle = title.slice(0,23);
 const SliceDescription = description.slice(0,130);
 
  return (
    <div class="col-lg-3 part-1">
      <div class="text">
        <h1>{date}</h1>
        <h2>{SliceTitle}</h2>
        <p>{SliceDescription}
        </p>
        <div class="overlay"></div>
      </div>
    </div>
  );
};

export default ExperineceSection_child_1;
