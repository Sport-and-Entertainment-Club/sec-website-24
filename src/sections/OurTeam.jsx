import React, { useState, useRef, useEffect } from 'react';
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import lead from '../assets/President.svg';
import vice from '../assets/Vice.svg';
import des1 from '../assets/Des1.svg';
import des2 from '../assets/Des2.svg';
import comm1 from '../assets/Comm1.svg';
import comm2 from '../assets/Comm2.svg';
import mult1 from '../assets/Multimidia1.svg';
import mult2 from '../assets/Multimidia2.svg';
import event1 from '../assets/Event1.svg';
import event2 from '../assets/Event2.svg';
import rh1 from '../assets/RH1.svg';
import rh2 from '../assets/RH2.svg';
import mark1 from '../assets/Marketing1.svg';
import mark2 from '../assets/Marketing2.svg';
import dev1 from '../assets/Dev1.svg';
import dev2 from '../assets/Dev2.svg';
import Slide from '../components/OurTeam/Image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurTeam = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState();  // Active index state
    const [isInitialized, setIsInitialized] = useState(false); // Force re-render once Swiper is initialized

    const Team = [
        { Name: "Haddad Wassim", Role: "President", img: lead, color: "#B6CAFE" },
        { Name: "Khadir Amina", Role: "Vice-president", img: vice, color: "#CCBAFE" },
        { Name: "Hennane Douaa El-Ikhlas", Role: "HR", img: rh1, color: "#C653FB" },
        { Name: "Iyade Hamlaoui", Role: "HR", img: rh2, color: 'rgba(15, 218, 254, 0.6)' },
        { Name: "Herkat Wifak", Role: "Design manager", img: des1, color: "#B6CAFE" },
        { Name: "Yasmine", Role: "Design manager", img: des2, color: "#CCBAFE" },
        { Name: "Beldjoudi Wassim", Role: "Multimidia manager", img: mult1, color: "#8747A5" },
        { Name: "Bensaci Redouane", Role: "Multimidia manager", img: mult2, color: "#259EB4" },
        { Name: "Boudiaf Fadia", Role: "Communication manager", img: comm1, color: "#B6CAFE" },
        { Name: "Zemmouri Faysal", Role: "Event manager", img: event2, color: "#CCBAFE" },
        { Name: "Choukrane Yasmine", Role: "Marketing manager", img: mark1, color: "#259EB4" },
        { Name: "Laouzai Lina", Role: "Marketing manager", img: mark2, color: "#8747A5" },
        { Name: "Bellala Hanane", Role: "Communication manager", img: comm2, color: "#CCBAFE" },
        { Name: "Seddiki Wassim", Role: "Event manager", img: event1, color: "#B6CAFE" },
        { Name: "Messikh Wissal", Role: "Dev manager", img: dev1, color: "#8747A5" },
        { Name: "Akhrib Abderahmane", Role: "Dev manager", img: dev2, color: "#259EB4" },
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
        <div className='flex flex-col items-center my-8 justify-between sm:flex-row px-10 sm:px-20'>
            <div className='flex text-purple justify-between gap-12 h-full text-center flex-col w-full sm:text-start sm:w-1/3'>
                <div className='flex flex-col gap-4'>
                    <h1 className="hidden sm:flex sm:text-4xl text-title-mobile sm:font-montserrat sm:font-extrabold">
                        Meet <br /> Our Team
                    </h1>
                    <h1 className="sm:hidden text-3xl font-montserrat font-extrabold">
                        Meet Our Team
                    </h1>
                    <p className='text-text-mobile sm:text-text-desktop'>
                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam.
                    </p>
                </div>
                <div className='flex flex-row justify-center sm:justify-start sm:gap-12 gap-4'>
                    <SlArrowLeftCircle className='  w-8 sm:w-10 fill-pink cursor-pointer' onClick={handlePrev} />
                    <SlArrowRightCircle className='w-8 sm:w-10 fill-pink cursor-pointer' onClick={handleNext} />
                </div>
            </div>

            <div className='w-full sm:w-[65%]'>
                <AnimatePresence>
                    <motion.div>
                        <Swiper
                            ref={swiperRef}
                            modules={[Pagination, Navigation, A11y]}
                            spaceBetween={10}
                            slidesPerView={1.5}
                            loop
                            speed={1000}
                            breakpoints={{
                                120: {
                                    slidesPerView: 1.25,
                                    centeredSlides: true,
                                    spaceBetween: 10,
                                },

                                320: {
                                    slidesPerView: 1.25,
                                    centeredSlides: true,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 5,
                                    centeredSlides: false,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    centeredSlides: false,
                                    spaceBetween: 5,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                    centeredSlides: false,
                                },
                                1280: {
                                    slidesPerView: 4.5,
                                    centeredSlides: false,
                                    spaceBetween: 5,
                                },
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.realIndex);
                            }}
                            onInit={(swiper) => {
                                swiper.update();
                                setIsInitialized(true);
                            }}
                        >

                            {Team.map((member, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        width: activeIndex === index ? '50%' : '20%',  // Correctly using strings for percentages
                                        transition: 'width 0.5s ease'
                                    }}
                                >
                                    <div
                                        className={`transition-all duration-500`}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'start',
                                            alignItems: 'start',
                                        }}
                                    >
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
