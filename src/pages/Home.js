import React from "react";
import Aos from "aos";
import Weather from "../components/weather";
import smile from "../images/Hello_smile.png";

const Home = () => {
  React.useEffect(() => {
    Aos.init({ duration: 10000 });
  }, []);
  return (
    <div className="home">
      <>
        <h1>Hello</h1>
        <img src={smile} alt="smile" />
      </>
      <Weather/>
    </div>
  );
}

export default Home;