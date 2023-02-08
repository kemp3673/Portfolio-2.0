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
          {/* This work is based on "Laptop" (https://sketchfab.com/3d-models/laptop-3487cc0341934da8aa8c294e8b006a23) by GeniusPilot2016 (https://sketchfab.com/GeniusPilot2016) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/) */}
      </div>
      <div className="introRight">
        <TypeWriter />
      </div>
      <div className="downIconWrapper">
      <a href="#projects">
        <img src={downIcon} className="downIcon" />
      </a>
      </div>
    </div>
  );
};

export default Intro;
