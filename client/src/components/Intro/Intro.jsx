import React from "react";
import TypeWriter from "./TypeWriter/TypeWriter.jsx";
import Laptop from "./LaptopModel/LaptopModel.jsx";
import downIcon from "../../assets/downIcon.png";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="circleElement"/>
      <div className="introLeft">
          <Laptop />
      </div>
      <div className="introRight">
        <TypeWriter />
      </div>
      <div className="downIconWrapper">
      <a href="#about">
        <img src={downIcon} className="downIcon" />
      </a>
      </div>
    </div>
  );
};

export default Intro;
