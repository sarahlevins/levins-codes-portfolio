import React from "react";
import Thumbnail from "./Thumbnail.js";
import "../App.css";
import { CardColumns } from "react-bootstrap";

function Projects(props) {
  return (
    <div className="page-container" id="projects">
      <h1>What have I done?</h1>
      <CardColumns>
        <Thumbnail
          link="https://www.youtube.com/watch?v=fooDYx8oIHw"
          image="./static/thumbnail-chatbot-talk.png"
          title="I don't need friends I can build my own"
          description="A beginner level talk about contextual chatbots given at Pyconline 2020"
          category="Python/Rasa/PostgreSQL"
        />
        <Thumbnail
          link="https://travelrecommendationbot.herokuapp.com/"
          image="./static/thumbnail-chatbot-travel.png"
          title="Travel Recommendations Chatbot"
          description="A contexual chatbot built using Rasa, designed to give it's users travel recommendations"
          category="Python/Rasa/PostgreSQL"
        />
        <Thumbnail
          link="https://bpmplaylistgenerator.herokuapp.com/"
          image="./static/thumbnail-playlist.png"
          title="BPM Playlist Generator"
          description="An application using the Spotify API to generate playlists of a desired length and tempo based on a song."
          category="API/Django/PostgreSQL"
        />
        <Thumbnail
          link="http://levinscodes-gatsby-blog.surge.sh/"
          image="./static/thumbnail-gatsby.png"
          title="Gatsby Blog"
          description="A simple blog built using the gatsby-starter-hello-world template. Uses React Components, GraphQL, Gatsby Plugins and SASS to programmatically generate static blog post pages from Markdown files, with slug-generated urls, and link to them from a home page comprised of reusable components. "
          category="Gatsby/React/GraphQL/SASS"
        />
        <Thumbnail
          link="https://popcornculture.herokuapp.com/"
          image="./static/thumbnail-popcorn.png"
          title="Movie Platform Search Engine"
          description="A custom built REST API backend providing content streaming service information to a React front end, designed to simplify the user watching experience"
          category="Django REST API/React JS"
        />
        <Thumbnail
          link="https://eventtwo.herokuapp.com/freeeventfinder/"
          image="./static/thumbnail-eventfinder-app.png"
          title="Event Finder App"
          description="A python/django app using a postgreSQL database to create, track and filter events you can attend for free. Django Auth User Model using for authentication. Deployed on Heroku with static files stored in an AWS S3 bucket."
          category="Python/Django/PostgreSQL/RESTAPI"
        />
        <Thumbnail
          link="https://github.com/sarahlevins/python-airport-code-game"
          image="./static/thumbnail-airport-code-game.png"
          title="Airport Code Finder Game"
          description="A Python turtle game designed to help users learn where cities are and their airport codes"
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
