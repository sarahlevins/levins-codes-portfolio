import React from "react"; // Import the Component component from React
import "../App.css";

const Header = ({ headerimage }) => {
  return (
    <div className="header-container" id="header">
      <img src={headerimage} alt="plane banner" className="header-image" />
      <div className="header-text">
        <h1 className="header-name">Sarah Levins</h1>
      </div>
    </div>
  );
};

export default Header;
