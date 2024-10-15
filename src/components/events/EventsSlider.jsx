import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import EventCard from "./EventCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventsSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3.25);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const events = [
    {
      title: "ESI Cup",
      description:
        "ESI CUP is a football tournament where teams gather and compete to become the CHAMPION. Every team competes to be among the top 2 in their group to qualify for the knockout matches. The best 8 teams will then face off in a knockout stage to determine the winner and the champion of the year.",
      image: "./assets/images/events/esi-cup.svg",
    },
    {
      title: "SEC Fantasy",
      description:
        "SEC Fantasy is a Premier League Fantasy competition where Players compete every week by managing their own football teams. Participants earn points based on real life player performances to climb the leaderboard. It's all about strategy, football knowledge, and a bit of luck.",
      image: "./assets/images/events/sec-fantasy.svg",
    },
    {
      title: "ESI olympics",
      description:
        "ESI Olympics, a smaller-scale version of the Olympics organized by SEC, offers a variety of sports, including basketball, handball, ping pong, and marathon. It serves both seasoned athletes and newcomers.",
      image: "./assets/images/events/esi-olympics.svg",
    },
    {
      title: "Chess Break",
      description:
        "ESI CUP is a football tournament where teams gather and compete to become the CHAMPION. Every team competes to be among the top 2 in their group to qualify for the knockout matches. The best 8 teams will then face off in a knockout stage to determine the winner and the champion of the year.",
      image: "./assets/images/events/chess-break.svg",
    },
    {
      title: "The Smash",
      description:
        "THE SMASH is a table tennis tournament organized by SEC. It’s an event where players of all skill levels can compete, showcase their talent, and enjoy the game. Participants will compete in exciting matches and rounds, all trying to reach the final and claim the Champion title.",
      image: "./assets/images/events/the-smash.svg",
    },
    {
      title: "Py.Pong",
      description:
        "Py.PONG is a collaboration between SEC and WTM Algiers, featuring workshops and a ping pong competition. An exclusive opportunity for girls to learn and have fun !",
      image: "./assets/images/events/esi-cup.svg",
    },
    {
      title: "CHESSTIN",
      description:
        "CHESSTIN is a chess competition and a collaboration between SEC and ByteCraft, which took place in both Algiers and Bejaia. A fantastic opportunity for chess enthusiasts to learn, have fun, and connect with fellow players.",
      image: "./assets/images/events/esi-cup.svg",
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
        setSlidesToShow(1.8);
      } else if (window.innerWidth > 345) {
        setSlidesToShow(1.75);
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
        {events.map((event, index) => (
          <EventCard event={event} key={index} />
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
              ? Math.ceil(events.length / 3)
              : Math.ceil(events.length / 2)
            : events.length
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
    <div className="mx-auto w-[90px] md:w-full worm-indicator gap-[4.58px] md:gap-[9px] pt-[19.86px]  flex justify-center">
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

export default EventsSlider;
