import React from "react";
import Aos from "aos";
import smile from "../images/Hello_smile.png";

const Home = () => {
  React.useEffect(() => {
    Aos.init({ duration: 10000 });
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__left">
          <h1 data-aos="fade-right">Hello, I'm</h1>
          <h1 data-aos="fade-right">Nicholas</h1>
          <h1 data-aos="fade-right">I'm a</h1>
          <h1 data-aos="fade-right">Web Developer</h1>
        </div>
        <div className="home__container__right">
          <img
            data-aos="fade-left"
            src={smile}
            alt="Hello Smile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;