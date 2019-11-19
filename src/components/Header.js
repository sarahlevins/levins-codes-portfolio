import React from "react"; // Import the Component component from React
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const Header = ({ headerimage }) => {
  return (
    <div className="header-container" id="header">
      <img src={headerimage} alt="plane banner" className="header-image" />
      <div className="header-text">
        <h1 className="header-name">Sarah Levins</h1>
        <h3 className="header-role">Developer</h3>
        <a href="#start">
          <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Header;
