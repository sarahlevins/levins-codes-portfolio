import React from "react"; // Import the Component component from React
import "../App.css";

const Header = ({ headerimage }) => {
  return (
    <div className="header-container">
      <img src={headerimage} alt="header image" className="header-image" />
      <div className="header-text">
        <h1>Sarah Levins</h1>
        <h2>Web Developer</h2>
      </div>
    </div>
  );
};

export default Header;
