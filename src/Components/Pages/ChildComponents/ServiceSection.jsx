import React from 'react';

const ServiceSection = () => {
    return (
        <section id="SERVICES">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 part-1">
              <div class="wrap">
                <h1>WHAT WE DO</h1>
                <h2>
                  SERVICES AND <span class="t-color">SOLUTIONS</span>{" "}
                </h2>
              </div>
            </div>
            <div class="col-lg-7 part-2">
              <div class="wrap">
                <p>
                To get started, click the contact button now, drop me a message and let's get talking. I respond within minutes. I'm here to help you, let's collaborate!
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="card text-center">
                <div>
                  <i class="fas fa-ruler-combined"></i>
                </div>
                <div class="card-body">
                  <h4 class="card-title">RESPONSIVE DESIGN</h4>
                  <p class="card-text">
                  React-responsive is an npm package that allows you to create truly responsive designs in your React projects.
                  </p>
                </div>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card text-center">
                <div>
                  <i class="fas fa-layer-group"></i>
                </div>
                <div class="card-body">
                  <h4 class="card-title">UNIQUE VALUES</h4>
                  <p class="card-text">
                  In ES6, the code is much simpler. The code snippet below utilizes the Set object to store the collection of unique values.
                  </p>
                </div>
                <div class="overlay"></div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card text-center">
                <div>
                  <i class="fas fa-paste"></i>
                </div>
                <div class="card-body">
                  <h4 class="card-title">STYLE COMPONENTS</h4>
                  <p class="card-text">
                  Styled-components is a library built for React and React Native developers. It allows you to use component-level styles in your applications.
                  </p>
                </div>
                <div class="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ServiceSection;