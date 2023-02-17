import React from "react";
// Styling
import "./projects.css";
// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Images
import wagsandwalkies from "../../assets/wagsandwalkies.png";
import portfolioSite from "../../assets/portfolioSite.png";
import jobSearchingSite from "../../assets/jobSearch.png";
import eCommerce from "../../assets/eCommerce.jpg";

const Projects = () => {
  const list = {
    featured: {
      title: "Featured",
      image: wagsandwalkies,
      description:
        "Developed a fully functional website using Express.js and React, incorporating features such as a contact form, gallery for pet images, and a testimonial component to showcase customer feedback. Utilized CSS animations and SVG elements to create visually appealing and modern design elements, such as waves and other design flourishes.",
      link: "http://wagsandwalkies.dog/",
      repo: "https://github.com/kemp3673/WagsAndWalkies",
    },
    jobSearchingSite: {
      title: "Job Searching Site",
      image: jobSearchingSite,
      description:
        "As part of a large group project, I contributed to the development of a job searching and posting application designed for career changers. I was responsible for implementing integrations with the Google Calendar and Geocoding APIs, as well as utilizing PostgreSQL Geo-extensions, to provide advanced calendar and location-based features within the app. I also assisted in the development of a multi-page React application, complete with routing capabilities for different account types, ensuring a seamless user experience.",
      repo: "https://github.com/kemp3673/GreenHorn",
    },
    eCommerceService: {
      title: "E-Commerce Service",
      image: eCommerce,
      description:
        "As part of a collaborative effort, I participated in creating a new service application for an eCommerce website with legacy data. I was responsible for designing and developing a scalable RESTful API using Express.js and PostgreSQL, incorporating optimization techniques to enhance performance and minimize server load. This resulted in a capacity of 1,800 requests per second, providing exceptional performance for the end-users. I also ensured that the data shape returned by the API was consistent with the previous API, exceeding customer requirements and leaving room for future growth through scaling.",
      repo: "https://github.com/kemp3673/Project-Himalia",
    },
    portfolioSite: {
      title: "Portfolio Site",
      image: portfolioSite,
      description:
        "Personal Portfolio Website to showcase my skills and experience. Utilized React-Three-Fiber for a 3D element, CSS styling/animations, and added a resume download option and contact form. Implemented a full-stack solution using JavaScript, React, React-Three-Fiber, and CSS on the front-end and Node/Express in TypeScript on the back-end.",
      repo: "https://github.com/kemp3673/Portfolio-2.0",
    },
  };

  // Track selected project
  const [selected, setSelected] = React.useState(list.featured);
  // Update project when a new one is selected
  const handleChange = (e) => {
    document.querySelector(".selected").classList.remove("selected");
    setSelected(list[e.target.id]);
    e.target.classList.add("selected");
  };

  return (
    <div className="projects" id="projects">
      <h1>Portfolio</h1>
      <ul>
        <li id="featured" className="selected" onClick={(e) => handleChange(e)}>
          Featured
        </li>
        <li id="jobSearchingSite" onClick={(e) => handleChange(e)}>
          Job Searching Site
        </li>
        <li id="eCommerceService" onClick={(e) => handleChange(e)}>
          E-Commerce Service
        </li>
        <li id="portfolioSite" onClick={(e) => handleChange(e)}>
          Portfolio Site
        </li>
      </ul>
      <div className="portfolioContainer">
        <div className="portfolioItem">
          <div className="overlay">
            <img src={selected.image} alt={selected.title} />
          </div>
          <div className="description">
            <p>{selected.description}</p>
          </div>
        </div>
        <div className="portfolioLink">
          <span className="portfolioRepo">Check Out the Repo <ArrowForwardIcon style={{ fontSize: "32px" }}/></span>
          <a
            href={selected.repo}
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Github Repository"
            className="repo_link"
          >
            <GitHubIcon style={{ fontSize: "32px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
