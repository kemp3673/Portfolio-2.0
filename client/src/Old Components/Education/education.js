import React, { useState } from 'react';
import { Chrono } from "react-chrono";
import { EducationData } from '../../Data/data';
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
        type: 'IMAGE',
        source: {
          url: item.image
        }
      },
    });
  });

  return (
    // TODO dont think this style is working
    // TODO wrap in a container
    <div className="education" style={{width:"95vw", height: "fit-content", justifyContent: "center", padding: "1rem"}}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" disableNavOnKey="true" hideControls="true" mediaHeight="50" theme={{primary: "blue", secondary: "white", cardBgColor: "white", cardForeColor: "gray", titleColor:"black"}} />
    </div>
  );
};

export default Education;