import React from "react";
import { motion } from "framer-motion";
const Card = ({ goal }) => {
  return (
    <div className="px-[10px] md:px-[30px] py-[20px] z-0 mx-auto relative w-[175.1px] md:w-[250px] lg:w-[300px] xl:w-[380px] h-[120px] md:h-[200px]  perspective my-[20px] md:my-[42px]">
      <motion.div className="z-0 mx-auto w-full h-full relative transition-transform duration-300">
        <motion.div
          style={{ boxShadow: "0px 2.19px 2.19px 0px #00000040" }}
          className="w-full h-full bg-purple-100 md:rounded-[10px] rounded-[5.09px] flex text-purple  flex-col items-center justify-center p-[10.7px] lg:p-[15px] xl:p-[21px] backface-hidden">
          <p className="text-[13.28px] md:text-[18px] xl:text-[24px] font-montserrat font-[800] ">
            {goal.title}
          </p>
          <div className="md:pt-[25px] flex relative w-full items-center justify-center">
            <p className="text-[7.5px] xl:text-[14px] lg:text-[12px] md:text-[11px] font-poppins font-[400]">
              {goal.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
