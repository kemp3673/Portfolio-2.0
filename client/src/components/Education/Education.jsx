import React, { useState } from "react";
import { Chrono } from "react-chrono";
import { EducationData } from "../../Data/data";
import SchoolIcon from '@mui/icons-material/School';
import "./education.css";

const Education = () => {
  const items = [];
  EducationData.forEach((item) => {
    items.push({
      title: item.year,
      cardTitle: item.degree,
      cardSubtitle: item.school,
      cardDetailedText: item.description,
      media: {
        type: "IMAGE",
        source: {
          url: item.image,
        },
      },
    });
  });

  return (
    // TODO dont think this style is working
    // TODO wrap in a container
    <div className="education" id="education">
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        mediaHeight="75"
        useReadMore="true"
        scrollable="false"
        hideControls="true"
        disableNavOnKey="true"
        disableClickOnCircle="true"
        theme={{
          primary: "black",
          secondary: "#ffffff00",
          cardBgColor: "white",
          cardForeColor: "black",
          titleColor: "black",
          titleColorActive: "black",
        }}
      >
        {/* <div className="chrono-icons">
          <img src={SchoolIcon} alt="graduation cap" />
          <img src={SchoolIcon} alt="graduation cap" />
          <img src={SchoolIcon} alt="graduation cap" />
        </div> */}
      </Chrono>
    </div>
  );
};

export default Education;
