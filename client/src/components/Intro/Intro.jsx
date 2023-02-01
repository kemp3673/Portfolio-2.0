import React from "react";
import TypeWriter from "./TypeWriter/TypeWriter.jsx";
import Laptop from "./LaptopModel/LaptopModel.jsx";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <Laptop className="introLeft"/>
      <div className="introRight">
        <TypeWriter />
      </div>
    </div>
  );
};

export default Intro;
