import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "../App.css";

class About extends Component {
  render() {
    return (
      <div className="page-container" id="about">
        <h1>About</h1>
        <br />
        <div className="about-container">
          <Image
            src="static/headshot.png"
            alt="photo of sarah"
            className="headshot-picture"
            roundedCircle
          />
          <br />
          <br />
          <div className="description-container">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default About;
