import React, { useState, useRef, useEffect } from "react";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import lead from "../assets/President.svg";
import vice from "../assets/Vice.svg";
import des1 from "../assets/Des1.svg";
import des2 from "../assets/Des2.svg";
import comm1 from "../assets/Comm1.svg";
import comm2 from "../assets/Comm2.svg";
import mult1 from "../assets/Multimidia1.svg";
import mult2 from "../assets/Multimidia2.svg";
import event1 from "../assets/Event1.svg";
import event2 from "../assets/Event2.svg";
import rh1 from "../assets/RH1.svg";
import rh2 from "../assets/RH2.svg";
import mark1 from "../assets/Marketing1.svg";
import mark2 from "../assets/Marketing2.svg";
import dev1 from "../assets/Dev1.svg";
import dev2 from "../assets/Dev2.svg";
import Slide from "../components/OurTeam/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurTeam = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(); // Active index state
  const [isInitialized, setIsInitialized] = useState(false); // Force re-render once Swiper is initialized

  const Team = [
    { Name: "Haddad Wassim", Role: "President", img: lead, color: "#B6CAFE" },
    {
      Name: "Khadir Amina",
      Role: "Vice-president",
      img: vice,
      color: "#CCBAFE",
    },
    { Name: "Hennane Douaa El-Ikhlas", Role: "HR", img: rh1, color: "#C653FB" },
    {
      Name: "Iyade Hamlaoui",
      Role: "HR",
      img: rh2,
      color: "rgba(15, 218, 254, 0.6)",
    },
    {
      Name: "Herkat Wifak",
      Role: "Design manager",
      img: des1,
      color: "#B6CAFE",
    },
    { Name: "Yasmine", Role: "Design manager", img: des2, color: "#CCBAFE" },
    {
      Name: "Beldjoudi Wassim",
      Role: "Multimidia manager",
      img: mult1,
      color: "#8747A5",
    },
    {
      Name: "Bensaci Redouane",
      Role: "Multimidia manager",
      img: mult2,
      color: "#259EB4",
    },
    {
      Name: "Boudiaf Fadia",
      Role: "Communication manager",
      img: comm1,
      color: "#B6CAFE",
    },
    {
      Name: "Zemmouri Faysal",
      Role: "Event manager",
      img: event2,
      color: "#CCBAFE",
    },
    {
      Name: "Choukrane Yasmine",
      Role: "Marketing manager",
      img: mark1,
      color: "#259EB4",
    },
    {
      Name: "Laouzai Lina",
      Role: "Marketing manager",
      img: mark2,
      color: "#8747A5",
    },
    {
      Name: "Bellala Hanane",
      Role: "Communication manager",
      img: comm2,
      color: "#CCBAFE",
    },
    {
      Name: "Seddiki Wassim",
      Role: "Event manager",
      img: event1,
      color: "#B6CAFE",
    },
    {
      Name: "Messikh Wissal",
      Role: "Dev manager",
      img: dev1,
      color: "#8747A5",
    },
    {
      Name: "Akhrib Abderahmane",
      Role: "Dev manager",
      img: dev2,
      color: "#259EB4",
    },
  ];

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

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <div
      id="Team"
      className="flex flex-col items-center my-8  sm:flex-row md:px-10 ">
      <div className="flex text-purple justify-between gap-6 sm:gap-12 h-full text-center flex-col w-full sm:text-start sm:w-1/3">
        <div className="flex flex-col gap-4">
          <h1 className="hidden lg:flex flex-col gap-[20px] sm:text-4xl text-title-mobile sm:font-montserrat sm:font-extrabold xl:text-title-desktop ">
            Meet Our Team
          </h1>
          <h1 className="lg:hidden text-title-mobile font-montserrat font-extrabold ">
            Meet Our Team
          </h1>
          <p className="text-text-mobile lg:text-[18px]">
            Creative minds working together to bring our goals to life and
            create amazing experiences for everyone.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center sm:justify-start mb-5 sm:gap-12 gap-10">
          <div
            className=" w-10 h-10 sm:w-10 sm:h-10 flex justify-center items-center rounded-full  border-pink border-[1.5px]  bg-whiterounded-full cursor-pointer"
            onClick={handlePrev}>
            <GrLinkPrevious className="w-6 sm:w-6 stroke-pink cursor-pointer" />
          </div>
          <div
            className=" w-10 h-10 sm:w-10 sm:h-10 flex justify-center items-center rounded-full  bg-pink  cursor-pointer"
            onClick={handleNext}>
            <GrLinkNext className="w-6 sm:w-6 stroke-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="w-full xl:px-11 items-center md:w-[500px] lg:w-[600px] xl:w-[920px] lg:pl-[20px] ">
        <AnimatePresence>
          <motion.div>
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Navigation, A11y]}
              spaceBetween={30}
              slidesPerView={1.5}
              centeredSlides:true
              loop
              speed={1000}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 5,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                  centeredSlides: true,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                  centeredSlides: true,
                },
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              onInit={(swiper) => {
                swiper.update();
                setIsInitialized(true);
              }}>
              {Team.map((member, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: activeIndex === index ? "50%" : "20%", // Correctly using strings for percentages
                    transition: "width 0.5s ease",
                  }}>
                  <div
                    className={`transition-all duration-500`}
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                    }}>
                    <Slide
                      image={member.img}
                      name={member.Name}
                      role={member.Role}
                      color={member.color}
                      active={activeIndex === index ? "1" : "0"}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OurTeam;
