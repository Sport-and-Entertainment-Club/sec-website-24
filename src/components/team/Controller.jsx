/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
const Controller = ({
  team,
  teamIndex,
  setTeamIndex,
  incrementIndex,
  decrementIndex,
}) => {
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);
  return (
    <div className=" flex flex-col justify-center items-center md:items-start gap-6 md:gap-10 px-10 md:px-0 w-auto md:w-[500px]  ">
      <div className=" flex flex-col justify-center items-center md:items-start gap-4 ">
        <h1 className=" text-purple text-3xl md:text-5xl font-bold font-montserrat">
          Meet Our Team
        </h1>
        <p className=" font-poppins text-xs lg:text-lg text-purple/70 text-center md:text-left">
          Creative minds working together to bring our goals to life and create
          amazing experiences for everyone.
        </p>
      </div>
      <div className=" space-x-4 md:space-x-8">
        <button
          className={` p-2 border-[2px] border-pink rounded-full ${
            left ? " bg-pink" : " bg-bg-white"
          }`}
          onClick={decrementIndex}
          disabled={teamIndex[0] === 0}
        >
          <GoArrowLeft
            className=" text-xl md:text-3xl"
            color={!left ? "#C653FB" : "#f2f1fc"}
          />
        </button>
        <button
          className={` p-2 border-[2px] border-pink rounded-full ${
            right ? " bg-pink" : " bg-bg-white"
          }`}
          onClick={incrementIndex}
          disabled={teamIndex[1]===team.length-1}
        >
          <GoArrowRight
            className=" text-xl md:text-3xl"
            color={!right ? "#C653FB" : "#f2f1fc"}
          />
        </button>
      </div>
    </div>
  );
};

export default Controller;
