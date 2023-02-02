import React from "react";
import TypeWriter from "./TypeWriter/TypeWriter.jsx";
import Laptop from "./LaptopModel/LaptopModel.jsx";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="introLeft">
      <TypeWriter />
      </div>
      <div className="introRight">
      <Laptop />
      </div>
    </div>
  );
};

export default Intro;
