import React from "react";
import Thumbnail from "./Thumbnail.js";
import "../App.css";
import { CardColumns } from "react-bootstrap";

function Projects(props) {
  return (
    <div className="page-container" id="projects">
      <h1>Projects</h1>
      <CardColumns>
        <Thumbnail
          link="https://react-weather-app-258608.appspot.com/"
          image="./static/thumbnail-weather-app.png"
          title="Weather App"
          description="A react weather app using a open source 3rd party weather API. Used SVG logos for weather icons, and created a submittable form. Deployed on Google Cloud."
          category="React JS/API"
        />
        <Thumbnail
          link="https://morning-headland-11937.herokuapp.com/freeeventfinder/"
          image="./static/thumbnail-eventfinder-app.png"
          title="Event Finder App"
          description="A python/django app using a postgreSQL database to create, track and filter events you can attend for free. Deployed on Heroku."
          category="Python/Django/PostgreSQL/RESTAPI"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/cssvariables.html"
          image="./static/thumbnail-css-toggle.png"
          title="CSS Variables"
          description="Part of the Javascript30 challenge. Change CSS Variables on screen with widgets."
          category="Javascript/CSS"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/javascriptclock.html"
          image="./static/thumbnail-javascript-clock.png"
          title="Javascript Clock"
          description="Part of the Javascript30 challenge. A custom style video player."
          category="Javascript"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/flexpanelgallery.html"
          image="./static/thumbnail-flex-gallery.png"
          title="Flex Gallery"
          description="Part of the Javascript30 challenge. A gallery which toggles open when you click."
          category="Javascript/Flexbox"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/html5canvas.html"
          image="./static/thumbnail-html-canvas.png"
          title="HTML5 Canvas"
          description="Part of the Javascript30 challenge. Use cursor to draw on HTML Canvas"
          category="Javascript/HTML/CSS"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/typeahead.html"
          image="./static/thumbnail-type-ahead.png"
          title="Type Ahead List"
          description="Part of the Javascript30 challenge. Filter and display a list predicting entry."
          category="Javascript/HTML/CSS"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/checkboxes.html"
          image="./static/thumbnail-shift-multiple.png"
          title="To Do List"
          description="Part of the Javascript30 challenge. Toggle multiple boxes using state."
          category="Javascript/HTML/CSS"
        />
      </CardColumns>
    </div>
  );
}

export default Projects;
