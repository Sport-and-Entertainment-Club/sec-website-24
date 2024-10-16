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
import Image from "../components/OurTeam/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurTeam = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Active index state
  const [isInitialized, setIsInitialized] = useState(false); // Force re-render once Swiper is initialized
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const Team = [
    { Name: "Haddad Wassim", Role: "President", img: lead, color: "#B6CAFE" },
    {
      Name: "Khadir Amina",
      Role: "Vice-president",
      img: vice,
      color: "#CCBAFE",
    },
    {
      Name: "Hennane Douaa El-Ikhlas",
      Role: "HR",
      img: rh1,
      color: "#C653FB",
    },
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
      Name: "Seddiki Wassim",
      Role: "Event manager",
      img: event1,
      color: "#B6CAFE",
    },
    {
      Name: "Bellala Hanane",
      Role: "Communication manager",
      img: comm2,
      color: "#CCBAFE",
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
    setScreenWidth(window.innerWidth);
  }, [activeIndex]);

  return (
    <div
      id="Team"
      className=" md:mt-[80px] flex flex-col md:grid md:grid-cols-[35%,65%] items-center my-8 px-[10px] md:px-[3%] md:h-full md:my-auto w-[97vw] md:w-[95vw] mx-auto">
      <div className="w-[85%]">
        <div className="flex flex-col gap-4">
          <p className="text-center md:text-start leading-[30px] lg:leading-[55px] text-title-mobile lg:text-title-desktop font-[800]">
            Meet Our Team
          </p>
          <p className="md:text-start text-center text-text-mobile lg:text-[18px]">
            Creative minds working together to bring our goals to life and
            create amazing experiences for everyone.
          </p>
        </div>
        {/* Navigation */}
        <div className="pt-[20px] md:pt-[50px] flex flex-row justify-center items-center sm:justify-start mb-5 sm:gap-12 gap-10">
          <div
            className=" md:w-10 w-7 md:h-10 h-7 sm:md:w-10  sm:md:h-10  flex justify-center items-center rounded-full  bg-pink  cursor-pointer"
            onClick={handlePrev}>
            <GrLinkPrevious className="w-4 md:w-6 stroke-white cursor-pointer" />
          </div>
          <div className=" md:w-10  md:h-10 h-7 sm:md:w-10 w-7 sm:md:h-10  flex justify-center items-center rounded-full  bg-white  cursor-not-allowed">
            <GrLinkNext className="w-4 md:w-6 stroke-pink" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        <motion.div className="z-0 w-full">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Navigation, A11y]}
            centeredSlides={false}
            slidesPerView="auto"
            slidePrev={false}
            loop
            speed={1000}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            spaceBetween={5}
            onInit={(swiper) => {
              swiper.update();
              setIsInitialized(true);
            }}>
            {Team.map((member, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width:
                    screenWidth >= 1024
                      ? activeIndex === index
                        ? "300px" // Large screen width for active slide
                        : "150px" // Large screen width for inactive slide
                      : screenWidth >= 768
                      ? activeIndex === index
                        ? "250px" // Medium screen width for active slide
                        : "120px" // Medium screen width for inactive slide
                      : activeIndex === index
                      ? "200px" // Small screen width for active slide
                      : "100px", // Small screen width for inactive slide                  transition: "width 0.5s ease",
                }}>
                <div
                  className={`transition-all duration-500`}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                  }}>
                  <Image
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
  );
};

export default OurTeam;
