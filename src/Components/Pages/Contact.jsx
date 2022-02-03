import React, { useRef, useState } from 'react';
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Header from "./ChildComponents/Header";
import IntroSection from "./ChildComponents/IntroSection";
import Footer from "./ChildComponents/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [result, setResult]= useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zin0s79', 'template_49b31oo', form.current, 'user_b1NlqxKQ9yYBMbUfNmcyo')
      .then((result) => {
          // console.log(result.text);
          setResult('Message sent successfully!')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }



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
                <h2>
                  Any <span className="t-color">questions</span> ? Feel free to
                  contact
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <h4>Email: amitbd599@gmail.com</h4>
                <div>
                  <a
                    target={"blank"}
                    href="https://www.facebook.com/amitbiswas1994"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a
                    target={"blank"}
                    href="https://www.linkedin.com/in/amitbiswas-tm/"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a
                    target={"blank"}
                    href="https://www.reddit.com/user/Amitbd33"
                  >
                    <i class="fab fa-reddit-square"></i>
                  </a>
                  <a
                    target={"blank"}
                    href="https://www.reddit.com/user/Amitbd33"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col xl={6} md={6} className="part-2">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name='from_name'
                    className="mb-3"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                  <Form.Control
                    name='from_email'
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>

                  <textarea
                      
                    class="w-100 massage p-2"
                    name="message"
                    id=""
                    placeholder="Write your massage"
                    cols="20"
                    rows="5"
                    spellcheck="false"
                    required
                  ></textarea>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <p className='mt-3 text-danger'>{result}</p>
              </Form>

              

              {/*  */}
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
