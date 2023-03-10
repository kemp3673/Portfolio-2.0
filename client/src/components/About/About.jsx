import React from "react";
import "./about.css";
// Utils
import resumeDownloader from "../../utils/resumeDownloader.js";
// Material UI Icons
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
          <span className="aboutDescription">
          I am a recent bootcamp graduate with a Bachelor's degree in Project Management, pursuing a second Bachelor's degree in Information Technology with a concentration in programming. I have a strong foundation in software engineering with proficiency in technologies like JavaScript, Node.js, React, SQL, and NoSQL databases. With six years of experience as a Geospatial analyst in the Air Force, I have a unique perspective on project management. I am passionate about technology, eager to apply my skills and experience to new challenges in the industry. In my free time, I enjoy hobbies such as Dungeons and Dragons, 3D printing, video games, and PC building/repair. I am excited for the next big thing in my life and always looking for opportunities to learn, grow and make an impact in my field.
            <span>
              <br />
              <div className="socialLinks">
                <a
                  href="https://www.linkedin.com/in/nicholas-kempkes/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to LinkedIn Profile"
                  className="links"
                >
                  <LinkedInIcon style={{ fontSize: "32px" }} />
                </a>
                <a
                  href="https://github.com/kemp3673"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to Github Profile"
                  className="links"
                >
                  <GitHubIcon style={{ fontSize: "32px" }} />
                </a>
                <img src="https://img.icons8.com/ios/50/null/open-resume.png" alt="Resume" aria-label="Download Resume" className="links"
                onClick={() => resumeDownloader()}/>
              </div>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
