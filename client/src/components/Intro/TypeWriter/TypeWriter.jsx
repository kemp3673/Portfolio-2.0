import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import "./typewriter.css";

const TypeWriter = () => {
  return (
    <div className="typewriter">
        <div className="typewriterWrapper">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Roboto Slab", fontSize: "2rem" }}
            startDelay={100}
            cursorColor="#3F3D56"
            text="Hello, I'm A"
            typeSpeed={75}
            hideCursorAfterText = {true}
            width="50%"
          />
          <TypeWriterEffect
            textStyle={{ fontFamily: "Roboto Slab", fontSize: "2rem", color: "blue" }}
            startDelay={1800}
            cursorColor="#3F3D56"
            multiText= {["Software Engineer", "Web Developer", "Full Stack Developer", "Veteran", "Husband", "Father", "Student"]}
            typeSpeed={75}
            multiTextDelay={2000}
            multiTextLoop={true}
            width="50%"
          />
      </div>
    </div>
  );
}

export default TypeWriter;