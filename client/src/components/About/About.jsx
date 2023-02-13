import React from "react";
import "./About.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="aboutContainer">
        <div className="aboutLeft">
          <div className="imageWrapper">
            <img
              src="https://avatars.githubusercontent.com/u/102747919?v=4"
              alt="Profile"
              className="aboutImg"
            />
          </div>
        </div>
        <div className="aboutRight">
          <p className="aboutDescription">
            I am a recent bootcamp graduate with a Bachelor's degree in Project
            Management and currently pursuing a second Bachelor's degree in
            Information Technology with a concentration in programming. I have a
            strong foundation in advanced software engineering and proficiency
            in technologies such as JavaScript, Node.js, React, SQL, and NoSQL
            databases. My six years of experience as a Geospatial analyst in the
            Air Force has given me a unique perspective on project management. I
            am a lifelong learner with a passion for technology, and I am eager
            to apply my skills and experience to new challenges in the industry.
            In my free time, I enjoy hobbies such as Dungeons and Dragons, 3D
            printing, video games and PC building/repair. I am excited for the
            next big thing in my life and enjoy taking on challenges, I am
            always looking for opportunities to learn, grow and make an impact
            in my field.
            <span>
              <br />
              <div className="socialLinks">
                <a
                  href="https://www.linkedin.com/in/nicholas-kempkes/"
                  target="_blank"
                  rel="noreferrer"
                  ariaLabel="Link to LinkedIn Profile"
                  className="links"
                >
                  <LinkedInIcon style={{ fontSize: "32px" }} />
                </a>
                <a
                  href="https://github.com/kemp3673"
                  target="_blank"
                  rel="noreferrer"
                  ariaLabel="Link to Github Profile"
                  className="links"
                >
                  <GitHubIcon style={{ fontSize: "32px" }} />
                </a>
              </div>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
