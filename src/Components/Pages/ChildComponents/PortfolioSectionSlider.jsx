import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

const PortfolioSectionSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://amitjs.herokuapp.com/slider").then((res) => {
      setData(res.data);
    });
  }, []);

  var breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <Carousel breakPoints={breakPoints} className="slider">
      {data.map((data) => (
        <img src={data.ImageUrl} alt="" />
      ))}
    </Carousel>
  );
};

export default PortfolioSectionSlider;
