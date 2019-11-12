/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "../App.css";

const Thumbnail = ({ link, image, title, category, ...props }) => {
  return (
    <div className="project-thumbnail">
      <a href={link} target="_blank">
        <div className="project-image">
          <img src={image} alt="Project Image" />
        </div>
        <div className="project-title">{title}</div>
        <div className="project-category">{category}</div>
      </a>
    </div>
  );
};

export default Thumbnail;
