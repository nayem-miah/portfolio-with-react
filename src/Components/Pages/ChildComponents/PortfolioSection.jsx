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
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint
                  Ratione Reprehenderit, Error Qui Enim Sit Ex Provident!
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