import React from "react";
import Header from "../components/Header.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import About from "../components/About.js";
import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";

function AppContainer() {
  var bgColors = { White: "#FFF9FA", Blue: "#CCE1E5" };
  return (
    <div
      style={{
        backgroundColor: bgColors.Blue,
        height: "100%"
      }}
    >
      <Header headerimage="static/blueplane.jpg" />
      <div
        id="AppContainer"
        style={{
          backgroundColor: bgColors.White,
          boxShadow: "3px 0px 8px #7E7F7F",
          paddingBottom: "35px"
        }}
      >
        <Navigation />
        <About>
          <p>
            I'm Sarah Levins, a developer and consultant working with data and AI.
            </p>
          <p>
            I am an advocate for beginners in tech, and my mission is to make it accessible to people who want to transition into a new career.
             </p>

          <p>My journey into tech started in 2019. Armed with an arts degree,
            and over 6 years experience in the travel industry, I decided it was the right time to learn how to code!</p>
          <p>
            I was part of the
            <a href="https://shecodes.com.au/plus/">SheCodes Plus</a> cohort in
            2019. This six month part time course gave me full stack development skills, and agile development practice.
          </p>

          <p>I mentor at beginner workshops and speak at meetups and events within the community, as a way to push myself to learn new things and share my knowledge.</p>

        </About>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default AppContainer;
