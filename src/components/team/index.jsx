import Controller from "./Controller";
import Slider from "./Slider";
import { useState } from "react";
import team from "../../constants/team";
import Grid from "./Grid";
const Team = () => {
  const [teamIndex, setTeamIndex] = useState([0, 4]);
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
  return (
    <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 text-base px-0 md:px-16 my-20">
      <Controller
        teamIndex={teamIndex}
        setTeamIndex={setTeamIndex}
        team={team}
        incrementIndex={incrementIndex}
        decrementIndex={decrementIndex}
      />
      {/* <Slider teamIndex={teamIndex} team={team}  /> */}
      <Grid />
    </div>
  );
};

export default Team;
