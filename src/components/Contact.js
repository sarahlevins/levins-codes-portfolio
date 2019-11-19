import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ContactMe(props) {
  return (
    <div className="page-container form-container">
      <div className="form-width" id="contact">
        <div style={{ textAlign: "center" }}>
          <h1>Contact Me</h1>
          <p>I would love to hear from you. Send me a message below.</p>
        </div>
        <Form
          action="https://formspree.io/sarahjeanlevins@gmail.com"
          method="POST"
        >
          <Form.Group controlId="formBasicNameEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formControlTextarea1">
            <Form.Label>How can I help you?</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Message" />
          </Form.Group>
          <Button variant="flat" type="submit" className="form-button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactMe;
