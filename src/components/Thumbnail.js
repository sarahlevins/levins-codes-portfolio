/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"; // Import the Component component from React
import { Card } from "react-bootstrap";
import "./Thumbnail.css";

const Thumbnail = ({ link, image, title, category, description, ...props }) => {
  return (
    <>
      <a href={link} target="_blank">
        <Card id="card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
              <br />
              <br />
              {category}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </>
  );
};

export default Thumbnail;
