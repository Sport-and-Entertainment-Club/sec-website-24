import React from "react";
import GoalsSlider from "../components/goalsAndVision/GoalsSlider";
const GoalsAndVision = () => {
  return (
    <div
      id="GoalsVision"
      className="my-[50px] md:my-[120px] mx-auto lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1350px] md:max-w-[700px] w-full ">
      <p className=" text-center md:text-[40px] text-title-mobile lg:text-[50px] xl:text-title-desktop font-[800] font-montserrat  md:pb-0 ">
        Goals&Vision
      </p>
      <GoalsSlider />
    </div>
  );
};

export default GoalsAndVision;
