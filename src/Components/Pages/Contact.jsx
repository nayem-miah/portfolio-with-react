import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Header from "./ChildComponents/Header";
import IntroSection from "./ChildComponents/IntroSection";
import Footer from "./ChildComponents/Footer";

const Contact = () => {
  return (
    <>
      {/* Header Bar */}

      <Header></Header>

      {/* Intro  */}

      <IntroSection homeLink="Home" siteLink="Contact"></IntroSection>

      {/* Contact Section */}

      <div id="contactSection">
        <Container>
          <Row>
            <Col xl={6} md={6} className="part-1">
              <div className="wrap">
                <h2>Any <span className="t-color">questions</span> ? Feel free to contact</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <h4>Email: amitbd599@gmail.com</h4>
                <div>
                  <a target={'blank'} href="https://www.facebook.com/amitbiswas1994">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a target={'blank'} href='https://www.linkedin.com/in/amitbiswas-tm/'>
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a target={'blank'} href='https://www.reddit.com/user/Amitbd33'>
                    <i class="fab fa-reddit-square"></i>
                  </a>
                  <a target={'blank'} href='https://www.reddit.com/user/Amitbd33'>
                  <i class="fab fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </Col>
            <Col xl={6} md={6} className="part-2">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className="mb-3" type="email" placeholder="Your Name" />
                  <Form.Control type="email" placeholder="Email Address" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>

                  <textarea  class="w-100 massage p-2" name="" id="" placeholder="Write your massage" cols="20" rows="5" spellcheck="false"></textarea>
                </Form.Group>
                <Button className="btn" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Contact;
