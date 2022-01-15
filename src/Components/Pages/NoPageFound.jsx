import React from "react";
import Footer from "./ChildComponents/Footer";
import Header from "./ChildComponents/Header";

const NoPageFound = () => {
  return (
    <>
      <Header></Header>

      <div className="noPageFound">
          <h2>No page Found pleae go back.</h2>
      </div>

      <Footer></Footer>
    </>
  );
};

export default NoPageFound;
