import React from "react"; // Import the Component component from React
import { Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "../App.css";

const Navigation = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contactme">Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navigation;
