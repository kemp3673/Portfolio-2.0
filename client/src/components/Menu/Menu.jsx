import React, { useEffect, useRef } from "react";
// Utils
import scrollTo from "../../utils/scrollTo.js";
import resumeDownloader from "../../utils/resumeDownloader.js";
// Styling
import "./menu.css";
// Icons
import DownloadIcon from "@mui/icons-material/Download";

const Menu = ({ menuOpen, setMenuOpen }) => {
  // Function to scroll to element with util function and close menu
  const handleScroll = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };
  // Ref to hold modal element
  let ref = useRef();
  // Handle click outside of modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.className !== "hamburger" &&
        event.target.className !== "line1" &&
        event.target.className !== "line2" &&
        event.target.className !== "line3"
      ) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return (
    <div className={"menu " + (menuOpen && "active")} ref={ref}>
      <ul>
        <li onClick={() => handleScroll('#intro')}>
          {/*  TODO replace anchor tags with spans as #ID in the url is not needed for single page */}
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => handleScroll('#skills')}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => handleScroll('#projects')}>
          <a href="#projects">Portfolio</a>
        </li>
        <li onClick={() => handleScroll('#about')}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => handleScroll('#contact')}>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button className="resumeButton" onClick={(e) => resumeDownloader(e)}>
            <DownloadIcon className="downloadIcon" />
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
