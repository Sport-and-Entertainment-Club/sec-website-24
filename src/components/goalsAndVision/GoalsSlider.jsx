import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GoalsSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3.25);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
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

  const handleAfterChange = (current) => {
    window.innerWidth > 600
      ? window.innerWidth > 800
        ? setCurrentSlide(Math.floor(current / 3))
        : setCurrentSlide(Math.floor(current / 2))
      : setCurrentSlide(current);
  };

  // Slider settings
  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll:
      window.innerWidth > 600 ? (window.innerWidth > 800 ? 3 : 2) : 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    speed: 500,
    afterChange: handleAfterChange,
    outerWidth: window.innerWidth,
    innerWidth: 0.5 * window.innerWidth,
    ref: sliderRef,
    nextArrow: <></>,
    backArrow: <></>,
  };

  return (
    <div className="w-full  -z-1">
      <Slider {...settings}>
        {goals.map((goal, index) => (
          <Card goal={goal} key={index} />
        ))}
      </Slider>
      <CustomWormIndicator
        sliderRef={sliderRef}
        slidesToScroll={
          window.innerWidth > 600 ? (window.innerWidth > 800 ? 3 : 2) : 1
        }
        currentSlide={currentSlide}
        totalSlides={
          window.innerWidth > 600
            ? window.innerWidth > 800
              ? Math.ceil(goals.length / 3)
              : Math.ceil(goals.length / 2)
            : goals.length
        }
      />
    </div>
  );
};
const CustomWormIndicator = ({
  currentSlide,
  totalSlides,
  sliderRef,
  slidesToScroll,
}) => {
  const isMobile = window.innerWidth < 600;

  const handleDotClick = (index) => {
    const targetSlide = index * slidesToScroll;
    sliderRef.current.slickGoTo(targetSlide);
  };
  return (
    <div className="  mx-auto w-[90px] md:w-full worm-indicator gap-[4.58px] md:gap-[9px] pt-[19.86px]  flex justify-center">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`worm-dot ${index === currentSlide ? "active" : ""}`}
          onClick={() => handleDotClick(index)}
          style={{
            width:
              index === currentSlide
                ? isMobile
                  ? "33px"
                  : "66px"
                : isMobile
                ? "5px"
                : "11px",
            height: isMobile ? "5px" : "11px",
            backgroundColor: index === currentSlide ? "#9974FC" : "#CCBAFE",
            borderRadius: "10px",
            transition: "width 0.3s, background-color 0.3s",
          }}></div>
      ))}
    </div>
  );
};

export default GoalsSlider;
