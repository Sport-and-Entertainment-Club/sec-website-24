import team from "../../constants/team";
import { useState } from "react";
import { motion } from "framer-motion";
const CoreTeam = () => {
  const [teamArray, setTeamArray] = useState(Array(team.length).fill(true));
  const [teamIndex, setTeamIndex] = useState([0, 3]);
  const incrementIndex = () => {
    if (teamIndex[1] < team.length - 1) {
      const firstIndex = teamIndex[0] + 1;
      const secondIndex = teamIndex[1] + 1;
      setTeamIndex([firstIndex, secondIndex]);
    }
  };
  const decrementIndex = () => {
    if (teamIndex[0] > 0) {
      const firstIndex = teamIndex[0] - 1;
      const secondIndex = teamIndex[1] - 1;
      setTeamIndex([firstIndex, secondIndex]);
    }
  };

  const changeElemnt = (i, value) => {
    setTeamArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[i] = value;
      return newArray;
    });
  };

  return (
    <div className=" flex flex-col gap-10">
      <div className="min-w-[960px] flex flex-row ">
        {team.map((item, index) => {
          return (
            <>
              {(index === teamArray[0] - 1 && teamArray[0] !== 0) && (
                <motion.div
                  transition={{ duration: 1 }}
                  style={{ color: item.color }}
                  layout
                  className={`flex-grow  h-[430px] mr-6`}
                ></motion.div>
              )}
              {index == teamArray[0] && (
                <motion.div
                  layout
                  className={`  bg-rose-700 ${
                    index == teamArray[0] ? "w-[155px]" : "flex-"
                  } h-[430px] mr-6`}
                ></motion.div>
              )}
            </>
          );
        })}
      </div>
      <div>
        <button onClick={incrementIndex}>increment</button>
        <button onClick={decrementIndex}>decrement</button>
      </div>
    </div>
  );
};

export default CoreTeam;
