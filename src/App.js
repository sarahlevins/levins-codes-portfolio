import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects.js";
import ContactMe from "./pages/ContactMe.js";
import About from "./pages/About.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <img src="./static/fade.jpg" className="Home-header" />

          <div className="navigation-sub">
            <Link to="/" className="item">
              Projects
            </Link>
            <Link to="/contactme" className="item">
              Contact Me
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
            <Route exact path="/" component={Projects} />
            <Route path="/contactme" component={ContactMe} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
