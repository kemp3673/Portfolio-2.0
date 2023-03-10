import React, { useState } from "react";
// Components
import TopBar from "../components/TopBar/TopBar.jsx";
import Menu from "../components/Menu/Menu.jsx";
import Intro from "../components/Intro/Intro.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Contact from "../components/Contact/Contact.jsx";
// Styling
import "./home.css";

const Home = () => {
  // Open state for menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Intro />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
