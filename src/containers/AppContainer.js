import React from "react";
import Header from "../components/Header.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import About from "../components/About.js";
import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";

function AppContainer() {
  var bgColors = { Blue: "#90ACCE", LessBlue: "#78B5C0" };
  return (
    <div
      style={{
        // backgroundImage: `url(/static/icebg.jpg)`,
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat"
        backgroundColor: bgColors.LessBlue
      }}
    >
      <Header headerimage="static/blueplane.jpg" />
      <Navigation />
      <div id="AppContainer" style={{ backgroundColor: "white" }}>
        <About>
          <p>
            A driven junior developer transitioning into a career in the tech
            industry. 5+ years experience in leadership and customer service.
            Passionate about simplicity and user experience. High attention to
            detail and a track record of achieving targets within tight
            timelines. Excited to bring unique insight into a development team.
            On track to complete the SheCodes Plus program early December 2019.
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
