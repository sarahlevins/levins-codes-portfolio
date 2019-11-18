import React, { Component } from "react";
import "../App.css";

class About extends Component {
  render() {
    return (
      <div className="page-container" id="about">
        <h1>About</h1>
        <div className="about-container">
          {/* <div className="headshot-container">
            <img
              src="static/headshot.png"
              alt="photo of sarah"
              className="headshot-picture"
            />
          </div>
          <br /> */}
          <div className="description-container">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default About;
