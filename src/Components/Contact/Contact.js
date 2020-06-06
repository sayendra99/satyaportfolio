import React from "react";
import { Form, Button } from "react-bootstrap";
import "../About/About.css";
import "./Contact.css"

import WorkLogo from "../../Resources/contact.jpg";
const Contact = () => {
  return (
      <>
       <h1 className="about-title">Contact Me</h1>
       <br/>
   <div className="about-container">
       <div className="row">
    <div className="col-12 offset-1 col-sm-6">
      <div className="form-container">
        <div className="form-inside">
          <Form action="mailto:satya.devabhaktineni999.com"method="POST">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="contact-title">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="contact-title">Email address</Form.Label>
              <Form.Control
                type="email"
                name="_replyto"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="contact-title">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="message"
                required
                placeholder="Your Message"
              />
            </Form.Group>
            <button className="btn" type="submit">
              Submit
            </button>
          </Form>
        </div>
        </div>
      </div>
      <div className="col-12 offset-1 col-sm-3">
                 <img width="530" style={{display: "inline-block",marginTop:"0px"}}className="img-fluid img-picture" alt="Responsive image" src={WorkLogo}/>
             </div>
      </div>
    </div>
    </>
  );
};
export default Contact;