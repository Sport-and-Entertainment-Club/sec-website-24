/* eslint-disable react/prop-types */
const Step = ({ step, active, bounder }) => {
  return (
    <div className=" flex flex-row justify-center items-center  ">
      <div
        className={` flex flex-col justify-center items-center w-8 lg:w-10 font-poppins text-lg font-bold aspect-square border-[0.5px] md:border-[1px] rounded-full mx-2 ${
          active
            ? " bg-[#9974FC] border-[#9974FC] text-white"
            : " bg-transparent border-purple-50 text-purple-50"
        }`}>
        <p className="font-poppins">{step}</p>
      </div>
      {!bounder && (
        <div className=" w-[100px] lg:w-60 h-[4px] rounded-full bg-purple-50"></div>
      )}
    </div>
  );
};

export default Step;
