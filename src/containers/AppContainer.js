import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/Home.js";
import Projects from "../pages/Projects.js";
import ContactMe from "../pages/ContactMe.js";
import About from "../pages/About.js";
import Header from "../components/Header.js";
import Navigation from "../components/Navigation.js";
import "../App.css";

function AppContainer() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header headerimage="./static/fade.jpg" />
        <Navigation home="/home" />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default AppContainer;
