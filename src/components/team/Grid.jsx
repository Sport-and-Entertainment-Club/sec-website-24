import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Grid = () => {
  const [swich, setSwich] = useState(false);
  const handleClick = () => {
    setSwich((prev) => !prev);
  };
  const 
  return (
    <div className="flex flex-col gap-4">
      <div className=" min-w-[960px] flex flex-row 0">
        {swich && (
          <motion.div
            transition={{ duration: 1 }}
            layout
            className={` flex-grow  bg-teal-700 h-[430px] mr-6`}
          ></motion.div>
        )}
        <motion.div
          layout
          className={`  bg-rose-700 ${
            swich ? "w-[155px]" : "flex-grow"
          } h-[430px] mr-6`}
        ></motion.div>
        <motion.div
          layout
          className={`  bg-green-700 w-[155px] h-[430px] mr-6`}
        ></motion.div>
        <motion.div
          layout
          className={`  bg-gray-700 w-[155px] h-[430px] mr-6`}
        ></motion.div>
        {!swich && (
          <motion.div
            layout
            initial={{ width: "0" }}
            animate={{ width: !swich ? "155px" : "0" }}
            transition={{ duration: 1 }}
            className={`bg-yellow-700 w-[155px] h-[430px] mr-6`}
          ></motion.div>
        )}
      </div>
      <button onClick={handleClick}>switch</button>
      <p> swish : {swich ? "True" : "False"}</p>
    </div>
  );
};

export default Grid;
