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
        // backgroundImage: `url(/static/icebg.jpg)`,
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat"
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
            I am a junior developer transitioning into a career in the tech
            industry. My background includes over 5 years in the travel industry
            and film production and editing. My love of learning and passion for
            simplicity are what drives me to code. My extensive experience with
            customers, leadership, and my ability to adapt to high pressure
            situations with enthusiasm are what makes me an asset to any team.
          </p>
          <p>
            I learned to code through the
            <a href="https://shecodes.com.au/plus/">SheCodes Plus</a> program in
            2019. The six month part time course gave me experience and skills
            HTML/CSS, Python, Django, Javascript, React, Flask, Git, REST API,
            AWS, Google Cloud, Agile Development and Machine Learning
          </p>
          <p>
            Examples of projects completed during this course can be found
            below.
          </p>
          <p>
            I am currently based in Perth, Western Australia, and am excited for
            all the new opportunities to contribute to the local industry.
          </p>
        </About>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default AppContainer;
