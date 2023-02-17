import React from "react";
// Styling
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__header">
          <h1 className="skills__title">Skills</h1>
        </div>
        <div className="skills__content">
          <div className="skills__data">
            {/* Javascript */}
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
                alt="Javascript logo"
              />
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>
          {/* Java */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"
                alt="Java logo"
              />
              <h3 className="skills__name">Java</h3>
            </div>
          </div>
          {/* Typescript */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/typescript.png"
                alt="Typescript logo"
              />
              <h3 className="skills__name">Typescript</h3>
            </div>
          </div>
          {/* HTML */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt="HTML logo"
              />
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>
          {/* React */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt="React logo"
              />
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          {/* CSS */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="CSS logo"
              />
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>
          {/* Redux */}
          <div className="skills__data mobile_hide">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/redux.png"
                alt="Redux logo"
              />
              <h3 className="skills__name">Redux</h3>
            </div>
          </div>
          {/* Node */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt="Node logo"
              />
              <h3 className="skills__name">Node</h3>
            </div>
          </div>
          {/* Express.js */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/ios/48/null/express-js.png"
                alt="Express logo"
              />
              <h3 className="skills__name">Express</h3>
            </div>
          </div>
          {/* MongoDB */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt="MongoDB logo"
              />
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>
          {/* PostgreSQL */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/postgreesql.png"
                alt="PostgreSQL logo"
              />
              <h3 className="skills__name">PostgreSQL</h3>
            </div>
          </div>
          {/* MySQL */}
          <div className="skills__data">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/mysql-logo.png"
                alt="MySQL logo"
              />
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>
          {/* Jest */}
          <div className="skills__data mobile_hide">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png"
                alt="Jest logo"
              />
              <h3 className="skills__name">Jest</h3>
            </div>
          </div>
          {/* AWS */}
          <div className="skills__data mobile_hide">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
                alt="AWS logo"
              />
              <h3 className="skills__name">AWS</h3>
            </div>
          </div>
          {/* npm */}
          <div className="skills__data mobile_hide">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/npm.png"
                alt="npm logo"
              />
              <h3 className="skills__name">npm</h3>
            </div>
          </div>
          {/* Webpack */}
          <div className="skills__data mobile_hide">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/webpack.png"
                alt="Webpack logo"
              />
              <h3 className="skills__name">Webpack</h3>
            </div>
          </div>
          {/* Babel */}
          <div className="skills__data mobile_hide">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/dusk/48/null/babel.png"
                alt="Babel logo"
              />
              <h3 className="skills__name">Babel</h3>
            </div>
          </div>
          {/* Postman */}
          <div className="skills__data mobile_hide">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/dusk/48/null/postman-api.png"
                alt="Postman logo"
              />
              <h3 className="skills__name">Postman</h3>
            </div>
          </div>
          {/* Git */}
          <div className="skills__data mobile_hide">
            <div className="skills__titles">
              <img
                src="https://img.icons8.com/color/48/000000/git.png"
                alt="Git logo"
              />
              <h3 className="skills__name">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
