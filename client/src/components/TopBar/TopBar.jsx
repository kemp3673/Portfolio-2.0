import React, { useEffect } from "react";
// Utils
import scrollTo from "../../utils/scrollTo.js";
// Styling
import "./topbar.css";
// Icons
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailIcon from '@mui/icons-material/Mail';

const TopBar = ({menuOpen, setMenuOpen}) => {
  // Function to toggle menu open and closed
  const menuClickHandler = (e) => {
      setMenuOpen(!menuOpen);
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="left">
        <span className="logo" onClick = {() => scrollTo('#intro')}>
          Nick K.
        </span>
        <div className="itemContainer">
          <PhoneAndroidIcon className="icon" />
          <span className="contact-icon">+1 218 770 3673</span>
          <MailIcon className="icon" />
          <span className="contact-icon">nicholas.kempkes@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={(e) => menuClickHandler(e)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
