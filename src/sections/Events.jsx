import React from "react";
import EventsSlider from "../components/events/EventsSlider";
const Events = () => {
  return (
    <div
      id="Events"
      className=" md:mx-auto md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1320px] flex flex-col  items-center justify-center text-purple md:px-[70px] lg:px-[3%] xl:px-[2%]   pb-[30px] md:pb-[0px]">
      <p className="  md:text-[40px] text-title-mobile lg:text-[50px] xl:text-title-desktop font-[800] font-montserrat pb-[19.86px] md:pb-0 ">
        Our Events
      </p>
      <EventsSlider />
    </div>
  );
};

export default Events;
