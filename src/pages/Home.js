import React from "react";
import Aos from "aos";
import Weather from "../components/Weather/weather";
import Education from "../components/Education/education";
import TicTacToe from "../components/Games/TicTacToe/TicTacToe";
import Projects from "../components/Projects/projects";
import smile from "../images/Hello_smile.png";

const Home = () => {
  React.useEffect(() => {
    Aos.init({ duration: 10000 });
  }, []);
  return (
    <div className="home">
      <Weather/>
      <Education/>
      <Projects/>
      <TicTacToe/>
    </div>
  );
}

export default Home;