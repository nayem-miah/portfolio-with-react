import React, { useEffect, useState } from "react";
import ExperineceSection_child_1 from "./ExperineceSection_child_1";

const ExperineceSection = () => {
  // For experince -----
  const [experince, setExperince] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/work")
      .then((res) => res.json())
      .then((data) => setExperince(data));
  }, []);
  return (
    <section id="experinece">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 part-1">
            <div class="wrap">
              <h1>MY EXPERIENCE</h1>
              <h2>
                EXPERIENCE AND <span class="t-color">SKILL</span>{" "}
              </h2>
            </div>
          </div>
          <div class="col-lg-7 part-2">
            <div class="wrap">
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint
                Ratione Reprehenderit, Error Qui Enim Sit Ex Provident!
              </p>
            </div>
          </div>
        </div>
        <div class="row box">

          {/* Experince Section Start Here... */}

          {experince.map((experince) => (
            <ExperineceSection_child_1
              key={experince._id}
              experince={experince}
            ></ExperineceSection_child_1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperineceSection;
