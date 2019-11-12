import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ContactMe(props) {
  return (
    <>
      <div className="form-container">
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ContactMe;
