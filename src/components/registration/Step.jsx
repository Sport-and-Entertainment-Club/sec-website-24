/* eslint-disable react/prop-types */
const Step = ({ step, active, bounder }) => {
  return (
    <div className=" flex flex-row justify-center items-center  ">
      <div
        className={` flex flex-col justify-center items-center w-16 font-poppins text-2xl font-bold aspect-square  border-[2px] rounded-full mx-2 ${
          active
            ? " bg-purple-ocean border-purple-ocean text-white"
            : " bg-transparent border-purple-50 text-purple-50"
        }`}
      >
        <p className=" font-poppins"> {step}</p>
      </div>
      {!bounder && (
        <div className=" w-80 h-[5px] rounded-full bg-purple-50  "></div>
      )}
    </div>
  );
};

export default Step;
