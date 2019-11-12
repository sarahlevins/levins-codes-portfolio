import React from "react";
import Thumbnail from "../components/Thumbnail.js";
import "../App.css";

function Projects(props) {
  return (
    <div className="page-container">
      <h1>Projects</h1>
      <Thumbnail
        link="https://react-weather-app-258608.appspot.com/"
        image="./static/thumbnail-weather-app.png"
        title="weather app"
        category="react"
      />
    </div>
  );
}

export default Projects;
