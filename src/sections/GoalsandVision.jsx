import React, { useState, useRef } from "react";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

const Goals = () => {
    const cards = [
        { title: "Participation", description: "Encourage all students to join sports events, improve skills, and enjoy physical activity." },
        { title: "Innovation", description: "Use technology in events for learning new skills and exciting experiences." },
        { title: "Inclusion", description: "Offer diverse activities to ensure everyone feels welcome, regardless of interests." },
        { title: "Balance", description: "Organize fun events that balance academics with relaxation and enjoyment." },
        { title: "Community", description: "Create a friendly space where students can connect, make friends, and bond." },
        { title: "Leadership", description: "Foster leadership qualities through team-based activities and mentoring." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [customTransition, setCustomTransition] = useState(false);
    const touchStartRef = useRef(null);
    const touchEndRef = useRef(null);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < cards.length - 3 ? prevIndex + 1 : 0
        );
        setCustomTransition(true);  // Enable custom transition for the next slide
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : cards.length - 3
        );
        setCustomTransition(true);  // Enable custom transition for the previous slide
    };

    // Handling touch events
    const handleTouchStart = (e) => {
        touchStartRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartRef.current && touchEndRef.current) {
            const distance = touchStartRef.current - touchEndRef.current;
            // Swipe left (next)
            if (distance > 50) {
                nextSlide();
            }
            // Swipe right (previous)
            else if (distance < -50) {
                prevSlide();
            }
        }
    };

    return (
        <div
            className="flex flex-col w-full md:py-[10px] md:px-[81px] md:gap-[60px] gap-[51.95px] items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <p className="text-[32px] md:text-[64px] text-title font-bold font-montserrat">
                Goals&Vision
            </p>
            <div className="flex gap-[32.85px] md:gap-[48px] items-center justify-between">
                {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
                    <div
                        key={index}
                        className={`w-[224.45px] h-[104.93px] gap-[10.95] md:w-[410px] md:h-[188.8px] flex flex-col md:gap-[20px] bg-purple-50 hover:bg-hover-purple py-[10.95px] px-[24.64px] md:py-[20px] md:px-[45px] rounded-xl shadow-lg text-center custom-card hover:bg-purple-700 transform transition-transform duration-2000 hover:-translate-y-5 swiper-slide ${customTransition ? 'custom-transition' : ''}`}
                    >
                        <h2 className="text-[15.33px] font-montserrat md:text-[28px] mt-2 md:mt-3 font-bold text-purple-800">
                            {card.title}
                        </h2>
                        <p className="text-[9.85px] md:text-[18px] text-purple-700 font-poppins">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="hidden md:flex w-full justify-end mt-4 md:gap-[50px] md:mr-[100px]">
                <button onClick={prevSlide} className="text-pink font-extralight hover:text-white hover:bg-pink rounded-full">
                    <SlArrowLeftCircle size={52} />
                </button>
                <button onClick={nextSlide} className="text-pink font-extralight hover:text-white hover:bg-pink rounded-full">
                    <SlArrowRightCircle size={52} />
                </button>
            </div>
        </div>
    );
};

export default Goals;
