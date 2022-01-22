import React from 'react';
import SliderImg from './PortfolioSectionSlider';

const PortfolioSection = () => {
    return (
        <section id="portfolio">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 part-1">
              <div class="wrap">
                <h1> WORKING PROCESS</h1>
                <h2>
                  LASTET WORKING <span class="t-color">PROJECT</span>{" "}
                </h2>
              </div>
            </div>
            <div class="col-lg-6 part-2">
              <div class="wrap">
                <p>
                Below are a few websites that combine React-JS and Node-js, which were used as databases on MongoDB with Responsive.
                </p>
              </div>
            </div>
            <div class="col-lg-2 part-3"></div>
          </div>
          <div class="row">
            <div class="col">

                {/* Slider Strat here */}
                
              <SliderImg></SliderImg>          
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    );
};

export default PortfolioSection;