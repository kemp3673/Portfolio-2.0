import React, { useEffect, useRef } from "react";
import DownloadIcon from '@mui/icons-material/Download';
import axios from "axios";
import FileDownload from 'js-file-download';
import "./menu.css";

const Menu = ({ menuOpen, setMenuOpen }) => {

  const sidebarClickHandler = () => {
    setMenuOpen(false);
  };

  // Ref to hold modal element
  let ref = useRef();
  // Handle click outside of modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target) && event.target.className !== "hamburger" && event.target.className !== "line1" && event.target.className !== "line2" && event.target.className !== "line3") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  // Function will execute on click of button
  const resumeDownloader = (e) => {
    console.log('resumeDownloader() called');
    e.preventDefault();
    axios.get('/downloadPDF', {
      responseType: 'blob'
      })
      .then((res) => {
        console.log("res.data: ", res.data);
        FileDownload(res.data, 'Nicholas_Kempkes_resume.pdf');
      })
      .catch((err) => {
        alert('Error downloading file. Please try again later.');
      });
  };

  //TODO add ref to menu and add event listener to close menu when clicking outside of menu
  return (
    <div className={"menu " + (menuOpen && "active")} ref={ref}>
      <ul>
        <li onClick={() => sidebarClickHandler()}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => sidebarClickHandler()}>
          <a href="#projects">Portfolio</a>
        </li>
        <li onClick={() => sidebarClickHandler()}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => sidebarClickHandler()}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="resumeButton" onClick={e => resumeDownloader(e)}><DownloadIcon className="downloadIcon"/>Resume</button>
    </div>
  );
}

export default Menu;