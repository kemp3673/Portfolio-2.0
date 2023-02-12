import React, { useState } from "react";
import ReactGA from "react-ga";

import TopBar from "../components/TopBar/TopBar.jsx";
import Menu from "../components/Menu/Menu.jsx";
import Intro from "../components/Intro/Intro.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Contact from "../components/Contact/Contact.jsx";


import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Intro />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
