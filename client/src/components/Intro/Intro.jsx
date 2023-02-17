import React from "react";
// Components
import TypeWriter from "./TypeWriter/TypeWriter.jsx";
import Laptop from "./LaptopModel/LaptopModel.jsx";
// Utils
import scrollTo from "../../utils/scrollTo.js";
// Styling
import "./intro.css";
// Icons & Images
import downIcon from "../../assets/downIcon.png";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="circleElement"/>
      <div className="introLeft">
          {/* 3D Laptop Model with Video Texture Screen */}
          <Laptop />
      </div>
      <div className="introRight">
        {/* Typewriter Effect for splash message*/}
        <TypeWriter />
      </div>
      <div className="downIconWrapper">
      <span onClick = {() => scrollTo('#skills')}>
        <img src={downIcon} alt="Down Icon" aria-label="Scroll to skills" className="downIcon" />
      </span>
      </div>
    </div>
  );
};

export default Intro;
