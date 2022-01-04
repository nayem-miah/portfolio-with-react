import React from 'react';
import Carousel from 'react-elastic-carousel';
import slider1 from '../../Img/food-1.png';
import slider2 from '../../Img/food-2.png';
import slider3 from '../../Img/food-3.png';
import slider4 from '../../Img/food-4.png';
import slider5 from '../../Img/food-5.png';
import slider6 from '../../Img/food-6.png';
import slider7 from '../../Img/food-7.png';

const PortfolioSectionSlider = () => {

  var breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

    return (
        <Carousel breakPoints={breakPoints} className='slider'>
        <img src={slider1} alt="" />
        <img src={slider2} alt="" />
        <img src={slider3} alt="" />
        <img src={slider4} alt="" />
        <img src={slider5} alt="" />
        <img src={slider6} alt="" />
        <img src={slider7} alt="" />
      </Carousel>
    );
};

export default PortfolioSectionSlider;