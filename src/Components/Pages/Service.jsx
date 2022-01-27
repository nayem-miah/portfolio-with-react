import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./ChildComponents/Header";
import IntroSection from "./ChildComponents/IntroSection";
import serviceImg1 from "../../Components/Img/services_details01.jpg";
import serviceImg2 from "../../Components/Img/services_details02.jpg";
import serviceImg3 from "../../Components/Img/services_details03.jpg";
import serviceImg4 from "../../Components/Img/services_details04.jpg";
import Footer from "./ChildComponents/Footer";
import NewsLetter from "./ChildComponents/NewsLatter";

const Service = () => {
  return (
    <>
      {/* Header section */}
      <Header></Header>

      {/* Intro */}

      <IntroSection homeLink="Home" siteLink="Service"></IntroSection>

      {/* Main Section */}

      <section id="mainServiceSection">
        <Container>
          <section className="service-section">
            <Row>
              <Col md={3} xl={6}>
                <img className="img-fluid" src={serviceImg1} alt="" />
              </Col>
              <Col>
                <div className="wrap">
                  <h2 className="">Convert Figma/XD to React Website</h2>
                  <p className="">
                  React is an open source, JavaScript library for developing user interface (UI) in web application. React is developed and released by Facebook. Facebook is continuously working on the React library and enhancing it by fixing bugs and introducing new features. This tutorial starts with the architecture of React, how-to guide to setup projects, creating components, JSX and then walks through advanced concepts like state management, form programming, routing and finally conclude with step by step working example.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
          <section className="service-section space">
            <Row>
              <Col md={3} xl={6} className="order">
                <div className="wrap">
                  <h2 className="">Wordpress Customization And Fix Issue</h2>
                  <p className="">
                  WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes. I will design and develop a professional, eye-catching, modern, and fully responsive WordPress website for you. I always discuss projects in detail to fully understand my clients' requirements, which helps me provide them with not only an esthetically pleasing website but also a complete solution that helps them achieve their business goals and grow their business. 
                  </p>
                </div>
              </Col>
              <Col>
                <img className="img-fluid" src={serviceImg2} alt="" />
              </Col>
            </Row>
          </section>
          <section className="service-section space" >
            <Row>
              <Col md={3} xl={6}>
                <img className="img-fluid" src={serviceImg3} alt="" />
              </Col>
              <Col>
                <div className="wrap">
                  <h2 className="">HTML Convert With Bootstrap</h2>
                  <p className="">
                  All we have to do is convert any PSD, Figma, XD file to HTML code. We work on any template according to Future Perfect and Web Conversion. Everything is done based on the current technology which is why we can guarantee you 100%. I am a front-end developer with the knowledge and ability to convert PSD, Sketch, XD, Figma, InVision, and the like to HTML5 using Bootstrap4, CSS3, jQuery, JavaScript keeping all browsers responsive. If these services are what you are seeking, then we are an ideal match!
                  </p>
                </div>
              </Col>
            </Row>
          </section>
          <section className="service-section space mb-5">
            <Row>
              <Col md={3} xl={6}>
                <div className="wrap">
                  <h2 className="">Node-Js applications</h2>
                  <p className="">
                  Node. js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript. Developers can create scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
                  </p>
                </div>
              </Col>
              <Col>
                <img className="img-fluid" src={serviceImg4} alt="" />
              </Col>
            </Row>
          </section>
        </Container>
      </section>

      {/* MewsLetter */}

      <NewsLetter></NewsLetter>

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Service;
