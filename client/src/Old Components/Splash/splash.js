import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import "./splash.css";

//TODO add three.js stuff here
// TODO utilize mp4 as texture on laptop model
// TODO place laptop model on page left side & typewriter text on right side
const Splash = () => {
  return (
    <div className="splash">
      <div className="splash__container">
        <div className="splash__container__text">
        <span className="typewriter">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Roboto", fontSize: "2rem" }}
            startDelay={100}
            cursorColor="#3F3D56"
            text="Hello, I'm A"
            typeSpeed={75}
            hideCursorAfterText = {true}
            width="50vw"
          />
          <TypeWriterEffect
            textStyle={{ fontFamily: "Roboto", fontSize: "2rem", color: "blue" }}
            startDelay={1800}
            cursorColor="#3F3D56"
            multiText= {["Software Engineer", "Web Developer", "Full Stack Developer", "Veteran", "Husband", "Father", "Student"]}
            typeSpeed={75}
            multiTextDelay={2000}
            multiTextLoop={true}
            width="50vw"
          />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Splash;