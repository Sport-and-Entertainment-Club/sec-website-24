import { useState } from "react";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const variants = {
    front: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    back: {
      rotateY: 180,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  const backVariants = {
    front: {
      rotateY: 180,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
    back: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="z-0 mx-auto relative w-[175.1px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[343.83px] h-full perspective my-[20px] md:my-[42px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}>
      <motion.div
        className="z-0 mx-auto w-full h-full relative transition-transform duration-300"
        style={{ transformStyle: "preserve-3d" }}
        animate={isFlipped ? "back" : "front"}>
        {/* Front side of the card */}
        <motion.div
          className="w-full h-full bg-purple-100 md:rounded-[10px] rounded-[5.09px] flex flex-col items-center justify-center p-[10.7px] lg:p-[15px] xl:p-[21px] backface-hidden"
          variants={variants}>
          <img src={event.image} alt={event.title} />
          <div className="flex relative w-full items-center justify-center">
            <p className="text-[15.28px] md:text-[20px] xl:text-[30px] font-montserrat font-[800] text-purple pt-[15.48px]">
              {event.title}
            </p>
            <img
              src="./assets/images/events/flip.svg"
              className="absolute right-0 bottom-[5px] w-[12.22px]  md:w-[20px] lg:w-[24px]"
              alt="Flip Icon"
              onClick={() => setIsFlipped(true)}
            />
          </div>
        </motion.div>

        {/* Back side of the card */}
        <motion.div
          className="z-0 mx-auto absolute w-full h-full bg-purple-100 md:rounded-[10px] rounded-[5.09px] grid grid-rows-[80%,20%] items-center justify-center p-[10.7px] lg:p-[15px] xl:p-[21px] backface-hidden"
          variants={backVariants}
          style={{ position: "absolute", top: 0, left: 0 }}>
          <div className="h-full  flex flex-col items-start justify-start">
            <p className="leading-[10.42px] md:leading-[20px] xl:leading-[24px] text-[7.5px] xl:text-[16px] lg:text-[14px] md:text-[11px] font-poppins font-[500] text-black  text-start">
              {event.description}
            </p>
          </div>

          <div className="z-0 flex relative w-full items-center justify-center">
            <p className="text-[15.28px] md:text-[20px] xl:text-[30px] font-montserrat font-[800] text-purple pt-[15.48px]">
              {event.title}
            </p>
            <img
              src="./assets/images/events/flip.svg"
              className="absolute right-0 bottom-[5px] w-[12.22px] md:w-[20px] lg:w-[24px]"
              alt="Flip Icon"
              onClick={() => setIsFlipped(false)}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventCard;
