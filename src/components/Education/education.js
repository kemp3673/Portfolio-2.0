import React from 'react';
import { Chrono } from "react-chrono";
import { EducationData } from '../../Data/data';

const Education = () => {
  const items = [];
  EducationData.forEach((item) => {
    items.push({
      title: item.school,
      cardTitle: item.degree,
      cardSubtitle: item.year,
      //cardDetailedText: item.description,
      media: {
        type: 'IMAGE',
        source: {
          url: item.image
        }
      },
    });
  });

  return (
    <div className="education" style={{width:"100vw", height: "fit-content", justifyContent: "center"}}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" enableOutline="true" mediaHeight="50" theme={{primary: "blue", secondary: "orange", cardBgColor: "white", cardForeColor: "green"}} />
    </div>
  );
};

export default Education;