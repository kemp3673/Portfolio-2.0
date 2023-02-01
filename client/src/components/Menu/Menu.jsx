import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import axios from "axios";
import FileDownload from 'js-file-download';
import "./menu.css";

const Menu = ({ menuOpen, setMenuOpen }) => {

  const sidebarClickHandler = () => {
    setMenuOpen(false);
  };

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
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => sidebarClickHandler()}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => sidebarClickHandler()}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => sidebarClickHandler()}>
          <a href="#projects">Projects</a>
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