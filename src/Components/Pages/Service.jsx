import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./ChildComponents/Header";
import IntroSection from "./ChildComponents/IntroSection";
import serviceImg1 from "../../Components/Img/services_details01.jpg";
import serviceImg2 from "../../Components/Img/services_details02.jpg";
import serviceImg3 from "../../Components/Img/services_details03.jpg";
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
                  <h2 className="">We Solve Business Strategy Problem</h2>
                  <p className="">
                    Definition: Business strategy can be understood as the
                    course of action or set of decisions which assist the
                    entrepreneurs in achieving specific business objectives. It
                    is nothing but a master plan that the management of a
                    company implements to secure a competitive position in the
                    market, carry on its operations, please customers and
                    achieve the desired ends of the business.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
          <section className="service-section space">
            <Row>
              <Col md={3} xl={6} className="order">
                <div className="wrap">
                  <h2 className="">Nature of Business Strategy</h2>
                  <p className="">
                    Definition: Business strategy can be understood as the
                    course of action or set of decisions which assist the
                    entrepreneurs in achieving specific business objectives. It
                    is nothing but a master plan that the management of a
                    company implements to secure a competitive position in the
                    market, carry on its operations, please customers and
                    achieve the desired ends of the business.
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
                  <h2 className="">We Solve Business Strategy Problem</h2>
                  <p className="">
                    Definition: Business strategy can be understood as the
                    course of action or set of decisions which assist the
                    entrepreneurs in achieving specific business objectives. It
                    is nothing but a master plan that the management of a
                    company implements to secure a competitive position in the
                    market, carry on its operations, please customers and
                    achieve the desired ends of the business.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
          <section className="service-section space mb-5">
            <Row>
              <Col md={3} xl={6}>
                <div className="wrap">
                  <h2 className="">Nature of Business Strategy</h2>
                  <p className="">
                    Definition: Business strategy can be understood as the
                    course of action or set of decisions which assist the
                    entrepreneurs in achieving specific business objectives. It
                    is nothing but a master plan that the management of a
                    company implements to secure a competitive position in the
                    market, carry on its operations, please customers and
                    achieve the desired ends of the business.
                  </p>
                </div>
              </Col>
              <Col>
                <img className="img-fluid" src={serviceImg2} alt="" />
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
