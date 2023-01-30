import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReactGA from "react-ga";
import "./main.css";
import smile from "./images/Hello_smile.png";

//MEASUREMENT ID FOR GOOGLE ANALYTICS @ https://analytics.google.com/analytics/web/
const trackingId = "G-88F04Y470H"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;