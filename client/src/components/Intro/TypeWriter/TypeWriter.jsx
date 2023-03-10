import React, { useState, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./typewriter.css";

const TypeWriter = () => {
  // Get screen size
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [colorSelect, setColorSelect] = React.useState("#1C768F");
  // Update screen size on resize
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  // Add event listener on mount
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);
  // Change color on screen size
  useEffect(() => {
      if (screenWidth <= 768) {
        setColorSelect("#FA991C");
      } else {
        setColorSelect("#1C768F");
      }
  }, [screenWidth]);
  // Return typewriter effect
  return (
    <div className="typewriter">
      <div className="typewriterWrapper">
        <h2 className="typewriterTitle">Hello, I am</h2>
        <h1 className="typewriterName">Nicholas Kempkes</h1>
        <h3 className="typewriterSubtitle">A<span>
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Roboto Slab",
            fontSize: "2rem",
            color: colorSelect,
            textShadow: "white 0 0 0.5em"
          }}
          startDelay={100}
          cursorColor="#3F3D56"
          multiText={[
            "Software Engineer",
            "Web Developer",
            "Full Stack Developer",
            "Veteran",
            "Husband",
            "Father",
            "Student",
          ]}
          typeSpeed={75}
          multiTextDelay={2000}
          multiTextLoop={true}
          width="50%"
        />
        </span></h3>
      </div>
    </div>
  );
};

export default TypeWriter;
