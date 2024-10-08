import React from "react";
import Card from "../components/OurActivities/Card";
import icon1 from "../assets/OurActivities/icon1.svg";
import icon2 from "../assets/OurActivities/icon2.svg";
import icon3 from "../assets/OurActivities/icon3.svg";
import icon4 from "../assets/OurActivities/icon4.svg";
function OurActivities() {
  return (
    <>
      <div className="  flex justify-center items-center  py-8">
        <div className=" flex flex-col justify-center items-center w-3/4">
          <p>Our Activities</p>
          <div className=" grid grid-cols-2 gap-8 ">
            <Card
              icon={icon2}
              title={"Video games"}
              bg={"bg-blue-200"}
              descriptiontoshow={"Members enjoy energetic video game sessions,"}
              descriptionwhilehover={
                "creating a fun and collaborative gaming experience that brings our community together in shared digital adventures."
              }
            />
            <Card
              icon={icon3}
              title={"Board Games"}
              bg={"bg-purple-50"}
              descriptiontoshow={"Members enjoy energetic video game sessions"}
              descriptionwhilehover={
                "creating a fun and collaborative gaming experience that brings our community together in shared digital adventures."
              }
            />
            <Card
              icon={icon1}
              title={"Internal Matches"}
              bg={"bg-purple-200"}
              descriptiontoshow={
                "Members engage in lively sessions featuring Ludo, Dominoes, and Monopoly"
              }
              descriptionwhilehover={
                "creating a fun and collaborative gaming experience that brings our community together in shared digital adventures."
              }
            />
            <Card
              icon={icon4}
              title={"Movie Night"}
              bg={"bg-turquoise-50"}
              descriptiontoshow={
                "We plan weekly movie nights on our Discord server, enabling members to watch and discuss films simultaneously."
              }
              descriptionwhilehover={
                "creating a fun and collaborative gaming experience that brings our community together in shared digital adventures."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurActivities;
