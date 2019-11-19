import React, { Component } from "react"; // Import the Component component from React
import { Nav, Navbar } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          className="justify-content-center"
          sticky="top"
          bg="white"
          expand="md"
          id="start"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Item>
                <Nav.Link href="#header">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">ABOUT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#projects">PROJECTS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="https://www.github.com/sarahlevins"
                  target="_blank"
                >
                  GITHUB
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navigation;
