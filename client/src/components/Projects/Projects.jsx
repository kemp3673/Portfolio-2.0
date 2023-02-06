import React from "react";
import "./projects.css";
import GitHubIcon from '@mui/icons-material/GitHub';

// Images
import wagsandwalkies from "../../assets/wagsandwalkies.png";
import portfolioSite from "../../assets/portfolioSite.png";
import jobSearchingSite from "../../assets/jobSearch.png";
import eCommerce from "../../assets/eCommerce.jpg";

const Projects = () => {
  const list = {
    featured: {
      title: "Local Pet Walker",
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
      link: "http://wagsandwalkies.dog/",
      repo: "https://github.com/kemp3673/WagsAndWalkies",
    },
    eCommerceService: {
      title: "E-Commerce Service",
      image: eCommerce,
      description:
        "As part of a collaborative effort, I participated in creating a new service application for an eCommerce website with legacy data. I was responsible for designing and developing a scalable RESTful API using Express.js and PostgreSQL, incorporating optimization techniques to enhance performance and minimize server load. This resulted in a capacity of 1,800 requests per second, providing exceptional performance for the end-users. I also ensured that the data shape returned by the API was consistent with the previous API, exceeding customer requirements and leaving room for future growth through scaling.",
      link: "http://wagsandwalkies.dog/",
      repo: "https://github.com/kemp3673/WagsAndWalkies",
    },
    portfolioSite: {
      title: "Portfolio Site",
      image: portfolioSite,
      description:
        "Personal Portfolio Website to showcase my skills and experience. Utilized React-Three-Fiber for a 3D element, CSS styling/animations, and added a resume download option and contact form. Implemented a full-stack solution using JavaScript, React, React-Three-Fiber, and CSS on the front-end and Node/Express in TypeScript on the back-end.",
      link: "http://wagsandwalkies.dog/",
      repo: "https://github.com/kemp3673/WagsAndWalkies",
    },
  };

  const [selected, setSelected] = React.useState(list.featured);

  const handleChange = (e) => {
    document.querySelector(".selected").classList.remove("selected");
    setSelected(list[e.target.id]);
    e.target.classList.add("selected");
  };

  return (
    <div className="projects" id="projects">
      <h1>Portfolio</h1>
      <div className="portfolioContainer">
        {Object.keys(list).map((item) => (
          <div className="portfolioItem" key={item}>
            <div className="overlay">
              <h3 className="title">{list[item].title}</h3>
              <img src={list[item].image} alt={list[item].name + "image"} />
            </div>
            <div className="description">
              <p>{list[item].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

