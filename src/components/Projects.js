import React from "react";
import Thumbnail from "./Thumbnail.js";
import "../App.css";
import { CardColumns } from "react-bootstrap";

function Projects(props) {
  return (
    <div className="page-container" id="projects">
      <h1>Work Examples</h1>
      <CardColumns>
        <Thumbnail
          link="https://react-weather-app-258608.appspot.com/"
          image="./static/thumbnail-weather-app.png"
          title="Weather App"
          description="A react weather app using a open source 3rd party weather API. Used SVG logos for weather icons, and created a submittable form. Deployed on Google Cloud."
          category="React JS/API"
        />
        <Thumbnail
          link="https://eventtwo.herokuapp.com/freeeventfinder/"
          image="./static/thumbnail-eventfinder-app.png"
          title="Event Finder App"
          description="A python/django app using a postgreSQL database to create, track and filter events you can attend for free. Django Auth User Model using for authentication. Deployed on Heroku with static files stored in an AWS S3 bucket."
          category="Python/Django/PostgreSQL/RESTAPI"
        />
        <Thumbnail
          link="https://levinscodes.com/static/thumbnail-survey.png"
          image="./static/thumbnail-survey.png"
          title="Survey"
          description="A simple Python script which runs a survey made up of multiple sections"
          category="Python"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/javascriptclock.html"
          image="./static/thumbnail-javascript-clock.png"
          title="Javascript Clock"
          description="Part of the Javascript30 challenge. A clock mde using local date time and divs."
          category="Javascript"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/typeahead.html"
          image="./static/thumbnail-type-ahead.png"
          title="Airport Code Search"
          description="Part of the Javascript30 challenge. Imports JSON formatted data, formats it, and perfoms predictive text searches to find airport codes."
          category="Javascript/HTML/CSS"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/flexpanelgallery.html"
          image="./static/thumbnail-flex-gallery.png"
          title="Flex Gallery"
          description="Adapted from the javascript 30 challenge. A gallery which toggles open when you click. Uses eventhandlers and positioning."
          category="Javascript/Flexbox"
        />
        <Thumbnail
          link="https://static-portfolio-pages.herokuapp.com/checkboxes.html"
          image="./static/thumbnail-shift-multiple.png"
          title="To Do List"
          description="Part of the Javascript30 challenge. Toggle multiple boxes using the shift key. Practice using state in the DOM."
          category="Javascript/HTML/CSS"
        />
        <Thumbnail
          link="https://levinscodes.com/static/thumbnail-creditcard.png"
          image="./static/thumbnail-creditcard.png"
          title="Credit Card Number Check"
          description="A simple Python script which validates and checks if credit card numbers are valid."
          category="Python"
        />
        <Thumbnail
          link="https://levinscodes.com/static/thumbnail-machinelearning.png"
          image="./static/thumbnail-machinelearning.png"
          title="Image Classification"
          description="With training from the, trained a model to classify images based on content"
          category="Machine Learning"
        />
      </CardColumns>
    </div>
  );
}

export default Projects;
