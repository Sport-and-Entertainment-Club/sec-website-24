/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

const Slider = ({ teamIndex, team }) => {
  // this index is used to control the members we are gonna show in our team core
  return (
    <div
      className=" flex-grow flex-1 grid gap-4 "
      style={{ gridTemplateColumns: "46fr 18fr 18fr 18fr" }}
    >
      {team.map((item, index) => {
        return (
          <>
            <AnimatePresence key={index} mode="wait">
              <motion.div
                layout
                className={`  ${
                  index === 0 ? "aspect-square" : " aspect-auto"
                }  rounded-xl`}
                style={{ backgroundColor: item.color, transformOrigin: "left" }}
                initial={{ scaleX: 0 }} // Starting at full width
                animate={{ scaleX: 1 }} // Shrink the width to 0.1
                exit={{ scaleX: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              ></motion.div>
            </AnimatePresence>
          </>
        );
      })}
    </div>
  );
};

export default Slider;
