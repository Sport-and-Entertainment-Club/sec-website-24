import team from "../../constants/team";
import { useState } from "react";
const CoreTeam = () => {
  const [teamArray, setTeamArray] = useState(Array(team.length).fill(true));
  const changeElemnt = (i, value) => {
    setTeamArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[i] = value;
      return newArray;
    });
  };
  return (
    <div className=" flex flex-col gap-10">
      <div>
        {team.map((item, index) => {
          return (
            <>{teamArray[index] && <div key={index} className={``}></div>}</>
          );
        })}
      </div>
      <div>
        <button>increment</button>
        <button>decrement</button>
      </div>
    </div>
  );
};

export default CoreTeam;
