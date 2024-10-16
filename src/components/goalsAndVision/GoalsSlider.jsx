import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Card from "./Card";

const GoalsSlider = ({ ref }) => {
  const [slidesToShow, setSlidesToShow] = useState(3.25);
  const goals = [
    {
      title: "Participation",
      description:
        "Encourage all students to join sports goals, improve skills, and enjoy physical activity",
    },
    {
      title: "Innovation",
      description:
        "Offer diverse activities to ensure everyone feels welcome, regardless of interests",
    },
    {
      title: "Balance",
      description:
        "Organize fun goals that balance academics with relaxation and enjoyment",
    },
    {
      title: "Community",
      description:
        "Create a friendly space where students can connect, make friends, and bond",
    },
  ];

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth > 800) {
        setSlidesToShow(3);
      } else if (window.innerWidth > 520) {
        setSlidesToShow(2);
      } else if (window.innerWidth > 410) {
        setSlidesToShow(2);
      } else if (window.innerWidth > 345) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1.75);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return <div className="w-full  -z-1"></div>;
};

export default GoalsSlider;
