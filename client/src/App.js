import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ReactGA from "react-ga";
import "./app.css";

//MEASUREMENT ID FOR GOOGLE ANALYTICS @ https://analytics.google.com/analytics/web/
// Replace with your Google Analytics tracking ID
const trackingId = "G-88F04Y470H";
ReactGA.initialize(trackingId);

// App.js
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