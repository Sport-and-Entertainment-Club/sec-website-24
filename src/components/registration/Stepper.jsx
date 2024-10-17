/* eslint-disable react/prop-types */
import Step from "./Step";
const Stepper = ({ activeStep }) => {
  return (
    <div className=" mx-auto flex flex-row">
      {[0, 1, 2].map((item, index) => {
        return (
          <Step
            active={activeStep === item}
            step={item + 1}
            key={index}
            bounder={index === 2}
          />
        );
      })}
    </div>
  );
};

export default Stepper;
