import React from "react";

const ExperineceSection_child_1 = (props) => {
 const {_id,time,company,des}=props.experince;
 
  return (
    <div class="col-lg-3 part-1">
      <div class="text">
        <h1>{time}</h1>
        <h2>{company}</h2>
        <p>{des}
        </p>
        <div class="overlay"></div>
      </div>
    </div>
  );
};

export default ExperineceSection_child_1;