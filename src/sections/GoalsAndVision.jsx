import { useState, useRef, useEffect } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../components/goalsAndVision/Card";
const Goals = () => {
  const swiperRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const cards = [
    {
      title: "Participation",
      description:
        "Encourage all students to join sports events, improve skills, and enjoy physical activity.",
    },
    {
      title: "Innovation",
      description:
        "Use technology in events for learning new skills and exciting experiences.",
    },
    {
      title: "Inclusion",
      description:
        "Offer diverse activities to ensure everyone feels welcome, regardless of interests.",
    },
    {
      title: "Balance",
      description:
        "Organize fun events that balance academics with relaxation and enjoyment.",
    },
    {
      title: "Community",
      description:
        "Create a friendly space where students can connect, make friends, and bond.",
    },
    {
      title: "Leadership",
      description:
        "Foster leadership qualities through team-based activities and mentoring.",
    },
  ];

  return (
    <div
      id="GoalsVision"
      className="overflow-hidden flex flex-col w-full md:py-[15px] md:px-[81px] md:gap-[60px] gap-[15.95px] items-center justify-center">
      <p className="my-4 md:my-8 font-montserrat text-title-mobile lg:text-title-desktop font-[800]">
        Goals&Vision
      </p>
      <div className="w-full flex flex-col">
        <div className="xl:max-w-[1200px] mx-auto w-full">
          <Swiper
            ref={swiperRef}
            centeredSlides={true}
            modules={[Navigation, Pagination]}
            spaceBetween={screenWidth > 800 ? 20 : screenWidth > 600 ? 10 : 80}
            slidesPerView={screenWidth > 800 ? 3 : screenWidth > 600 ? 3 : 2.5}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            loop={true}>
            {cards.map((goal, index) => (
              <SwiperSlide key={index}>
                <Card goal={goal} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Navigation */}
      <div className=" flex flex-row justify-center items-center sm:justify-start mb-5 sm:gap-12 gap-10">
        <div
          className=" md:w-10 w-7 md:h-10 h-7 sm:md:w-10  sm:md:h-10  flex justify-center items-center rounded-full  bg-pink  cursor-pointer"
          onClick={handlePrev}>
          <GrLinkPrevious className="w-4 md:w-6 stroke-white cursor-pointer" />
        </div>
        <div
          className=" md:w-10  md:h-10 h-7 sm:md:w-10 w-7 sm:md:h-10  flex justify-center items-center rounded-full  bg-white cursor-pointer"
          onClick={handleNext}>
          <GrLinkNext className="w-4 md:w-6 stroke-pink" />
        </div>
      </div>
    </div>
  );
};

export default Goals;
