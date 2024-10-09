import React, { useState } from "react";
import Card from "../components/OurActivities/Card";
import icon1 from "../assets/OurActivities/icon1.svg";
import icon2 from "../assets/OurActivities/icon2.svg";
import icon3 from "../assets/OurActivities/icon3.svg";
import icon4 from "../assets/OurActivities/icon4.svg";

function OurActivities() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardData = [
    {
      icon: icon1,
      title: 'Video games',
      bg: "bg-blue-200",
      descriptiontoshow: "Members enjoy energetic video game sessions,",
      descriptionwhilehover: "creating a fun and collaborative gaming experience that brings our community together in shared digital adventures."
    },
    {
      icon: icon2,
      title: 'Board Games',
      bg: "bg-purple-50",
      descriptiontoshow: "Members enjoy energetic video game sessions,",
      descriptionwhilehover: "creating a fun and collaborative gaming experience that brings our community together in shared digital adventures."
    },
    {
      icon: icon3,
      title: 'Internal Matches',
      bg: "bg-purple-200",
      descriptiontoshow: "Members engage in lively sessions featuring Ludo, Dominoes, and Monopoly",
      descriptionwhilehover: "creating a fun and collaborative gaming experience that brings our community together in shared digital adventures."
    },
    {
      icon: icon4,
      title: 'Movie Night',
      bg: "bg-turquoise-50",
      descriptiontoshow: "We plan weekly movie nights on our Discord server, enabling members to watch and discuss films simultaneously.",
      descriptionwhilehover: "creating a fun and collaborative gaming experience that brings our community together in shared digital adventures."
    }
  ];

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col justify-center items-center w-3/5">
        <p>Our Activities</p>
        <div className="grid grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              bg={card.bg}
              descriptiontoshow={card.descriptiontoshow}
              descriptionwhilehover={card.descriptionwhilehover}
              isHovered={hoveredCard === index}
              shouldHideIcon={hoveredCard !== null && hoveredCard % 2 === index % 2 && hoveredCard !== index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurActivities;