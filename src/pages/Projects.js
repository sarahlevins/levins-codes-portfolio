import React from "react";
import Thumbnail from "../components/Thumbnail.js";
import "../App.css";
import { CardColumns } from "react-bootstrap";

function Projects(props) {
  return (
    <div className="page-container">
      <h1>Projects</h1>
      <CardColumns>
        <Thumbnail
          link="https://react-weather-app-258608.appspot.com/"
          image="./static/thumbnail-weather-app.png"
          title="Weather App"
          description="A react weather app using a open source 3rd party weather API. Used SVG logos for weather icons, and created a submittable form."
          category="React JS/API"
        />
        <Thumbnail
          link=""
          image="./static/thumbnail-eventfinder-app.png"
          title="Event Finder App"
          description="A python/django app using a postgreSQL database to create, track and filter events you can attend for free"
          category="Python/Django/PostgreSQL/RESTAPI"
        />
        <Thumbnail
          link=""
          image="./static/thumbnail-css-toggle.png"
          title="CSS Variables"
          description="Part of the Javascript30 challenge. Change CSS Variables on screen with widgets"
          category="Javascript/CSS"
        />
        <Thumbnail
          link=""
          image="./static/thumbnail-custom-videoplayer.png"
          title="Custom Videoplayer"
          description="Part of the Javascript30 challenge. A custom style video player"
          category="Javascript"
        />
        <Thumbnail
          link=""
          image="./static/thumbnail-flex-gallery.png"
          title="Flex Gallery"
          description="Part of the Javascript30 challenge. A gallery which toggles open when you click"
          category="Javascript/Flexbox"
        />
      </CardColumns>
    </div>
  );
}

export default Projects;
